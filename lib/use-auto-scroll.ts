import { useEffect, useState } from "react"
import { type CarouselApi } from "@/components/ui/carousel"

export function useAutoScroll(api: CarouselApi | null) {
  const [, setAutoScroll] = useState(0)

  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext()
      setAutoScroll((prev) => prev + 1)
    }, 3000) // Scroll every 3 seconds

    return () => clearInterval(interval)
  }, [api])
}
