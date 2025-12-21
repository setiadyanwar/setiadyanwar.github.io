import { NextResponse } from "next/server"
import { getSupabaseServerClient } from "@/lib/supabase/client"

// GET /api/portfolio/[id] - Get single portfolio item by ID
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
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
            .select("*")
            .eq("id", params.id)
            .order("updated_at", { ascending: false })
            .single()

        if (error) {
            console.error(`Error fetching portfolio item ${params.id}:`, error)
            return NextResponse.json(
                { error: "Portfolio item not found" },
                { status: 404 }
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
