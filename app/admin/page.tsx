"use client"

import { useState, useEffect } from "react"
import { getPortfolioItems, getWorkExperiences, getEducationExperiences, getOrganizationExperiences, getVisitorAnalytics, getTopPages } from "@/lib/supabase/data"
import { Briefcase, GraduationCap, Users, Monitor, ArrowUpRight, Globe, Activity, TrendingUp, Clock, FileText, Sun, Moon } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

// --- COMPONENTS ---

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// 1. Interactive Visitor Line Chart (Recharts)
const VisitorChart = ({ data }: { data: any[] }) => {
  // Generate last 7 days to ensure chart always spans full width
  const chartData = Array.from({ length: 7 }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - (6 - i))
    const dateStr = d.toISOString().split('T')[0]
    // Find matching data or default to 0
    const found = data?.find((item: any) => item.date === dateStr)
    return {
      date: dateStr,
      displayDate: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()],
      visits: found ? (Number(found.total_visits) || 0) : 0
    }
  })

  // Custom Tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs py-2 px-3 rounded-lg shadow-xl">
          <p className="font-bold mb-1">{label}</p>
          <p className="font-medium text-indigo-300 dark:text-indigo-600">
            {payload[0].value} Visits
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-200 dark:border-gray-800 shadow-sm h-full flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-indigo-500" />
          Visitor Analytics
        </h3>
        <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded-full font-medium border border-emerald-100 dark:border-emerald-900/30">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          <span>Live</span>
        </div>
      </div>

      <div className="flex-1 w-full min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.1} />
            <XAxis
              dataKey="displayDate"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#9ca3af' }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#9ca3af' }}
              allowDecimals={false}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#6366f1', strokeWidth: 1, strokeDasharray: '4 4' }} />
            <Area
              type="monotone"
              dataKey="visits"
              stroke="#6366f1"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorVisits)"
              activeDot={{ r: 6, strokeWidth: 0, fill: '#6366f1' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

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

// --- MAIN PAGE ---
export default function AdminDashboard() {
  const { theme, setTheme } = useTheme()
  const [stats, setStats] = useState({
    portfolio: 0,
    work: 0,
    education: 0,
    organization: 0,
  })
  const [analyticsData, setAnalyticsData] = useState<any[]>([])
  const [topPages, setTopPages] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const [portfolio, work, education, org, analytics, pages] = await Promise.all([
          getPortfolioItems(true),
          getWorkExperiences(),
          getEducationExperiences(),
          getOrganizationExperiences(),
          getVisitorAnalytics(7),
          getTopPages(10),
        ])

        setStats({
          portfolio: portfolio.length,
          work: work.length,
          education: education.length,
          organization: org.length,
        })

        setAnalyticsData(analytics)
        setTopPages(pages)
      } catch (error) {
        console.error("❌ Error fetching stats:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [])

  // Calculate generic stats
  const totalVisits = analyticsData.reduce((sum, d) => sum + (Number(d.total_visits) || 0), 0)
  const visitorsToday = analyticsData.length > 0 ? (Number(analyticsData[analyticsData.length - 1].total_visits) || 0) : 0

  const statCards = [
    {
      title: "Projects",
      value: stats.portfolio,
      icon: Briefcase,
      href: "/admin/portfolio",
      color: "indigo",
      trend: "Total Items"
    },
    {
      title: "Experience",
      value: stats.work,
      icon: Monitor,
      href: "/admin/experience",
      color: "blue",
      trend: "Career"
    },
    {
      title: "Education",
      value: stats.education,
      icon: GraduationCap,
      href: "/admin/education",
      color: "emerald",
      trend: "Academic"
    },
    {
      title: "Page Views",
      value: totalVisits,
      icon: Activity,
      href: "/admin/organization",
      color: "amber",
      trend: "Last 7 Days"
    },
  ]

  if (loading) {
    return (
      <div className="space-y-6 pb-10 animate-pulse">
        {/* Header Skeleton */}
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <div className="h-8 w-40 bg-gray-200 dark:bg-gray-800 rounded-lg" />
            <div className="h-4 w-60 bg-gray-100 dark:bg-gray-800/50 rounded-lg" />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gray-200 dark:bg-gray-800 rounded-lg" />
            <div className="h-6 w-24 bg-gray-200 dark:bg-gray-800 rounded hidden sm:block" />
          </div>
        </div>

        {/* Stats Cards Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-gray-800 h-[100px] flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800" />
                <div className="h-3 w-20 bg-gray-100 dark:bg-gray-800 rounded" />
              </div>
              <div>
                <div className="h-8 w-16 bg-gray-200 dark:bg-gray-800 rounded mb-1" />
                <div className="h-2 w-24 bg-gray-100 dark:bg-gray-800 rounded" />
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[400px]">
          {/* Chart Skeleton */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div className="h-5 w-32 bg-gray-200 dark:bg-gray-800 rounded" />
              <div className="h-5 w-16 bg-gray-200 dark:bg-gray-800 rounded-full" />
            </div>
            <div className="flex-1 bg-gray-50 dark:bg-gray-800/30 rounded-xl w-full" />
          </div>

          {/* Sidebar Skeleton */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded" />
              <div className="h-4 w-16 bg-gray-100 dark:bg-gray-800 rounded" />
            </div>
            <div className="space-y-4 flex-1">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div className="h-3 w-32 bg-gray-100 dark:bg-gray-800 rounded" />
                    <div className="h-3 w-8 bg-gray-100 dark:bg-gray-800 rounded" />
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full" />
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 grid grid-cols-2 gap-3">
              <div className="h-12 bg-gray-100 dark:bg-gray-800 rounded-xl" />
              <div className="h-12 bg-gray-100 dark:bg-gray-800 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 pb-10">
      {/* Compact Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Dashboard</h1>
          <p className="text-sm text-gray-500">Welcome back, Admin.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <div className="text-xs font-mono text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded hidden sm:block">
            Analytics Active
          </div>
        </div>
      </div>

      {/* Stats Cards - More compact */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statCards.map((stat) => {
          const Icon = stat.icon
          return (
            <Link
              key={stat.href}
              href={stat.href}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-200 dark:border-gray-800 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg bg-gray-50 dark:bg-gray-800 group-hover:bg-${stat.color}-50 dark:group-hover:bg-${stat.color}-900/20 transition-colors`}>
                  <Icon className={`w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-${stat.color}-600 dark:group-hover:text-${stat.color}-400 transition-colors`} />
                </div>
                <h3 className="text-gray-500 dark:text-gray-400 text-xs font-medium">{stat.title}</h3>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">{stat.value}</p>
              <p className="text-[10px] text-gray-400 mt-1">{stat.trend}</p>
            </Link>
          )
        })}
      </div>

      {/* Main Grid: Chart + Combined Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Line Chart (2/3 width) - Fixed Height */}
        <div className="lg:col-span-2 h-[400px]">
          <VisitorChart data={analyticsData} />
        </div>

        {/* Right Sidebar: Combined Widget (1/3 width) - Fixed Height matches chart */}
        <div className="lg:col-span-1 h-[400px]">
          <AnalyticsSidebar pages={topPages} visitorsToday={visitorsToday} />
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
        <div className="flex flex-wrap gap-2">
          {['Portfolio', 'Experience', 'Education', 'Organization'].map((item) => (
            <Link
              key={item}
              href={`/admin/${item.toLowerCase()}/new`}
              className="px-3 py-1.5 text-xs font-semibold bg-gray-50 dark:bg-gray-800 border border-transparent hover:border-indigo-300 text-gray-600 dark:text-gray-400 rounded-lg hover:text-indigo-600 transition-all flex items-center gap-1.5"
            >
              <span>+ {item}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
