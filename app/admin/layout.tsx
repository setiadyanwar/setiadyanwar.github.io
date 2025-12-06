"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { 
  LayoutDashboard, 
  Briefcase, 
  GraduationCap, 
  Users, 
  LogOut,
  FileText,
  Settings,
  ArrowLeft
} from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    // Check authentication
    const auth = sessionStorage.getItem("admin_auth")
    if (auth === "authenticated") {
      setAuthenticated(true)
    } else if (pathname !== "/admin/login") {
      router.push("/admin/login")
    }
  }, [router, pathname])

  const handleLogout = () => {
    sessionStorage.removeItem("admin_auth")
    router.push("/admin/login")
  }

  if (!mounted) {
    return null
  }

  // Don't show layout on login page
  if (pathname === "/admin/login") {
    return <>{children}</>
  }

  if (!authenticated) {
    return null
  }

  const navItems = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/portfolio", label: "Portfolio", icon: Briefcase },
    { href: "/admin/experience", label: "Experience", icon: FileText },
    { href: "/admin/education", label: "Education", icon: GraduationCap },
    { href: "/admin/organization", label: "Organization", icon: Users },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Back to Landing Button */}
      <div className="fixed top-4 left-72 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Website</span>
        </Link>
      </div>

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-40">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-8">
            Admin Panel
          </h2>
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-medium"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-gray-800">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {children}
      </main>
    </div>
  )
}

