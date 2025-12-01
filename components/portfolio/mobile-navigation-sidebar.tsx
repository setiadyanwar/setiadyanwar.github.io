interface Section {
  id: string
  label: string
}

interface MobileNavigationSidebarProps {
  sections: Section[]
  activeSection: string
  isOpen: boolean
  onSectionClick: (sectionId: string) => void
  onClose: () => void
}

export default function MobileNavigationSidebar({
  sections,
  activeSection,
  isOpen,
  onSectionClick,
  onClose,
}: MobileNavigationSidebarProps) {
  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId)
  }

  return (
    <>
      {/* Mobile Sidebar - Slide from left */}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-950 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="pt-20 px-6">
          <nav className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`w-full text-left text-sm py-2.5 px-3 rounded-lg transition-colors duration-200 ${
                  activeSection === section.id
                    ? "text-indigo-600 dark:text-indigo-400 font-medium bg-indigo-50 dark:bg-indigo-900/20"
                    : "text-gray-500 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-900"
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 dark:bg-black/40 z-30"
          onClick={onClose}
        />
      )}
    </>
  )
}

