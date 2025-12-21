import { NextResponse } from "next/server"
import { getSupabaseServerClient } from "@/lib/supabase/client"

// GET /api/organization - Get all organization experiences
export async function GET() {
    try {
        const supabase = getSupabaseServerClient()

        if (!supabase) {
            return NextResponse.json(
                { error: "Database not configured" },
                { status: 500 }
            )
        }

        const { data, error } = await supabase
            .from("organization_experiences")
            .select("*")
            .order("display_order", { ascending: true })

        if (error) {
            console.error("Error fetching organization experiences:", error)
            return NextResponse.json(
                { error: "Failed to fetch organization experiences" },
                { status: 500 }
            )
        }

        return NextResponse.json(data, {
            headers: {
                "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
            },
        })
    } catch (error) {
        console.error("Unexpected error:", error)
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}
