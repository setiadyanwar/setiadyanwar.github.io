import { cn } from "@/lib/utils"

interface SectionHeaderProps {
    label: string
    className?: string
    showDivider?: boolean
}

/**
 * Reusable section header component
 * Provides consistent styling across all sections
 */
export function SectionHeader({
    label,
    className,
    showDivider = true
}: SectionHeaderProps) {
    return (
        <div className={cn("flex items-center gap-2 text-indigo-600 dark:text-indigo-400", className)}>
            <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
            {showDivider && <div className="h-[1px] flex-1 bg-gray-100 dark:bg-white/10" />}
        </div>
    )
}
