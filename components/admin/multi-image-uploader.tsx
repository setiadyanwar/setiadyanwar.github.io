
"use client"

import { useState, useRef, ChangeEvent, DragEvent } from "react"
import { UploadCloud, X, Loader2, Plus } from "lucide-react"

interface MultiImageUploaderProps {
    images: string[]
    onImagesChange: (newImages: string[]) => void
    storagePath: string
    label?: string
    helperText?: string
}

export default function MultiImageUploader({
    images,
    onImagesChange,
    storagePath,
    label = "Gallery Images",
    helperText
}: MultiImageUploaderProps) {
    const [uploading, setUploading] = useState(false)
    const [isDragging, setIsDragging] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const processFiles = async (files: FileList | File[]) => {
        const fileArray = Array.from(files)
        const validFiles = fileArray.filter(file => file.type.startsWith("image/"))

        if (validFiles.length === 0) return

        setUploading(true)
        const uploadedUrls: string[] = []

        try {
            // Upload sequentially or parallel - parallel is better
            const uploadPromises = validFiles.map(async (file) => {
                const formData = new FormData()
                formData.append("file", file)
                formData.append("path", storagePath)

                const response = await fetch("/api/storage/upload", {
                    method: "POST",
                    body: formData,
                })

                if (!response.ok) throw new Error("Upload failed")
                const data = await response.json()
                return data.url
            })

            const newUrls = await Promise.all(uploadPromises)
            onImagesChange([...images, ...newUrls])
        } catch (error) {
            console.error("Upload error:", error)
            alert("Failed to upload some images")
        } finally {
            setUploading(false)
            if (fileInputRef.current) fileInputRef.current.value = ""
        }
    }

    const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            processFiles(e.target.files)
        }
    }

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDragging(false)
    }

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDragging(false)
        if (e.dataTransfer.files) {
            processFiles(e.dataTransfer.files)
        }
    }

    const removeImage = (index: number) => {
        const newImages = [...images]
        newImages.splice(index, 1)
        onImagesChange(newImages)
    }

    return (
        <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {label} ({images.length})
            </label>

            <div
                className={`grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl border-2 border-dashed transition-all ${isDragging
                    ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/10"
                    : "border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"
                    }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                {/* Existing Images */}
                {images.map((url, idx) => {
                    // Add cache busting to prevent showing old images
                    const cacheBustedUrl = url.includes('?')
                        ? `${url}&t=${Date.now()}`
                        : `${url}?t=${Date.now()}`

                    return (
                        <div key={`img-${idx}-${url.split('/').pop()}`} className="group relative aspect-square rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700">
                            <img
                                src={cacheBustedUrl}
                                alt={`Gallery ${idx + 1}`}
                                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                loading="lazy"
                            />
                            <button
                                type="button"
                                onClick={() => removeImage(idx)}
                                className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 focus:opacity-100"
                                title="Remove image"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    )
                })}

                {/* Add Button */}
                <button
                    type="button"
                    disabled={uploading}
                    onClick={() => fileInputRef.current?.click()}
                    className="relative aspect-square flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-indigo-500 dark:hover:border-indigo-400 hover:bg-white dark:hover:bg-gray-800 transition-all text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {uploading ? (
                        <Loader2 className="w-8 h-8 animate-spin" />
                    ) : (
                        <Plus className="w-8 h-8" />
                    )}
                    <span className="text-xs font-medium">{uploading ? "Uploading..." : "Add Images"}</span>
                </button>
            </div>

            <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleFileSelect}
            />

            {helperText && (
                <p className="text-xs text-gray-500 dark:text-gray-400">{helperText}</p>
            )}
        </div>
    )
}
