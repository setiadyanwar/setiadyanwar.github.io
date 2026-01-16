import { cn } from "@/lib/utils"

interface LoadingSkeletonProps {
    className?: string
    variant?: "text" | "card" | "image" | "circle"
    lines?: number
}

/**
 * Reusable loading skeleton component
 * Provides consistent loading states across the application
 */
export function LoadingSkeleton({
    className,
    variant = "text",
    lines = 1
}: LoadingSkeletonProps) {
    const baseClasses = "animate-pulse bg-gray-200 dark:bg-gray-800"

    if (variant === "text") {
        return (
            <div className="space-y-3">
                {Array.from({ length: lines }).map((_, i) => (
                    <div
                        key={i}
                        className={cn(baseClasses, "h-4 rounded", className)}
                        style={{ width: i === lines - 1 ? "80%" : "100%" }}
                    />
                ))}
            </div>
        )
    }

    if (variant === "card") {
        return (
            <div className={cn("rounded-2xl overflow-hidden", className)}>
                <div className={cn(baseClasses, "h-48 w-full")} />
                <div className="p-4 space-y-3">
                    <div className={cn(baseClasses, "h-6 w-3/4 rounded")} />
                    <div className={cn(baseClasses, "h-4 w-full rounded")} />
                    <div className={cn(baseClasses, "h-4 w-5/6 rounded")} />
                </div>
            </div>
        )
    }

    if (variant === "circle") {
        return (
            <div className={cn(baseClasses, "rounded-full", className)} />
        )
    }

    // image variant
    return (
        <div className={cn(baseClasses, "rounded-xl", className)} />
    )
}
