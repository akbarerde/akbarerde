import { defineConfig } from "vite"
import { devtools } from "@tanstack/devtools-vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

const config = defineConfig({
  // `components.json` lives at the app root for the shadcn CLI. Vite's default
  // extension resolution would otherwise resolve the `/components` route to
  // that file in dev, so keep `.json` out of extensionless resolution.
  resolve: {
    tsconfigPaths: true,
    extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx"],
  },
  plugins: [devtools(), tailwindcss(), tanstackStart(), viteReact()],
})

export default config
