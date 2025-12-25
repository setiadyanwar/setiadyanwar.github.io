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

        // Skip if already tracked this path in current session
        if (trackedRef.current.has(pathname)) return

        // Only track in production (remove this condition if you want to test in dev)
        if (process.env.NODE_ENV === 'development') {
            console.log('[Analytics] Would track:', pathname, '(disabled in dev)')
            return
        }

        const trackView = async () => {
            try {
                // Dynamic import to avoid bundling Supabase in every page
                const { getSupabaseBrowserClient } = await import('@/lib/supabase/client')
                const supabase = getSupabaseBrowserClient()

                if (!supabase) {
                    console.warn('[Analytics] Supabase client not available')
                    return
                }

                const { error } = await supabase.rpc('increment_page_view', {
                    page_path: pathname
                })

                if (error) {
                    // Only log in development
                    if (process.env.NODE_ENV === 'development') {
                        console.warn('[Analytics] Tracking error:', error.message)
                    }
                } else {
                    // Mark as tracked
                    trackedRef.current.add(pathname)
                }
            } catch (error) {
                // Silently fail in production, log in development
                if (process.env.NODE_ENV === 'development') {
                    console.warn('[Analytics] Setup required. Run SQL script in Supabase.')
                }
            }
        }

        // Small delay to avoid blocking initial render
        const timeoutId = setTimeout(trackView, 100)

        return () => clearTimeout(timeoutId)
    }, [pathname])

    return null
}
