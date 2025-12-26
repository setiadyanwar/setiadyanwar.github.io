"use client"

import { Globe } from "lucide-react"
import { motion } from "framer-motion"

// 2. Combined Sidebar (Top Pages + System Status)
const AnalyticsSidebar = ({ pages, visitorsToday }: { pages: any[], visitorsToday: number }) => {
    const maxVisits = Number(pages?.[0]?.visits) || 1

    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm h-full flex flex-col divide-y divide-gray-100 dark:divide-gray-800">

            {/* SECTION 1: TOP PAGES */}
            <div className="p-5 flex-1">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Globe className="w-4 h-4 text-indigo-500" />
                        Top Content
                    </h3>
                    <span className="text-[10px] text-gray-400 bg-gray-50 dark:bg-gray-800 px-2 py-0.5 rounded">Last 7 Days</span>
                </div>

                {!pages || pages.length === 0 ? (
                    <div className="text-center py-6 text-gray-400 text-sm">No data available</div>
                ) : (
                    <div className="space-y-4">
                        {pages.slice(0, 5).map((page, index) => {
                            const isPortfolio = page.path.startsWith('/portfolio/')
                            let label = page.path
                            if (label === '/') label = 'Homepage'
                            else if (label.startsWith('/portfolio/')) {
                                label = label.split('/')[2].replace(/-/g, ' ')
                            } else if (label.startsWith('/admin')) label = 'Admin Panel'

                            const percentage = ((Number(page.visits) || 0) / maxVisits) * 100

                            return (
                                <div key={page.path} className="group">
                                    <div className="flex items-center justify-between mb-1">
                                        <div className="flex items-center gap-2 overflow-hidden">
                                            <span className="text-gray-400 font-mono text-xs w-3">#{index + 1}</span>
                                            <span className={`text-sm font-medium truncate capitalize ${isPortfolio ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}`}>
                                                {label}
                                            </span>
                                        </div>
                                        <span className="text-sm font-bold text-gray-900 dark:text-white shrink-0 bg-gray-50 dark:bg-gray-800 px-1.5 rounded">{page.visits}</span>
                                    </div>
                                    {/* Custom Progress Bar */}
                                    <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${percentage}%` }}
                                            transition={{ duration: 0.5, delay: 0.1 * index }}
                                            className={`h-full ${isPortfolio ? 'bg-indigo-500' : 'bg-gray-400 dark:bg-gray-600'}`}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>

            {/* SECTION 2: SYSTEM STATUS */}
            <div className="p-5 bg-gray-50/50 dark:bg-gray-800/20 rounded-b-2xl">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">System Pulse</h3>
                <div className="grid grid-cols-2 gap-3">
                    {/* Status Item 1 */}
                    <div className="bg-white dark:bg-gray-900 p-3 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                        <div>
                            <p className="text-[10px] text-gray-400">Live Traffic</p>
                            <p className="text-xs font-bold text-gray-900 dark:text-white">{visitorsToday} Active</p>
                        </div>
                    </div>
                    {/* Status Item 2 */}
                    <div className="bg-white dark:bg-gray-900 p-3 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                        <div>
                            <p className="text-[10px] text-gray-400">Database</p>
                            <p className="text-xs font-bold text-gray-900 dark:text-white">Connected</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AnalyticsSidebar
