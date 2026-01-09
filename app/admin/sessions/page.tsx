"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Monitor, Smartphone, Tablet, Trash2, RefreshCw, Shield, AlertCircle } from "lucide-react"
import { getActiveSessions, revokeSession } from "../actions"
import { formatDistanceToNow } from "date-fns"

interface Session {
    id: string
    username: string
    ip_address: string
    user_agent: string
    device_info: string
    login_at: string
    last_activity: string
    expires_at: string
    is_active: boolean
}

export default function SessionsPage() {
    const [sessions, setSessions] = useState<Session[]>([])
    const [loading, setLoading] = useState(true)
    const [revoking, setRevoking] = useState<string | null>(null)

    const loadSessions = async () => {
        setLoading(true)
        try {
            const data = await getActiveSessions()
            setSessions(data)
        } catch (err) {
            console.error("Failed to load sessions", err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadSessions()
        const interval = setInterval(loadSessions, 30000)
        return () => clearInterval(interval)
    }, [])

    const handleRevoke = async (sessionId: string) => {
        if (!confirm("Terminate this session? User will be logged out immediately.")) return

        setRevoking(sessionId)
        try {
            const result = await revokeSession(sessionId)
            if (result.success) {
                setSessions(prev => prev.filter(s => s.id !== sessionId))
            }
        } catch (err) {
            console.error("Failed to revoke session", err)
        } finally {
            setRevoking(null)
        }
    }

    const getDeviceIcon = (deviceInfo: string) => {
        if (deviceInfo.includes("Mobile")) return <Smartphone className="w-5 h-5" />
        if (deviceInfo.includes("Tablet")) return <Tablet className="w-5 h-5" />
        return <Monitor className="w-5 h-5" />
    }

    const parseUA = (ua: string) => {
        let os = "Other"
        if (ua.includes("Win")) os = "Windows"
        else if (ua.includes("Mac")) os = "macOS"
        else if (ua.includes("Linux")) os = "Linux"
        else if (ua.includes("Android")) os = "Android"
        else if (ua.includes("iPhone")) os = "iOS"

        let browser = "Web Browser"
        if (ua.includes("Firefox")) browser = "Firefox"
        else if (ua.includes("Chrome")) browser = "Chrome"
        else if (ua.includes("Safari") && !ua.includes("Chrome")) browser = "Safari"
        else if (ua.includes("Edg")) browser = "Edge"

        return { os, browser }
    }

    return (
        <div className="max-w-6xl mx-auto space-y-8 py-6 px-4">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Shield className="w-6 h-6 text-gray-400" />
                        Active Sessions
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Devices currently logged into your account
                    </p>
                </div>

                <button
                    onClick={loadSessions}
                    disabled={loading}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all text-sm font-medium disabled:opacity-50"
                >
                    <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                    Refresh
                </button>
            </div>

            <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/5 rounded-xl overflow-hidden shadow-sm">
                {/* Table Header - Desktop Only */}
                <div className="hidden md:grid grid-cols-4 px-6 py-4 border-b border-gray-100 dark:border-white/5 text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    <div>Location & IP</div>
                    <div>OS & Browser</div>
                    <div>Last accessed</div>
                    <div className="text-right whitespace-nowrap">Manage</div>
                </div>

                <div className="divide-y divide-gray-100 dark:divide-white/5">
                    {loading && sessions.length === 0 ? (
                        <div className="py-20 text-center">
                            <RefreshCw className="w-8 h-8 text-gray-300 animate-spin mx-auto" />
                        </div>
                    ) : sessions.length === 0 ? (
                        <div className="py-20 text-center text-gray-500 text-sm italic">
                            No active sessions detected
                        </div>
                    ) : (
                        <AnimatePresence mode="popLayout">
                            {sessions.map((session) => {
                                const { os, browser } = parseUA(session.user_agent)
                                return (
                                    <motion.div
                                        key={session.id}
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="grid grid-cols-1 md:grid-cols-4 px-6 py-5 items-center hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors gap-4 md:gap-0"
                                    >
                                        {/* Column 1: Location & IP */}
                                        <div className="flex items-center gap-4">
                                            <div className="text-gray-400 dark:text-gray-500 flex-shrink-0">
                                                {getDeviceIcon(session.device_info)}
                                            </div>
                                            <div className="min-w-0">
                                                <div className="text-sm font-semibold text-gray-900 dark:text-gray-200 truncate">
                                                    {/* We don't have location data easily available server-side without an API, 
                              so we'll use a friendly "Session" label */}
                                                    Active Admin Session
                                                </div>
                                                <div className="text-[12px] text-gray-500 dark:text-gray-500 mt-0.5">
                                                    Admin • {session.ip_address}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Column 2: OS & Browser */}
                                        <div className="text-sm">
                                            <div className="text-gray-700 dark:text-gray-300 font-medium">
                                                {os}
                                            </div>
                                            <div className="text-[12px] text-gray-500 dark:text-gray-500 mt-0.5">
                                                {browser}
                                            </div>
                                        </div>

                                        {/* Column 3: Last accessed */}
                                        <div className="text-sm">
                                            <div className="text-gray-700 dark:text-gray-300 font-medium">
                                                {formatDistanceToNow(new Date(session.last_activity), { addSuffix: true })}
                                            </div>
                                            <div className="text-[12px] text-gray-500 dark:text-gray-500 mt-0.5">
                                                Created {formatDistanceToNow(new Date(session.login_at), { addSuffix: true })}
                                            </div>
                                        </div>

                                        {/* Column 4: Manage */}
                                        <div className="flex justify-end pr-2">
                                            <button
                                                onClick={() => handleRevoke(session.id)}
                                                disabled={revoking === session.id}
                                                className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-gray-400 dark:text-gray-600 hover:text-red-500 dark:hover:text-red-400 transition-colors uppercase tracking-widest disabled:opacity-50 group"
                                            >
                                                {revoking === session.id ? (
                                                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                                                ) : (
                                                    <>
                                                        Terminate
                                                        <Trash2 className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>
                    )}
                </div>
            </div>

            {/* Info Banner */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-white/[0.03] rounded-xl border border-gray-100 dark:border-white/5">
                <AlertCircle className="w-5 h-5 text-gray-400 dark:text-gray-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
                    Sessions expire automatically after 24 hours of inactivity. Terminating a session will immediately invalidate that device&apos;s access token and log the user out.
                </p>
            </div>
        </div>
    )
}
