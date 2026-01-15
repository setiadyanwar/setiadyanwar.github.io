import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { createClient } from "@/lib/supabase/server"

export async function GET() {
    try {
        const sessionId = cookies().get("admin_session")?.value

        if (!sessionId) {
            return NextResponse.json({ valid: false }, { status: 401 })
        }

        const supabase = createClient()

        const { data, error } = await supabase
            .from("admin_sessions")
            .select("*")
            .eq("id", sessionId)
            .eq("is_active", true)
            .gt("expires_at", new Date().toISOString())
            .single()

        if (error || !data) {
            // Session not found or expired, clean up cookie
            cookies().delete("admin_session")
            return NextResponse.json({ valid: false }, { status: 401 })
        }

        // Session is valid
        return NextResponse.json({ valid: true, session: data })
    } catch (error) {
        console.error("Session validation error:", error)
        return NextResponse.json({ valid: false }, { status: 500 })
    }
}
