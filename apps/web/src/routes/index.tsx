import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-3 bg-primary font-heading text-primary-foreground">
      <h1
        aria-label="ERDE"
        className="flex flex-col items-center gap-2 font-heading font-semibold"
      >
        <span
          aria-hidden="true"
          className="text-4xl tracking-tighter sm:text-5xl md:text-6xl"
        >
          A\
        </span>
        <span aria-hidden="true" className="text-sm tracking-[0.2em]">
          ERDE
        </span>
      </h1>
      <p className="font-sans text-sm text-primary-foreground/70">
        Studio personal dan sistem desain.
      </p>
    </main>
  )
}
