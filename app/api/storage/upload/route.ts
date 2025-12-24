import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

/**
 * POST /api/storage/upload
 * Upload a file to Supabase Storage
 * 
 * Request body (FormData):
 * - file: File to upload
 * - path: Path in bucket (e.g., "portfolio/ess/hero.jpg")
 * 
 * Note: Using service role key to bypass RLS for uploads
 * Security is handled by bucket being public for reads, authenticated for writes
 */
export async function POST(request: NextRequest) {
    try {
        // Use service role key for storage operations
        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        )

        // Parse form data
        const formData = await request.formData()
        const file = formData.get("file") as File
        const path = formData.get("path") as string

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 })
        }

        if (!path) {
            return NextResponse.json({ error: "No path provided" }, { status: 400 })
        }

        // Validate file type
        if (!file.type.startsWith("image/")) {
            return NextResponse.json(
                { error: "Only image files are allowed" },
                { status: 400 }
            )
        }

        // Validate file size (5MB max)
        const maxSize = 5 * 1024 * 1024 // 5MB
        if (file.size > maxSize) {
            return NextResponse.json(
                { error: "File size must be less than 5MB" },
                { status: 400 }
            )
        }

        // Convert File to ArrayBuffer then to Buffer
        const arrayBuffer = await file.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)

        // Upload to Supabase Storage
        const { data, error } = await supabase.storage
            .from("portfolio-images")
            .upload(path, buffer, {
                contentType: file.type,
                cacheControl: "no-cache, no-store, must-revalidate", // Prevent browser caching
                upsert: true, // Replace if exists
            })

        if (error) {
            console.error("Upload error:", error)
            return NextResponse.json(
                { error: error.message || "Failed to upload file" },
                { status: 500 }
            )
        }

        // Get public URL
        const { data: urlData } = supabase.storage
            .from("portfolio-images")
            .getPublicUrl(data.path)

        return NextResponse.json({
            success: true,
            path: data.path,
            url: urlData.publicUrl,
        })
    } catch (error: any) {
        console.error("Unexpected upload error:", error)
        return NextResponse.json(
            { error: error.message || "Internal server error" },
            { status: 500 }
        )
    }
}
