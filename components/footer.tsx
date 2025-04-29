import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

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
                href="https://github.com"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="mailto:contact@example.com"
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
                  href="#about"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Contact</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Jakarta, Indonesia</p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">contact@example.com</p>
            <p className="text-gray-600 dark:text-gray-400">+62 123 456 7890</p>
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
          <h2 className="text-[120px] md:text-[180px] font-bold text-gray-100 dark:text-gray-800 leading-none text-center select-none">
            FRONTEND
          </h2>
        </div>
      </div>
    </footer>
  )
}
