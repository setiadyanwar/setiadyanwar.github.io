"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Lock, Eye, EyeOff, User, ArrowRight, ShieldCheck } from "lucide-react"

export default function AdminLogin() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    // Check credentials against environment variables or secure defaults
    const validUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME
    const validPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD

    // Simulate network delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800))

    if (username === validUsername && password === validPassword) {
      sessionStorage.setItem("admin_auth", "authenticated")
      router.push("/admin")
    } else {
      setError("Invalid username or password")
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] w-full h-full bg-white dark:bg-gray-950 flex items-center justify-center p-4 transition-colors duration-300 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-sm relative z-10"
      >
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-none md:shadow-lg border border-transparent md:border-gray-100 dark:md:border-gray-800 p-0 md:p-8">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 text-gray-900 dark:text-white">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              Admin Access
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Sign in to continue
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5 uppercase tracking-wide"
              >
                Username
              </label>
              <div className="relative">
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2.5 pl-10 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-all outline-none text-sm"
                  placeholder="Enter username"
                  required
                />
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5 uppercase tracking-wide"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 pl-10 pr-10 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-all outline-none text-sm"
                  placeholder="Enter password"
                  required
                />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-4 py-2.5 rounded-lg text-xs font-medium flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium py-2.5 px-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm mt-2"
            >
              {loading ? (
                "Signing in..."
              ) : (
                <>
                  Sign In <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center mt-6 text-gray-400 dark:text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} Setiady Anwar
        </p>
      </motion.div>
    </div>
  )
}
