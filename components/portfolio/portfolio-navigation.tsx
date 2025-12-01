interface Section {
  id: string
  label: string
}

interface PortfolioNavigationProps {
  sections: Section[]
  activeSection: string
  onSectionClick: (sectionId: string) => void
}

export default function PortfolioNavigation({
  sections,
  activeSection,
  onSectionClick,
}: PortfolioNavigationProps) {
  return (
    <aside className="hidden lg:block w-48 flex-shrink-0">
      <div className="sticky top-32 pt-2">
        <nav className="space-y-0.5">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className={`w-full text-left text-sm py-1.5 transition-colors duration-200 ${
                activeSection === section.id
                  ? "text-indigo-600 dark:text-indigo-400 font-medium"
                  : "text-gray-500 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400"
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  )
}

