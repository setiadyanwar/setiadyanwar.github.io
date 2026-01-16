import { useState, useEffect, useCallback } from "react"

interface UseModalOptions {
    onClose?: () => void
    closeOnEscape?: boolean
    closeOnBackdrop?: boolean
    lockScroll?: boolean
}

interface UseModalReturn {
    isOpen: boolean
    open: () => void
    close: () => void
    toggle: () => void
}

/**
 * Reusable modal state management hook
 * Handles ESC key, body scroll lock, and cleanup
 */
export function useModal(
    initialState = false,
    options: UseModalOptions = {}
): UseModalReturn {
    const {
        onClose,
        closeOnEscape = true,
        closeOnBackdrop = true,
        lockScroll = true,
    } = options

    const [isOpen, setIsOpen] = useState(initialState)

    const close = useCallback(() => {
        setIsOpen(false)
        onClose?.()
    }, [onClose])

    const open = useCallback(() => {
        setIsOpen(true)
    }, [])

    const toggle = useCallback(() => {
        setIsOpen((prev) => !prev)
    }, [])

    // Handle ESC key
    useEffect(() => {
        if (!isOpen || !closeOnEscape) return

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                e.preventDefault()
                close()
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [isOpen, closeOnEscape, close])

    // Handle body scroll lock
    useEffect(() => {
        if (!lockScroll) return

        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }

        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen, lockScroll])

    return { isOpen, open, close, toggle }
}
