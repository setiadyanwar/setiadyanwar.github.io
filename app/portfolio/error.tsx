'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { RefreshCcw } from "lucide-react"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center min-h-[50vh]">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Failed to load portfolio item
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
                We couldn't load the details for this project. This might be due to a temporary connection issue.
            </p>
            <Button
                onClick={() => reset()}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700"
            >
                <RefreshCcw className="w-4 h-4" />
                Try Again
            </Button>
        </div>
    )
}
