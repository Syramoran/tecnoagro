"use client"

import * as React from "react"
import Image from "next/image"
import { Package } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import type { CarouselApi } from "@/components/ui/carousel"

interface ProductImageCarouselProps {
  images: string[]
  videos?: string[]
  productName: string
}

type MediaItem =
  | { type: "image"; src: string }
  | { type: "video"; src: string }

export function ProductImageCarousel({ images, videos = [], productName }: ProductImageCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([])

  const media: MediaItem[] = [
    ...images.map((src) => ({ type: "image" as const, src })),
    ...videos.map((src) => ({ type: "video" as const, src })),
  ]

  const advanceNext = React.useCallback(() => {
    if (!api) return
    const cur = api.selectedScrollSnap()
    const next = (cur + 1) % api.scrollSnapList().length
    api.scrollTo(next)
  }, [api])

  React.useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      const idx = api.selectedScrollSnap()
      setCurrent(idx)
      // Pause all videos when navigating away from them
      videoRefs.current.forEach((v, i) => {
        if (v && i !== idx) v.pause()
      })
    })
  }, [api])

  React.useEffect(() => {
    if (!api || media.length <= 1) return

    const currentItem = media[current]

    if (currentItem?.type === "image") {
      const timer = setTimeout(advanceNext, 4000)
      return () => clearTimeout(timer)
    }

    if (currentItem?.type === "video") {
      const video = videoRefs.current[current]
      if (!video) return
      video.addEventListener("ended", advanceNext)
      return () => video.removeEventListener("ended", advanceNext)
    }
  }, [api, current, media.length, advanceNext])

  if (media.length === 0) {
    return (
      <div className="aspect-square rounded-lg bg-muted flex flex-col items-center justify-center gap-3 text-muted-foreground">
        <Package className="h-20 w-20 opacity-30" />
        <span className="text-sm">Imágenes próximamente</span>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {media.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                {item.type === "video" ? (
                  <video
                    ref={(el) => { videoRefs.current[index] = el }}
                    src={item.src}
                    controls
                    className="w-full h-full object-cover"
                    aria-label={`${productName} - video ${index + 1}`}
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={`${productName} - imagen ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {media.length > 1 && (
        <div className="flex gap-2">
          {media.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === current ? "bg-gray-500" : "bg-gray-300"
              }`}
              aria-label={`Ir a elemento ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
