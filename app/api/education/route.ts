import { NextResponse } from "next/server"
import { getSupabaseServerClient } from "@/lib/supabase/client"

// GET /api/education - Get all education records
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
            .from("education_experiences")
            .select("*")
            .order("display_order", { ascending: true })

        if (error) {
            console.error("Error fetching education records:", error)
            return NextResponse.json(
                { error: "Failed to fetch education records" },
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
