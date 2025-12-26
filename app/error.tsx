'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-full mb-6">
                <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Something went wrong!
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
                We encountered an unexpected error. Please try again.
            </p>
            <div className="flex gap-4">
                <Button
                    onClick={() => window.location.reload()}
                    variant="outline"
                >
                    Reload Page
                </Button>
                <Button
                    onClick={() => reset()}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                    Try Again
                </Button>
            </div>
        </div>
    )
}
