/**
 * Supabase Storage utility functions
 * Handles file upload, deletion, and URL generation for portfolio images
 */

import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Client-side supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

const BUCKET_NAME = "portfolio-images"

/**
 * Upload a file to Supabase Storage
 * @param file - File to upload
 * @param path - Path in bucket (e.g., "portfolio/ess/hero.jpg")
 * @returns Object with success status, file path, and public URL
 */
export async function uploadFile(file: File, path: string) {
    try {
        // Validate file type
        if (!file.type.startsWith("image/")) {
            return {
                success: false,
                error: "Only image files are allowed",
            }
        }

        // Validate file size (5MB max)
        const maxSize = 5 * 1024 * 1024 // 5MB
        if (file.size > maxSize) {
            return {
                success: false,
                error: "File size must be less than 5MB",
            }
        }

        // Upload file
        const { data, error } = await supabase.storage
            .from(BUCKET_NAME)
            .upload(path, file, {
                cacheControl: "3600",
                upsert: true, // Replace if exists
            })

        if (error) {
            console.error("Upload error:", error)
            return {
                success: false,
                error: error.message,
            }
        }

        // Get public URL
        const { data: urlData } = supabase.storage
            .from(BUCKET_NAME)
            .getPublicUrl(data.path)

        return {
            success: true,
            path: data.path,
            url: urlData.publicUrl,
        }
    } catch (error: any) {
        console.error("Unexpected upload error:", error)
        return {
            success: false,
            error: error.message || "Failed to upload file",
        }
    }
}

/**
 * Delete a file from Supabase Storage
 * @param path - Path to file in bucket
 * @returns Object with success status
 */
export async function deleteFile(path: string) {
    try {
        const { error } = await supabase.storage.from(BUCKET_NAME).remove([path])

        if (error) {
            console.error("Delete error:", error)
            return {
                success: false,
                error: error.message,
            }
        }

        return {
            success: true,
        }
    } catch (error: any) {
        console.error("Unexpected delete error:", error)
        return {
            success: false,
            error: error.message || "Failed to delete file",
        }
    }
}

/**
 * Get public URL for a file
 * @param path - Path to file in bucket
 * @returns Public URL
 */
export function getPublicUrl(path: string): string {
    const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(path)
    return data.publicUrl
}

/**
 * Generate a unique filename with timestamp
 * @param originalName - Original filename
 * @returns Unique filename
 */
export function generateUniqueFilename(originalName: string): string {
    const timestamp = Date.now()
    const randomStr = Math.random().toString(36).substring(2, 8)
    const extension = originalName.split(".").pop()
    const nameWithoutExt = originalName.replace(`.${extension}`, "")
    const sanitizedName = nameWithoutExt
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "-")
        .replace(/-+/g, "-")
        .substring(0, 30)

    return `${sanitizedName}-${timestamp}-${randomStr}.${extension}`
}

/**
 * Upload portfolio image with automatic path generation
 * @param file - File to upload
 * @param portfolioId - Portfolio item ID (slug)
 * @param imageType - Type of image (hero, problem, solution, step)
 * @param index - Optional index for numbered images (e.g., problem-1, problem-2)
 * @returns Upload result with path and URL
 */
export async function uploadPortfolioImage(
    file: File,
    portfolioId: string,
    imageType: "hero" | "problem" | "solution" | "step" | "additional",
    index?: number
) {
    const extension = file.name.split(".").pop()
    let filename: string

    if (imageType === "hero") {
        filename = `hero.${extension}`
    } else if (index !== undefined) {
        filename = `${imageType}-${index}.${extension}`
    } else {
        filename = generateUniqueFilename(file.name)
    }

    const path = `portfolio/${portfolioId}/${filename}`
    return uploadFile(file, path)
}

/**
 * Upload category image (hero, experience, activities, certificates)
 * @param file - File to upload
 * @param category - Category folder name
 * @param filename - Optional custom filename
 * @returns Upload result with path and URL
 */
export async function uploadCategoryImage(
    file: File,
    category: "hero" | "experience" | "activities" | "certificates",
    filename?: string
) {
    const finalFilename = filename || generateUniqueFilename(file.name)
    const path = `${category}/${finalFilename}`
    return uploadFile(file, path)
}

/**
 * List all files in a folder
 * @param folderPath - Path to folder
 * @returns Array of file objects
 */
export async function listFiles(folderPath: string) {
    try {
        const { data, error } = await supabase.storage.from(BUCKET_NAME).list(folderPath, {
            limit: 100,
            offset: 0,
            sortBy: { column: "name", order: "asc" },
        })

        if (error) {
            console.error("List files error:", error)
            return {
                success: false,
                error: error.message,
                files: [],
            }
        }

        return {
            success: true,
            files: data || [],
        }
    } catch (error: any) {
        console.error("Unexpected list files error:", error)
        return {
            success: false,
            error: error.message || "Failed to list files",
            files: [],
        }
    }
}

/**
 * Check if a file exists in storage
 * @param path - Path to file
 * @returns Boolean indicating if file exists
 */
export async function fileExists(path: string): Promise<boolean> {
    try {
        const { data, error } = await supabase.storage.from(BUCKET_NAME).list(path.split("/").slice(0, -1).join("/"))

        if (error) return false

        const filename = path.split("/").pop()
        return data?.some((file) => file.name === filename) || false
    } catch {
        return false
    }
}
