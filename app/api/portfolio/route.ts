import { NextResponse } from "next/server"
import { getSupabaseServerClient } from "@/lib/supabase/client"

// GET /api/portfolio - Get all portfolio items
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
            .from("portfolio_items")
            .select("id, title, subtitle, category, image, technologies, date, created_at, display_order")
            .order("display_order", { ascending: true })
            .order("created_at", { ascending: false })

        if (error) {
            console.error("Error fetching portfolio items:", error)
            return NextResponse.json(
                { error: "Failed to fetch portfolio items" },
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
