import { Link, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-8 bg-primary text-primary-foreground">
      <h1 className="font-heading text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl">
        A\
      </h1>
      <Link
        to="/components"
        className="rounded-lg border border-primary-foreground/30 px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
      >
        Browse components
      </Link>
    </main>
  )
}
