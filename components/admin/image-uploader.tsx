"use client"

import { useState, useEffect, useRef, ChangeEvent } from "react"
import { Upload, X, Image as ImageIcon, Loader2 } from "lucide-react"

interface ImageUploaderProps {
    /**
     * Current image URL (can be Unsplash or Supabase URL)
     */
    currentImageUrl?: string

    /**
     * Label for the uploader
     */
    label: string

    /**
     * Path in Supabase Storage bucket
     * Example: "portfolio/ess/hero.jpg"
     */
    storagePath: string

    /**
     * Callback when upload is successful
     * Returns the new public URL
     */
    onUploadSuccess: (url: string, path: string) => void

    /**
     * Callback when image is removed
     */
    onRemove?: () => void

    /**
     * Optional helper text
     */
    helperText?: string

    /**
     * Optional className for styling
     */
    className?: string
}

export default function ImageUploader({
    currentImageUrl,
    label,
    storagePath,
    onUploadSuccess,
    onRemove,
    helperText,
    className = "",
}: ImageUploaderProps) {
    const [uploading, setUploading] = useState(false)
    const [preview, setPreview] = useState<string | null>(currentImageUrl || null)
    const [error, setError] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    // Sync preview with currentImageUrl prop changes
    useEffect(() => {
        setPreview(currentImageUrl || null)
    }, [currentImageUrl])

    const handleFileSelect = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        // Validate file type
        if (!file.type.startsWith("image/")) {
            setError("Please select an image file")
            return
        }

        // Validate file size (5MB max)
        const maxSize = 5 * 1024 * 1024
        if (file.size > maxSize) {
            setError("File size must be less than 5MB")
            return
        }

        setError(null)
        setUploading(true)

        try {
            // Create preview
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result as string)
            }
            reader.readAsDataURL(file)

            // Upload to server
            const formData = new FormData()
            formData.append("file", file)
            formData.append("path", storagePath)

            const response = await fetch("/api/storage/upload", {
                method: "POST",
                body: formData,
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || "Failed to upload image")
            }

            // Add cache busting timestamp to force browser reload
            const urlWithCacheBust = `${data.url}?t=${Date.now()}`

            // Call success callback with new URL (without cache bust for storage)
            onUploadSuccess(data.url, data.path)
            // Set preview with cache bust to force reload
            setPreview(urlWithCacheBust)

            // Reset file input to allow uploading the same file again
            if (fileInputRef.current) {
                fileInputRef.current.value = ""
            }
        } catch (err: any) {
            console.error("Upload error:", err)
            setError(err.message || "Failed to upload image")
            setPreview(currentImageUrl || null)
        } finally {
            setUploading(false)
        }
    }

    const handleRemove = () => {
        setPreview(null)
        setError(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
        onRemove?.()
    }

    const handleClick = () => {
        fileInputRef.current?.click()
    }

    return (
        <div className={`space-y-2 ${className}`}>
            {/* Label */}
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {label}
            </label>

            {/* Upload Area */}
            <div className="relative">
                {preview ? (
                    // Image Preview
                    <div className="relative group">
                        <img
                            src={preview}
                            alt={label}
                            className="w-full h-48 object-cover rounded-lg border-2 border-gray-200 dark:border-gray-700"
                            key={preview} // Force re-render when preview changes
                        />

                        {/* Overlay with actions */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                            <button
                                type="button"
                                onClick={handleClick}
                                disabled={uploading}
                                className="px-4 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                {uploading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Uploading...
                                    </>
                                ) : (
                                    <>
                                        <Upload className="w-4 h-4" />
                                        Replace
                                    </>
                                )}
                            </button>

                            <button
                                type="button"
                                onClick={handleRemove}
                                disabled={uploading}
                                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                <X className="w-4 h-4" />
                                Remove
                            </button>
                        </div>

                        {/* Uploading indicator */}
                        {uploading && (
                            <div className="absolute inset-0 bg-black bg-opacity-70 rounded-lg flex items-center justify-center">
                                <div className="text-center text-white">
                                    <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2" />
                                    <p className="text-sm">Uploading...</p>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    // Upload Placeholder
                    <button
                        type="button"
                        onClick={handleClick}
                        disabled={uploading}
                        className="w-full h-48 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex flex-col items-center justify-center gap-2 text-gray-500 dark:text-gray-400"
                    >
                        {uploading ? (
                            <>
                                <Loader2 className="w-8 h-8 animate-spin" />
                                <p className="text-sm">Uploading...</p>
                            </>
                        ) : (
                            <>
                                <ImageIcon className="w-8 h-8" />
                                <p className="text-sm font-medium">Click to upload image</p>
                                <p className="text-xs">PNG, JPG, WEBP up to 5MB</p>
                            </>
                        )}
                    </button>
                )}

                {/* Hidden file input */}
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                />
            </div>

            {/* Helper text */}
            {helperText && !error && (
                <p className="text-xs text-gray-500 dark:text-gray-400">{helperText}</p>
            )}

            {/* Error message */}
            {error && (
                <p className="text-xs text-red-600 dark:text-red-400">{error}</p>
            )}

            {/* Storage path info */}
            <p className="text-xs text-gray-400 dark:text-gray-500 font-mono">
                Path: {storagePath}
            </p>
        </div>
    )
}
