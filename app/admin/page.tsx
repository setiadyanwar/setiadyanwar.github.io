"use client"

import { useState, useEffect } from "react"
import { getPortfolioItems, getWorkExperiences, getEducationExperiences, getOrganizationExperiences, getVisitorAnalytics } from "@/lib/supabase/data"
import { Briefcase, GraduationCap, Users, Monitor, ArrowUpRight, Globe, Activity } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

// --- COMPONENTS ---

// 1. Interactive Visitor Chart (using SVG + Framer Motion)
const VisitorChart = ({ data }: { data: any[] }) => {
  // If no data yet, show empty state
  if (!data || data.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full mb-4">
            <Activity className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No Analytics Data Yet</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm">
            Start browsing your website to collect visitor data. Data will appear here within 24 hours.
          </p>
        </div>
      </div>
    )
  }

  const maxVal = Math.max(...data.map((d: any) => Number(d.total_visits) || 0), 1)

  // Get day names from dates
  const getDayName = (dateStr: string) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const date = new Date(dateStr)
    return days[date.getDay()]
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm relative overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Visitor Analytics</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Real-time data from last 7 days</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full font-medium">
          <ArrowUpRight className="w-4 h-4" />
          <span>Live</span>
        </div>
      </div>

      {/* Chart Area */}
      <div className="h-64 w-full flex items-end gap-2 sm:gap-4 relative z-10">
        {data.map((item: any, index: number) => {
          const visits = Number(item.total_visits) || 0
          const uniquePaths = Number(item.unique_paths) || 0

          const heightPercent = Math.min((visits / maxVal) * 100, 100)
          const pathPercent = visits > 0 ? Math.min((uniquePaths / visits) * 100, 100) : 0

          return (
            <div key={item.date || index} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
              {/* Tooltip */}
              <div className="opacity-0 group-hover:opacity-100 absolute -top-12 transition-opacity bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap z-20 pointer-events-none mb-2">
                {visits} Visits • {uniquePaths} Pages
              </div>

              {/* Bar */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${heightPercent}%` }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full bg-indigo-100 dark:bg-gray-800 rounded-t-lg relative overflow-hidden group-hover:bg-indigo-200 dark:group-hover:bg-gray-700 transition-colors min-h-[4px]"
              >
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${pathPercent}%` }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="absolute bottom-0 w-full bg-indigo-600 dark:bg-indigo-500 rounded-t-lg"
                />
              </motion.div>

              {/* Label */}
              <span className="text-xs text-gray-400 font-medium">{getDayName(item.date)}</span>
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="w-3 h-3 bg-indigo-600 rounded-full"></span>
          Unique Pages
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="w-3 h-3 bg-indigo-100 dark:bg-gray-800 rounded-full"></span>
          Total Visits
        </div>
      </div>
    </div>
  )
}

// 2. Recent Log Activity
const RecentActivity = () => {
  const activities = [
    { action: "Analytics System", item: "Successfully initialized", time: "Just now", icon: Activity, color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20" },
    { action: "Database Setup", item: "Tables created", time: "1 minute ago", icon: Globe, color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20" },
    { action: "Tracking Active", item: "Monitoring page views", time: "2 minutes ago", icon: Activity, color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20" },
  ]

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm h-full">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">System Status</h3>
      <div className="space-y-6">
        {activities.map((act, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className={`p-2 rounded-lg shrink-0 ${act.color}`}>
              <act.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-200">{act.action}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{act.item}</p>
            </div>
            <span className="ml-auto text-xs text-gray-400 whitespace-nowrap">{act.time}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Analytics Status</span>
          <span className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Active
          </span>
        </div>
      </div>
    </div>
  )
}

// --- MAIN PAGE ---
export default function AdminDashboard() {
  const [stats, setStats] = useState({
    portfolio: 0,
    work: 0,
    education: 0,
    organization: 0,
  })
  const [analyticsData, setAnalyticsData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const [portfolio, work, education, org, analytics] = await Promise.all([
          getPortfolioItems(true),
          getWorkExperiences(),
          getEducationExperiences(),
          getOrganizationExperiences(),
          getVisitorAnalytics(7),
        ])

        setStats({
          portfolio: portfolio.length,
          work: work.length,
          education: education.length,
          organization: org.length,
        })

        setAnalyticsData(analytics)
      } catch (error) {
        if (process.env.NODE_ENV !== "production") {
          console.error("Error fetching stats:", error)
        }
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [])

  const statCards = [
    {
      title: "Total Portfolio",
      value: stats.portfolio,
      icon: Briefcase,
      href: "/admin/portfolio",
      color: "indigo",
      trend: `${stats.portfolio} items`
    },
    {
      title: "Experience",
      value: stats.work,
      icon: Monitor,
      href: "/admin/experience",
      color: "blue",
      trend: "Professional"
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
      title: "Activity",
      value: analyticsData.reduce((sum, d) => sum + (Number(d.total_visits) || 0), 0),
      icon: Activity,
      href: "/admin/organization",
      color: "amber",
      trend: "Total visits"
    },
  ]

  if (loading) {
    return (
      <div className="space-y-8 animate-pulse">
        <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded w-1/3"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map(i => <div key={i} className="h-32 bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-96">
          <div className="lg:col-span-2 bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>
          <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">Welcome back, Admin. Here&apos;s your real-time portfolio analytics.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => {
          const Icon = stat.icon
          return (
            <Link
              key={stat.href}
              href={stat.href}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-200 dark:border-gray-800 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-current opacity-[0.03] group-hover:opacity-[0.06] rounded-bl-full transition-opacity pointer-events-none text-gray-900 dark:text-white" />

              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl bg-gray-50 dark:bg-gray-800 group-hover:bg-${stat.color}-50 dark:group-hover:bg-${stat.color}-900/20 transition-colors`}>
                  <Icon className={`w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-${stat.color}-600 dark:group-hover:text-${stat.color}-400 transition-colors`} />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 group-hover:bg-${stat.color}-50 dark:group-hover:bg-${stat.color}-900/20 group-hover:text-${stat.color}-600 dark:group-hover:text-${stat.color}-400 transition-colors`}>
                  {stat.trend}
                </span>
              </div>

              <div>
                <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">{stat.title}</h3>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1 group-hover:scale-105 origin-left transition-transform">{stat.value}</p>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Charts & Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2">
          <VisitorChart data={analyticsData} />
        </div>

        {/* Recent Activity Sidebar */}
        <div className="lg:col-span-1">
          <RecentActivity />
        </div>
      </div>

      {/* Quick Links Footer */}
      <div className="flex flex-wrap gap-3 pt-4">
        <span className="text-sm text-gray-500 self-center mr-2">Quick Actions:</span>
        {['Portfolio', 'Experience', 'Education', 'Organization'].map((item) => (
          <Link
            key={item}
            href={`/admin/${item.toLowerCase()}/new`}
            className="px-4 py-2 text-xs font-semibold bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm"
          >
            + New {item}
          </Link>
        ))}
      </div>
    </div>
  )
}
