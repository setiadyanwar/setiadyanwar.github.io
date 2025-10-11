"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun, Menu, X, Home, User, Briefcase, FolderOpen, Mail } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Check initial scroll position
    setIsScrolled(window.scrollY > 10)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const mainNavLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Experience", href: "/experience" },
  ]

  const secondaryNavLinks = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const getNavIcon = (href: string) => {
    switch (href) {
      case "/": return <Home className="h-4 w-4" />
      case "/portfolio": return <FolderOpen className="h-4 w-4" />
      case "/experience": return <Briefcase className="h-4 w-4" />
      case "/about": return <User className="h-4 w-4" />
      case "/contact": return <Mail className="h-4 w-4" />
      default: return <Home className="h-4 w-4" />
    }
  }

  return (
    <>
      {/* Desktop Header - Top */}
      <div className={cn(
        "hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out", 
        isScrolled 
          ? "py-4 px-4" 
          : "py-6 px-0"
      )}>
        <div className={cn("transition-all duration-500 ease-in-out", isScrolled ? "container mx-auto" : "w-full")}>
          <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "transition-all duration-500 ease-in-out relative overflow-hidden",
              isScrolled 
                ? "rounded-3xl bg-white/70 dark:bg-black/70 backdrop-blur-3xl backdrop-saturate-150 shadow-2xl shadow-gray-200/20 dark:shadow-black/20 border border-white/20 dark:border-white/10" 
                : "rounded-none bg-white/5 dark:bg-black/5 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/10 dark:border-white/5"
            )}
            style={{
              background: isScrolled 
                ? 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%)'
                : 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
              ...(theme === 'dark' && {
                background: isScrolled 
                  ? 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)'
                  : 'linear-gradient(135deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.02) 100%)'
              })
            }}
          >
            <div className={cn(
              "transition-all duration-500 ease-in-out", 
              isScrolled 
                ? "px-8 py-4" 
                : "container mx-auto px-4 py-4"
            )}>
              {/* Desktop Navigation */}
              <div className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 transition-all hover:scale-105">
                  Setiadyanwar<span className="text-orange-500">.</span>
                </Link>

                <div className="flex items-center space-x-12">
                  {/* Main Navigation */}
                  <nav className="flex items-center space-x-8">
                    {mainNavLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={cn(
                          "transition-all relative py-2 px-1 text-sm font-medium",
                          pathname === link.href
                            ? "text-indigo-600 dark:text-indigo-400"
                            : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                        )}
                      >
                        {link.name}
                        {pathname === link.href && (
                          <motion.span
                            layoutId="underline"
                            className="absolute left-0 bottom-0 h-0.5 w-full bg-indigo-600 dark:bg-indigo-400 rounded-full"
                          />
                        )}
                      </Link>
                    ))}
                  </nav>

                  {/* Secondary Navigation Group */}
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-6 px-4 py-2 rounded-2xl bg-white/30 dark:bg-black/30 backdrop-blur-2xl backdrop-saturate-150 border border-white/20 dark:border-white/10 shadow-lg shadow-gray-200/10 dark:shadow-black/10">
                      {secondaryNavLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className={cn(
                            "transition-all relative text-sm font-medium px-3 py-1.5 rounded-xl hover:bg-white/20 dark:hover:bg-white/10",
                            pathname === link.href
                              ? "text-indigo-600 dark:text-indigo-400 bg-white/30 dark:bg-white/10"
                              : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                          )}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>

                    {/* Theme Toggle */}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      aria-label="Toggle theme"
                      className="h-10 w-10 rounded-2xl bg-white/90 dark:bg-black/90 backdrop-blur-xl backdrop-saturate-150 border border-gray-300/60 dark:border-gray-600/60 hover:bg-white dark:hover:bg-black transition-all shadow-lg shadow-gray-200/30 dark:shadow-black/30 text-gray-700 dark:text-gray-200"
                    >
                      {theme === "dark" ? (
                        <Sun className="h-5 w-5 text-amber-500" />
                      ) : (
                        <Moon className="h-5 w-5 text-indigo-600" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.header>
        </div>
      </div>

      {/* Mobile Header - Bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <motion.header
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 dark:bg-black/80 backdrop-blur-3xl backdrop-saturate-150 border-t border-white/20 dark:border-white/10 shadow-2xl shadow-gray-200/20 dark:shadow-black/20"
          style={{
            background: theme === 'dark' 
              ? 'linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.8) 100%)'
              : 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)'
          }}
        >
          <div className="px-4 py-3 safe-area-pb">
            {/* Mobile Bottom Navigation */}
            <div className="flex items-center justify-around">
              {[...mainNavLinks, ...secondaryNavLinks].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "flex flex-col items-center space-y-1 py-2 px-3 rounded-xl transition-all min-w-0",
                    pathname === link.href
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center transition-all",
                    pathname === link.href
                      ? "bg-indigo-600 text-white dark:bg-indigo-400 dark:text-gray-900"
                      : "bg-gray-200/80 dark:bg-gray-700/80 text-gray-600 dark:text-gray-400"
                  )}>
                    {getNavIcon(link.href)}
                  </div>
                  <span className="text-xs font-medium truncate">{link.name}</span>
                </Link>
              ))}
              
              {/* Settings/More Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex flex-col items-center space-y-1 py-2 px-3 rounded-xl transition-all min-w-0"
              >
                <div className="w-7 h-7 rounded-full flex items-center justify-center bg-gray-200/80 dark:bg-gray-700/80 text-gray-600 dark:text-gray-400">
                  <Menu className="h-4 w-4" />
                </div>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">More</span>
              </button>
            </div>
            
            {/* Expandable Menu */}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-gray-200/20 dark:border-gray-700/20 mt-3 pt-3"
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Settings</div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    aria-label="Toggle theme"
                    className="h-8 w-8 rounded-lg bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-gray-300/50 dark:border-gray-600/50 hover:bg-white dark:hover:bg-black transition-all shadow-md"
                  >
                    {theme === "dark" ? (
                      <Sun className="h-4 w-4 text-amber-500" />
                    ) : (
                      <Moon className="h-4 w-4 text-indigo-600" />
                    )}
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.header>
      </div>
    </>
  )
}
