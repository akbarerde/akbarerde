import { createFileRoute } from "@tanstack/react-router"

import { ComponentGallery } from "@/components/component-gallery"
import { GalleryMotionProvider } from "@/components/gallery-motion"

export const Route = createFileRoute("/components")({
  head: () => ({
    meta: [
      { title: "Components · ERDE" },
      {
        name: "description",
        content:
          "A living gallery of all 63 shadcn/ui components installed in the ERDE design system.",
      },
    ],
  }),
  component: ComponentsPage,
})

function ComponentsPage() {
  return (
    <GalleryMotionProvider>
      <ComponentGallery />
    </GalleryMotionProvider>
  )
}
