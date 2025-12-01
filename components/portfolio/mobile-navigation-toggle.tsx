interface MobileNavigationToggleProps {
  isOpen: boolean
  onToggle: () => void
}

export default function MobileNavigationToggle({
  isOpen,
  onToggle,
}: MobileNavigationToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="lg:hidden fixed top-6 left-6 z-50 w-10 h-10 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center"
      aria-label="Toggle navigation"
    >
      {isOpen ? (
        <svg
          className="w-5 h-5 text-gray-700 dark:text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg
          className="w-5 h-5 text-gray-700 dark:text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )}
    </button>
  )
}

