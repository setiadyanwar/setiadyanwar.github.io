"use client"

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function AnalyticsTracker() {
    const pathname = usePathname()
    const trackedRef = useRef<Set<string>>(new Set())

    useEffect(() => {
        // Skip if no pathname
        if (!pathname) return

        // Skip admin pages
        if (pathname.startsWith('/admin')) return

        // Only track in production (remove this condition if you want to test in dev)
        if (process.env.NODE_ENV === 'development') {
            console.log('[Analytics] Would track:', pathname, '(disabled in dev)')
            return
        }



        const trackView = async () => {
            try {
                // Call our Next.js API route to handle tracking (IP, Device, etc.)
                const response = await fetch('/api/analytics/track', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ path: pathname }),
                })

                if (!response.ok) {
                    if (process.env.NODE_ENV === 'development') {
                        console.warn('[Analytics] Tracking failed:', response.statusText)
                    }
                } else {
                    // Mark as tracked
                    trackedRef.current.add(pathname)
                }
            } catch (error) {
                // Silently fail in production, log in development
                if (process.env.NODE_ENV === 'development') {
                    console.warn('[Analytics] Request failed:', error)
                }
            }
        }

        // Small delay to avoid blocking initial render
        const timeoutId = setTimeout(trackView, 100)

        return () => clearTimeout(timeoutId)
    }, [pathname])

    return null
}
