"use client"

import { useState, useEffect, useRef, ChangeEvent, DragEvent } from "react"
import { Upload, X, Image as ImageIcon, Loader2, UploadCloud } from "lucide-react"

interface ImageUploaderProps {
    currentImageUrl?: string
    label: string
    storagePath: string
    onUploadSuccess: (url: string, path: string) => void
    onRemove?: () => void
    helperText?: string
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
    const [isDragging, setIsDragging] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        setPreview(currentImageUrl || null)
    }, [currentImageUrl])

    const processFile = async (file: File) => {
        if (!file.type.startsWith("image/")) {
            setError("Please select an image file")
            return
        }

        const maxSize = 5 * 1024 * 1024 // 5MB
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

            // Upload
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

            const urlWithCacheBust = `${data.url}?t=${Date.now()}`
            onUploadSuccess(data.url, data.path)
            setPreview(urlWithCacheBust)

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

    const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) processFile(file)
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
        const file = e.dataTransfer.files?.[0]
        if (file) processFile(file)
    }

    const handleRemove = () => {
        setPreview(null)
        setError(null)
        if (fileInputRef.current) fileInputRef.current.value = ""
        onRemove?.()
    }

    return (
        <div className={`space-y-2 ${className}`}>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {label}
            </label>

            <div
                className={`relative group transition-all duration-200 ease-in-out ${isDragging
                    ? "ring-2 ring-indigo-500 ring-offset-2 bg-indigo-50 dark:bg-indigo-900/10"
                    : ""
                    }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                {preview ? (
                    <div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                        <div className="relative aspect-video">
                            <img
                                src={preview}
                                alt={label}
                                className="w-full h-full object-cover"
                                key={preview}
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
                                <button
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    disabled={uploading}
                                    className="p-2 bg-white/90 text-gray-900 rounded-lg hover:bg-white hover:scale-105 transition-all shadow-lg"
                                    title="Replace Image"
                                >
                                    <Upload className="w-5 h-5" />
                                </button>
                                <button
                                    type="button"
                                    onClick={handleRemove}
                                    disabled={uploading}
                                    className="p-2 bg-red-500/90 text-white rounded-lg hover:bg-red-500 hover:scale-105 transition-all shadow-lg"
                                    title="Remove Image"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div
                        onClick={() => fileInputRef.current?.click()}
                        className={`
                            relative w-full aspect-video rounded-xl border-2 border-dashed 
                            flex flex-col items-center justify-center gap-4 cursor-pointer
                            transition-all duration-200
                            ${isDragging
                                ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/10"
                                : "border-gray-300 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                            }
                        `}
                    >
                        <div className={`
                            p-4 rounded-full bg-gray-100 dark:bg-gray-800 
                            ${isDragging ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600" : "text-gray-500 dark:text-gray-400"}
                        `}>
                            {uploading ? (
                                <Loader2 className="w-8 h-8 animate-spin" />
                            ) : (
                                <UploadCloud className="w-8 h-8" />
                            )}
                        </div>
                        <div className="text-center space-y-1">
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {uploading ? "Uploading..." : "Click to upload or drag and drop"}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                SVG, PNG, JPG or GIF (max. 5MB)
                            </p>
                        </div>
                    </div>
                )}

                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                />
            </div>

            {(error || helperText) && (
                <div className="flex flex-col gap-1">
                    {error && <p className="text-sm text-red-500">{error}</p>}
                    {helperText && !error && (
                        <p className="text-xs text-gray-500 dark:text-gray-400">{helperText}</p>
                    )}
                </div>
            )}
        </div>
    )
}
