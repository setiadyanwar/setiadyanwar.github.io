import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface PortfolioBreadcrumbProps {
  title: string
}

export default function PortfolioBreadcrumb({ title }: PortfolioBreadcrumbProps) {
  return (
    <div className="container mx-auto px-6 pt-12 pb-6">
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-500 overflow-hidden">
        <Link href="/" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors truncate">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 flex-shrink-0" />
        <Link href="/portfolio" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors truncate">
          Portfolio
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 flex-shrink-0" />
        <span className="text-gray-900 dark:text-gray-100 truncate min-w-0">{title}</span>
      </div>
    </div>
  )
}

