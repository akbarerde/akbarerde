import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-primary text-primary-foreground">
      <h1 className="font-heading text-7xl font-semibold tracking-tighter sm:text-8xl md:text-9xl">
        ERDE
      </h1>
    </main>
  )
}
