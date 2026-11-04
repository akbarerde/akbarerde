"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

function isDarkMode() {
  return document.documentElement.classList.contains("dark")
}

export function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    setIsDark(isDarkMode())
  }, [])

  const toggleTheme = () => {
    const next = !isDarkMode()
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
    setIsDark(next)
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label="Dark mode"
      aria-pressed={isDark}
      title="Toggle dark mode"
      onClick={toggleTheme}
    >
      <SunIcon className="hidden dark:block" />
      <MoonIcon className="block dark:hidden" />
    </Button>
  )
}
