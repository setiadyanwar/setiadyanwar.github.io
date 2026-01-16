import { useEffect, useRef, useState } from "react"

interface UseIntersectionObserverOptions {
    threshold?: number | number[]
    root?: Element | null
    rootMargin?: string
    freezeOnceVisible?: boolean
}

/**
 * Reusable intersection observer hook for scroll animations
 * Returns whether the element is visible in viewport
 */
export function useIntersectionObserver(
    options: UseIntersectionObserverOptions = {}
): [React.RefObject<HTMLDivElement>, boolean] {
    const {
        threshold = 0.1,
        root = null,
        rootMargin = "0px",
        freezeOnceVisible = false,
    } = options

    const elementRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = elementRef.current
        if (!element) return

        // If already visible and should freeze, don't observe
        if (freezeOnceVisible && isVisible) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isIntersecting = entry.isIntersecting
                setIsVisible(isIntersecting)

                // Unobserve if should freeze once visible
                if (freezeOnceVisible && isIntersecting) {
                    observer.unobserve(element)
                }
            },
            { threshold, root, rootMargin }
        )

        observer.observe(element)

        return () => {
            observer.disconnect()
        }
    }, [threshold, root, rootMargin, freezeOnceVisible, isVisible])

    return [elementRef, isVisible]
}
