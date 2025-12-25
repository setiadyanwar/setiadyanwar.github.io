import { formatDistanceToNow } from 'date-fns'
import { Smartphone, Monitor, Tablet, Globe, Clock, MapPin } from 'lucide-react'

export default function RecentVisitors({ visitors }: { visitors: any[] }) {
    if (!visitors || visitors.length === 0) {
        return (
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-indigo-500" />
                    Recent Visitors
                </h3>
                <p className="text-sm text-gray-500 text-center py-4">No recent visitors recorded yet.</p>
            </div>
        )
    }

    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col h-full">
            <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <Globe className="w-4 h-4 text-indigo-500" />
                    Live Visitor Log
                </h3>
                <span className="text-[10px] text-gray-400 bg-gray-50 dark:bg-gray-800 px-2 py-0.5 rounded">Real-time</span>
            </div>

            <div className="overflow-y-auto max-h-[400px]">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50/50 dark:bg-gray-800/50 text-xs text-gray-500 dark:text-gray-400 uppercase sticky top-0 backdrop-blur-sm">
                        <tr>
                            <th className="px-5 py-3 font-semibold">Time</th>
                            <th className="px-5 py-3 font-semibold">Device</th>
                            <th className="px-5 py-3 font-semibold">Location</th>
                            <th className="px-5 py-3 font-semibold">Page</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {visitors.map((visitor) => {
                            const DeviceIcon = visitor.device_type === 'Mobile' ? Smartphone : (visitor.device_type === 'Tablet' ? Tablet : Monitor)

                            return (
                                <tr key={visitor.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="px-5 py-3 whitespace-nowrap">
                                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                            <Clock className="w-3 h-3 text-gray-400" />
                                            <span className="text-xs">
                                                {formatDistanceToNow(new Date(visitor.created_at), { addSuffix: true })}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-3">
                                        <div className="flex items-center gap-2">
                                            <div className={`p-1.5 rounded-lg ${visitor.device_type === 'Mobile' ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400' : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'}`}>
                                                <DeviceIcon className="w-3.5 h-3.5" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-medium text-gray-900 dark:text-white">{visitor.ip_address}</span>
                                                <span className="text-[10px] text-gray-400">{visitor.device_type}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-3">
                                        <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-300">
                                            <MapPin className="w-3 h-3 text-gray-400" />
                                            <span className="text-xs truncate max-w-[100px]" title={`${visitor.city}, ${visitor.country}`}>
                                                {visitor.city && visitor.country ? `${visitor.city}, ${visitor.country}` : 'Unknown Location'}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-3">
                                        <span className="text-xs font-mono text-gray-500 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded truncate max-w-[120px] block" title={visitor.path}>
                                            {visitor.path}
                                        </span>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
