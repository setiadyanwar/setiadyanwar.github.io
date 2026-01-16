import { useState, useEffect } from "react"

interface ScrollPosition {
    x: number
    y: number
}

interface UseScrollPositionOptions {
    throttle?: number
}

/**
 * Reusable scroll position tracking hook
 * Returns current scroll position with optional throttling
 */
export function useScrollPosition(
    options: UseScrollPositionOptions = {}
): ScrollPosition {
    const { throttle = 100 } = options

    const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
        x: 0,
        y: 0,
    })

    useEffect(() => {
        let timeoutId: NodeJS.Timeout | null = null
        let ticking = false

        const updatePosition = () => {
            setScrollPosition({
                x: window.scrollX,
                y: window.scrollY,
            })
            ticking = false
        }

        const handleScroll = () => {
            if (!ticking) {
                if (throttle > 0) {
                    if (timeoutId) clearTimeout(timeoutId)
                    timeoutId = setTimeout(() => {
                        updatePosition()
                    }, throttle)
                } else {
                    window.requestAnimationFrame(updatePosition)
                }
                ticking = true
            }
        }

        // Set initial position
        updatePosition()

        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
            if (timeoutId) clearTimeout(timeoutId)
        }
    }, [throttle])

    return scrollPosition
}
