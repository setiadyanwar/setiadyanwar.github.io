import { NextRequest, NextResponse } from "next/server"
import { getSupabaseServerClient } from "@/lib/supabase/client"

/**
 * DELETE /api/storage/delete
 * Delete a file from Supabase Storage
 * 
 * Request body (JSON):
 * - path: Path to file in bucket
 */
export async function DELETE(request: NextRequest) {
    try {
        const supabase = getSupabaseServerClient()

        if (!supabase) {
            return NextResponse.json(
                { error: "Database not configured" },
                { status: 500 }
            )
        }

        // Check authentication
        const {
            data: { user },
            error: authError,
        } = await supabase.auth.getUser()

        if (authError || !user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        // Parse request body
        const body = await request.json()
        const { path } = body

        if (!path) {
            return NextResponse.json({ error: "No path provided" }, { status: 400 })
        }

        // Delete from Supabase Storage
        const { error } = await supabase.storage
            .from("portfolio-images")
            .remove([path])

        if (error) {
            console.error("Delete error:", error)
            return NextResponse.json(
                { error: error.message || "Failed to delete file" },
                { status: 500 }
            )
        }

        return NextResponse.json({
            success: true,
            message: "File deleted successfully",
        })
    } catch (error: any) {
        console.error("Unexpected delete error:", error)
        return NextResponse.json(
            { error: error.message || "Internal server error" },
            { status: 500 }
        )
    }
}
