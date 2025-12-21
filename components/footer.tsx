"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Linkedin, Instagram, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const titles = ["FRONTEND", "UI/UX DESIGNER", "WEB DEVELOPER"]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length)
        setIsVisible(true)
      }, 500) // Wait for fade out before changing text
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [titles.length])

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Setiady Ibrahim Anwar</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Frontend Developer & UI/UX Designer creating modern, user-friendly web experiences.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/setiadyanwar"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/setiadyanwar"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://instagram.com/setiadyanwarr"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="mailto:setiadyanwar@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Contact</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Tangerang, Indonesia</p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">setiadyanwar@gmail.com</p>
            <p className="text-gray-600 dark:text-gray-400">+6289662007938</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © {currentYear} Setiady Ibrahim Anwar. All rights reserved.
            </p>
          </div>
        </div>

        {/* Large typography as requested */}
        <div className="mt-12 overflow-hidden">
          <h2
            className={`text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-bold text-gray-100 dark:text-gray-800 leading-none text-center select-none transition-opacity duration-500 whitespace-nowrap ${isVisible ? "opacity-100" : "opacity-0"
              }`}
          >
            {titles[currentIndex]}
          </h2>
        </div>
      </div>
    </footer>
  )
}
