"use client"

import * as React from "react"
import {
  MotionConfig,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react"

import { cn } from "@workspace/ui/lib/utils"

type SectionLink = {
  id: string
  title: string
}

const pillTransition = {
  type: "spring",
  stiffness: 480,
  damping: 42,
  mass: 0.6,
} as const

const instantTransition = { duration: 0 } as const

export function GalleryMotionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const reduceMotion = useReducedMotion()
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 32,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-px origin-left bg-foreground/30"
      style={{ scaleX: reduceMotion ? scrollYProgress : smoothProgress }}
    />
  )
}

export function SectionNav({ sections }: { sections: readonly SectionLink[] }) {
  const [active, setActive] = useActiveSection(sections)
  const reduceMotion = useReducedMotion()
  const navRef = React.useRef<HTMLElement | null>(null)

  React.useEffect(() => {
    const nav = navRef.current
    const activeLink = nav?.querySelector<HTMLElement>(
      'a[aria-current="location"]'
    )
    if (!nav || !activeLink) return

    const navRect = nav.getBoundingClientRect()
    const linkRect = activeLink.getBoundingClientRect()
    const edge = 12
    const isVisible =
      linkRect.left >= navRect.left + edge &&
      linkRect.right <= navRect.right - edge

    if (isVisible) return

    const targetLeft =
      nav.scrollLeft +
      linkRect.left -
      navRect.left -
      (navRect.width - linkRect.width) / 2

    nav.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: reduceMotion ? "auto" : "smooth",
    })
  }, [active, reduceMotion])

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    const target = document.getElementById(id)
    if (!target) return

    event.preventDefault()
    setActive(id)
    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    })
    window.history.replaceState(null, "", `#${id}`)
  }

  return (
    <nav
      ref={navRef}
      aria-label="Component sections"
      className="sticky top-0 z-30 flex [scrollbar-width:none] gap-1 overflow-x-auto border-b bg-background/95 py-2 backdrop-blur-sm [&::-webkit-scrollbar]:hidden"
    >
      {sections.map((section) => {
        const isActive = active === section.id

        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={isActive ? "location" : undefined}
            onClick={(event) => handleClick(event, section.id)}
            className={cn(
              "relative isolate shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              isActive
                ? "font-medium text-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {isActive ? (
              <motion.span
                layoutId="gallery-section-pill"
                className="absolute inset-0 -z-10 rounded-md bg-muted"
                transition={reduceMotion ? instantTransition : pillTransition}
              />
            ) : null}
            <span className="relative">{section.title}</span>
          </a>
        )
      })}
    </nav>
  )
}

function useActiveSection(sections: readonly SectionLink[]) {
  const [active, setActive] = React.useState(sections[0]?.id ?? "")

  React.useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const marker = window.scrollY + 120
      let current = sections[0]?.id ?? ""

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (!element) continue
        if (element.getBoundingClientRect().top + window.scrollY <= marker) {
          current = section.id
        }
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8
      if (atBottom) {
        current = sections[sections.length - 1]?.id ?? current
      }

      setActive((previous) => (previous === current ? previous : current))
    }

    const onScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame !== 0) window.cancelAnimationFrame(frame)
    }
  }, [sections])

  return [active, setActive] as const
}
