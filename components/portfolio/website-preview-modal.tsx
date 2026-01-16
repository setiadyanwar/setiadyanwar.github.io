"use client"

import { useState, useEffect } from "react"
import { X, RefreshCw, ExternalLink, Globe, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface WebsitePreviewModalProps {
    url: string
    isOpen: boolean
    onClose: () => void
    title?: string
}

export default function WebsitePreviewModal({
    url,
    isOpen,
    onClose,
    title = "Website Preview"
}: WebsitePreviewModalProps) {
    const [isLoading, setIsLoading] = useState(true)
    const [iframeKey, setIframeKey] = useState(0)
    const [isMaximized, setIsMaximized] = useState(false)

    // Convert Figma links to embed links if necessary
    const getEmbedUrl = (originalUrl: string) => {
        if (!originalUrl) return ""

        if (originalUrl.includes("figma.com") && !originalUrl.includes("figma.com/embed")) {
            return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(originalUrl)}`
        }
        return originalUrl
    }

    const displayUrl = getEmbedUrl(url)

    // Trigger loading when displayUrl changes
    useEffect(() => {
        if (isOpen && displayUrl) {
            setIsLoading(true)
            setIframeKey(prev => prev + 1)
        }
    }, [displayUrl, isOpen])

    // Handle ESC key
    useEffect(() => {
        if (!isOpen) return

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose()
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        document.body.style.overflow = 'hidden'

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, onClose])

    const handleRefresh = () => {
        setIsLoading(true)
        setIframeKey(prev => prev + 1)
    }

    const toggleMaximize = () => {
        setIsMaximized(!isMaximized)
    }

    if (!isOpen) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8"
            >
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        width: isMaximized ? "100%" : "95%",
                        height: isMaximized ? "100%" : "90%",
                    }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-800 max-w-7xl mx-auto z-10 transition-all duration-300 ${isMaximized ? 'rounded-none border-none' : ''}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Browser-like Header */}
                    <div className="flex flex-col gap-0 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
                        {/* Title Bar */}
                        <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800/50">
                            <div className="flex items-center gap-2">
                                <div className="flex gap-1.5 mr-2">
                                    <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors" title="Close" />
                                    <button onClick={() => setIsMaximized(false)} className="w-3 h-3 rounded-full bg-amber-400 hover:bg-amber-500 transition-colors" title="Minimize" />
                                    <button onClick={() => setIsMaximized(true)} className="w-3 h-3 rounded-full bg-emerald-400 hover:bg-emerald-500 transition-colors" title="Maximize" />
                                </div>
                                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 truncate max-w-[200px] flex items-center gap-1.5 border-l border-gray-300 dark:border-gray-700 pl-3 ml-1">
                                    <Globe className="w-3 h-3" />
                                    {title}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1.5 text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-gray-800 rounded-md transition-all flex items-center gap-1.5"
                                    title="Open in new tab"
                                >
                                    <span className="text-[10px] font-medium hidden sm:inline">Open in Hub</span>
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                                <button
                                    onClick={onClose}
                                    className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-white dark:hover:bg-gray-800 rounded-md transition-all sm:hidden"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Address Bar */}
                        <div className="flex items-center gap-4 px-4 py-3">
                            <div className="flex items-center gap-2 text-gray-400">
                                <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors" disabled><ChevronLeft className="w-4 h-4" /></button>
                                <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors" disabled><ChevronRight className="w-4 h-4" /></button>
                                <button
                                    onClick={handleRefresh}
                                    className={`p-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors ${isLoading ? 'animate-spin text-indigo-500' : ''}`}
                                >
                                    <RefreshCw className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="flex-1 flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-4 py-1.5 text-xs text-gray-500 dark:text-gray-400 shadow-sm overflow-hidden group">
                                <Globe className="w-3.5 h-3.5 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                                <span className="truncate flex-1 select-all">{url}</span>
                                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[10px] text-emerald-500 font-medium">Secure</span>
                                </div>
                            </div>

                            <button
                                onClick={toggleMaximize}
                                className="hidden md:flex p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md transition-all"
                                title={isMaximized ? "Restore" : "Full Screen"}
                            >
                                {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>

                    {/* Iframe Content */}
                    <div className="flex-1 relative bg-gray-50 dark:bg-gray-950">
                        {isLoading && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 z-20">
                                <div className="space-y-6 text-center">
                                    <div className="relative w-16 h-16 mx-auto">
                                        <div className="absolute inset-0 border-4 border-indigo-100 dark:border-indigo-900/30 rounded-full" />
                                        <div className="absolute inset-0 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Connecting to {displayUrl && displayUrl.startsWith('http') ? new URL(displayUrl).hostname : 'website'}...</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">This may take a few moments</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        <iframe
                            key={iframeKey}
                            src={displayUrl}
                            className={`w-full h-full border-none transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                            onLoad={() => setIsLoading(false)}
                            title={title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />

                        {/* Connection Notice for sites that might block iframes */}
                        {!isLoading && (
                            <div className="absolute bottom-4 right-4 z-10">
                                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-lg border border-gray-100 dark:border-gray-800 rounded-lg p-3 max-w-xs transition-transform transform hover:scale-105 pointer-events-auto">
                                    <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">
                                        Website not loading properly? Some links might be restricted from being embedded.
                                    </p>
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 flex items-center justify-end gap-1 hover:underline"
                                    >
                                        Open in New Tab <ExternalLink className="w-2.5 h-2.5" />
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
