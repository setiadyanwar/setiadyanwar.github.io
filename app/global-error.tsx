'use client'

import { Inter } from "next/font/google"
import "./globals.css"
import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ['latin'] })

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-white dark:bg-gray-950">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-gray-100">
                                Something went wrong!
                            </h2>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                A critical error occurred.
                            </p>
                        </div>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center gap-4">
                            <Button
                                onClick={() => reset()}
                                className="w-full flex items-center justify-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white md:py-4 md:text-lg md:px-10"
                            >
                                Try Again
                            </Button>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    )
}
