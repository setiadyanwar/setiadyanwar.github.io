"use client"

import { motion } from "framer-motion"

interface TopPagesProps {
    pages: Array<{
        path: string
        visits: number
    }>
}

export default function TopPages({ pages }: TopPagesProps) {
    if (!pages || pages.length === 0) {
        return (
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Top Pages</h3>
                <p className="text-center text-gray-500 text-sm py-8">No page data yet</p>
            </div>
        )
    }

    const getPageLabel = (path: string) => {
        if (path === '/') return 'Homepage'
        if (path.startsWith('/portfolio/')) {
            const slug = path.split('/')[2]
            return `Portfolio: ${slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`
        }
        if (path.startsWith('/admin')) return 'Admin Panel'
        if (path === '/about') return 'About Page'
        if (path === '/links') return 'Links Page'
        return path
    }

    const getPageIcon = (path: string) => {
        if (path === '/') return '🏠'
        if (path.startsWith('/portfolio/')) return '💼'
        if (path.startsWith('/admin')) return '⚙️'
        if (path === '/about') return '👤'
        if (path === '/links') return '🔗'
        return '📄'
    }

    const maxVisits = Number(pages[0]?.visits) || 1

    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Top Pages</h3>
                <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">Last 7 days</span>
            </div>

            <div className="space-y-3">
                {pages.slice(0, 10).map((page, index) => {
                    const isPortfolio = page.path.startsWith('/portfolio/')
                    const totalVisits = Number(page.visits) || 0
                    const percentage = (totalVisits / maxVisits) * 100

                    return (
                        <div key={page.path} className="group">
                            <div className="flex items-center gap-3 mb-1.5">
                                <span className="text-xl shrink-0">{getPageIcon(page.path)}</span>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-2 mb-1">
                                        <span className={`text-sm font-medium truncate ${isPortfolio ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}`}>
                                            {getPageLabel(page.path)}
                                        </span>
                                        <div className="flex items-center gap-2 shrink-0">
                                            <span className="text-xs text-gray-500">{percentage.toFixed(0)}%</span>
                                            <span className="text-sm font-bold text-gray-900 dark:text-white min-w-[2rem] text-right">
                                                {totalVisits}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${percentage}%` }}
                                            transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
                                            className={`h-full rounded-full ${isPortfolio ? 'bg-gradient-to-r from-indigo-500 to-indigo-600' : 'bg-gradient-to-r from-gray-400 to-gray-500 dark:from-gray-600 dark:to-gray-700'}`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {pages.length > 10 && (
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 text-center">
                    <span className="text-xs text-gray-500">Showing top 10 of {pages.length} pages</span>
                </div>
            )}
        </div>
    )
}
