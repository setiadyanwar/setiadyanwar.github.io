import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function middleware(request: NextRequest) {
    // Only protect /admin routes
    if (request.nextUrl.pathname.startsWith("/admin")) {
        // Allow access to login page
        if (request.nextUrl.pathname === "/admin/login") {
            // If already logged in, redirect to dashboard
            if (request.cookies.has("admin_session")) {
                const sessionId = request.cookies.get("admin_session")?.value

                // Verify session is still valid
                if (sessionId && await isValidSession(sessionId)) {
                    return NextResponse.redirect(new URL("/admin", request.url))
                }
            }
            return NextResponse.next()
        }

        // Check for session cookie
        const sessionId = request.cookies.get("admin_session")?.value

        if (!sessionId || !(await isValidSession(sessionId))) {
            return NextResponse.redirect(new URL("/admin/login", request.url))
        }

        // Add security headers
        const response = NextResponse.next()
        response.headers.set("X-Frame-Options", "DENY")
        response.headers.set("X-Content-Type-Options", "nosniff")
        response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
        response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")

        return response
    }

    return NextResponse.next()
}

async function isValidSession(sessionId: string): Promise<boolean> {
    try {
        const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
        const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY

        if (!supabaseUrl || !supabaseKey) {
            return false
        }

        const supabase = createClient(supabaseUrl, supabaseKey)

        const { data, error } = await supabase
            .from("admin_sessions")
            .select("*")
            .eq("id", sessionId)
            .eq("is_active", true)
            .gt("expires_at", new Date().toISOString())
            .single()

        return !error && !!data
    } catch (error) {
        console.error("Session validation error:", error)
        return false
    }
}

export const config = {
    matcher: "/admin/:path*",
}
