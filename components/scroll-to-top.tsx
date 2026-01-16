"use client"

import { ChevronUp } from "lucide-react"
import { useScrollPosition } from "@/hooks/use-scroll-position"

export default function ScrollToTop() {
    const { y } = useScrollPosition({ throttle: 100 })
    const isVisible = y > 300

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    if (!isVisible) return null

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Scroll to top"
        >
            <ChevronUp className="w-6 h-6" />
        </button>
    )
}
