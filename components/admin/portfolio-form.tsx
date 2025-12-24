"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Save, X, Plus, Trash2, Eye, Sparkles } from "lucide-react"
import Link from "next/link"
import ImageUploader from "@/components/admin/image-uploader"

interface PortfolioFormData {
  id: string
  title: string
  date: string
  subtitle: string
  category: string
  image: string
  additional_images: string[]
  technologies: string[]
  description: string
  role: string
  responsibilities: string[]
  challenges: string
  demo_url: string
  repo_url: string
  problem_image: string
  solution_image: string
  problem_description: string
  problem_cards: Array<{ title: string; description: string }>
  solution_description: string
  solution_cards: Array<{ title: string; description: string }>
  status: string
  impact: Array<{ type: string; value: number; unit: string; title: string; description: string }>
  outcomes: Array<{ type: string; value: number; unit: string; title: string; description: string }>
  next_steps: string
  project_steps: Array<{ title: string; description: string; image: string | null }>
  overview_heading: string
  process_heading: string
  challenges_heading: string
  problem_heading: string
  solution_heading: string
  outcomes_heading: string
}

const defaultFormData: PortfolioFormData = {
  id: "",
  title: "",
  date: "",
  subtitle: "",
  category: "web",
  image: "",
  additional_images: [],
  technologies: [],
  description: "",
  role: "",
  responsibilities: [],
  challenges: "",
  demo_url: "",
  repo_url: "",
  problem_image: "",
  solution_image: "",
  problem_description: "",
  problem_cards: [],
  solution_description: "",
  solution_cards: [],
  status: "draft",
  impact: [],
  outcomes: [],
  next_steps: "",
  project_steps: [],
  overview_heading: "",
  process_heading: "",
  challenges_heading: "",
  problem_heading: "",
  solution_heading: "",
  outcomes_heading: "",
}

export default function PortfolioForm({ portfolioId }: { portfolioId?: string }) {
  const router = useRouter()
  const [formData, setFormData] = useState<PortfolioFormData>(defaultFormData)
  const [loading, setLoading] = useState(!!portfolioId)
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState("basic")

  useEffect(() => {
    if (portfolioId) {
      fetchPortfolio()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [portfolioId])

  useEffect(() => {
    // Generate ID from title when title changes (only for new items)
    if (!portfolioId && formData.title) {
      const generatedId = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
      setFormData((prev) => ({ ...prev, id: generatedId }))
    }
  }, [formData.title, portfolioId])

  async function fetchPortfolio() {
    try {
      const response = await fetch(`/api/admin/portfolio/${portfolioId}`)
      if (!response.ok) throw new Error("Failed to fetch portfolio")
      const { data } = await response.json()
      setFormData({
        id: data.id,
        title: data.title || "",
        date: data.date || "",
        subtitle: data.subtitle || "",
        category: data.category || "web",
        image: data.image || "",
        additional_images: data.additional_images || [],
        technologies: data.technologies || [],
        description: data.description || "",
        role: data.role || "",
        responsibilities: data.responsibilities || [],
        challenges: data.challenges || "",
        demo_url: data.demo_url || "",
        repo_url: data.repo_url || "",
        problem_image: data.problem_image || "",
        solution_image: data.solution_image || "",
        problem_description: data.problem_description || "",
        problem_cards: data.problem_cards || [],
        solution_description: data.solution_description || "",
        solution_cards: data.solution_cards || [],
        status: data.status || "draft",
        impact: data.impact || [],
        outcomes: data.outcomes || [],
        next_steps: data.next_steps || "",
        project_steps: data.project_steps || [],
        overview_heading: data.overview_heading || "",
        process_heading: data.process_heading || "",
        challenges_heading: data.challenges_heading || "",
        problem_heading: data.problem_heading || "",
        solution_heading: data.solution_heading || "",
        outcomes_heading: data.outcomes_heading || "",
      })
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.error("Error fetching portfolio:", error)
      }
      alert("Failed to load portfolio")
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)

    try {
      const url = portfolioId
        ? `/api/admin/portfolio/${portfolioId}`
        : "/api/admin/portfolio"
      const method = portfolioId ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Failed to save portfolio")
      }

      router.push("/admin/portfolio")
    } catch (error: any) {
      alert(error.message || "Failed to save portfolio")
    } finally {
      setSaving(false)
    }
  }

  const tabs = [
    { id: "basic", label: "Basic Info" },
    { id: "overview", label: "Overview" },
    { id: "problem", label: "Problem" },
    { id: "solution", label: "Solution" },
    { id: "outcomes", label: "Outcomes" },
    { id: "process", label: "Process" },
  ]

  // Helper to insert markdown bold syntax for highlighting
  const insertHighlight = (elementId: string, field: keyof PortfolioFormData | 'problem_cards' | 'solution_cards', cardIdx?: number, cardField?: 'description') => {
    const textarea = document.getElementById(elementId) as HTMLTextAreaElement
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const text = textarea.value
    const selectedText = text.substring(start, end)

    // Toggle highlight if already highlighted, otherwise add it
    let newText = ''
    if (selectedText.startsWith('**') && selectedText.endsWith('**') && selectedText.length >= 4) {
      newText = text.substring(0, start) + selectedText.substring(2, selectedText.length - 2) + text.substring(end)
    } else {
      newText = text.substring(0, start) + `**${selectedText}**` + text.substring(end)
    }

    // Update state based on field type
    if (field === 'problem_cards' && typeof cardIdx === 'number' && cardField) {
      const newCards = [...formData.problem_cards]
      newCards[cardIdx] = { ...newCards[cardIdx], [cardField]: newText }
      setFormData({ ...formData, problem_cards: newCards })
    } else if (field === 'solution_cards' && typeof cardIdx === 'number' && cardField) {
      const newCards = [...formData.solution_cards]
      newCards[cardIdx] = { ...newCards[cardIdx], [cardField]: newText }
      setFormData({ ...formData, solution_cards: newCards })
    } else if (typeof field === 'string' && !cardIdx) {
      setFormData({ ...formData, [field]: newText as any })
    }

    // Restore focus and selection (adjusted for added/removed chars)
    setTimeout(() => {
      textarea.focus()
      const offset = selectedText.startsWith('**') ? -2 : 2
      textarea.setSelectionRange(start + offset, end + offset)
    }, 0)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-gray-500 dark:text-gray-400">Loading...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {portfolioId ? "Edit Portfolio" : "New Portfolio"}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {portfolioId ? "Update portfolio details" : "Create a new portfolio item"}
          </p>
        </div>
        <div className="flex gap-3">
          {portfolioId && (
            <Link
              href={`/portfolio/${portfolioId}`}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <Eye className="w-4 h-4" />
              Preview
            </Link>
          )}
          <Link
            href="/admin/portfolio"
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="w-4 h-4" />
            Cancel
          </Link>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${activeTab === tab.id
                  ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Basic Info Tab */}
        {activeTab === "basic" && (
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  ID
                </label>
                <input
                  type="text"
                  value={formData.id}
                  onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Auto-generated from title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subtitle
                </label>
                <input
                  type="text"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Apps</option>
                  <option value="ui">UI/UX Design</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Date
                </label>
                <input
                  type="text"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="e.g., January 2024"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Main Image URL
              </label>
              <input
                type="text"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="/portfolio/web/example.png or https://images.unsplash.com/..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Technologies
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {formData.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm"
                  >
                    {tech}
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({
                          ...formData,
                          technologies: formData.technologies.filter((_, i) => i !== idx),
                        })
                      }}
                      className="hover:text-red-600"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add technology"
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      const value = e.currentTarget.value.trim()
                      if (value && !formData.technologies.includes(value)) {
                        setFormData({
                          ...formData,
                          technologies: [...formData.technologies, value],
                        })
                        e.currentTarget.value = ""
                      }
                    }
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Demo URL
                </label>
                <input
                  type="url"
                  value={formData.demo_url}
                  onChange={(e) => setFormData({ ...formData, demo_url: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="https://example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Repository URL
                </label>
                <input
                  type="url"
                  value={formData.repo_url}
                  onChange={(e) => setFormData({ ...formData, repo_url: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="https://github.com/username/repo"
                />
              </div>
            </div>
          </div>
        )}

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Overview Heading
              </label>
              <input
                type="text"
                value={formData.overview_heading}
                onChange={(e) => setFormData({ ...formData, overview_heading: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="e.g., The Vision, Project Strategy"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Description
                </label>
                <button
                  type="button"
                  onClick={() => insertHighlight('description-input', 'description')}
                  className="text-xs px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-500 rounded hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  Highlight Selection
                </button>
              </div>
              <textarea
                id="description-input"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Brief description of the project... (Select text and click Highlight to emphasize)"
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Tip: You can highlight text to make it look like <strong className="bg-amber-100 dark:bg-amber-900/30 font-medium px-0.5 rounded text-gray-900 dark:text-gray-100">stabilo</strong> by selecting it and clicking the button above.
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Role
              </label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="e.g., Frontend Developer & UI/UX Designer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Responsibilities
              </label>
              <div className="space-y-2 mb-2">
                {formData.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={resp}
                      onChange={(e) => {
                        const newResp = [...formData.responsibilities]
                        newResp[idx] = e.target.value
                        setFormData({ ...formData, responsibilities: newResp })
                      }}
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({
                          ...formData,
                          responsibilities: formData.responsibilities.filter((_, i) => i !== idx),
                        })
                      }}
                      className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    responsibilities: [...formData.responsibilities, ""],
                  })
                }}
                className="flex items-center gap-2 px-4 py-2 text-sm text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg"
              >
                <Plus className="w-4 h-4" />
                Add Responsibility
              </button>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Challenges
                </label>
                <button
                  type="button"
                  onClick={() => insertHighlight('challenges-input', 'challenges')}
                  className="text-xs px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-500 rounded hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  Highlight Selection
                </button>
              </div>
              <textarea
                id="challenges-input"
                value={formData.challenges}
                onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Describe the challenges faced..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Additional Images
              </label>
              <div className="space-y-2 mb-2">
                {formData.additional_images.map((img, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={img}
                      onChange={(e) => {
                        const newImgs = [...formData.additional_images]
                        newImgs[idx] = e.target.value
                        setFormData({ ...formData, additional_images: newImgs })
                      }}
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="/portfolio/web/image.png or https://..."
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({
                          ...formData,
                          additional_images: formData.additional_images.filter((_, i) => i !== idx),
                        })
                      }}
                      className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    additional_images: [...formData.additional_images, ""],
                  })
                }}
                className="flex items-center gap-2 px-4 py-2 text-sm text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg"
              >
                <Plus className="w-4 h-4" />
                Add Image
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Impact
              </label>
              <div className="space-y-4">
                {formData.impact.map((impact, idx) => (
                  <div key={idx} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
                      <input
                        type="text"
                        value={impact.type}
                        onChange={(e) => {
                          const newImpact = [...formData.impact]
                          newImpact[idx] = { ...impact, type: e.target.value }
                          setFormData({ ...formData, impact: newImpact })
                        }}
                        className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="Type (e.g., positive)"
                      />
                      <input
                        type="number"
                        value={impact.value}
                        onChange={(e) => {
                          const newImpact = [...formData.impact]
                          newImpact[idx] = { ...impact, value: parseFloat(e.target.value) || 0 }
                          setFormData({ ...formData, impact: newImpact })
                        }}
                        className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="Value"
                      />
                      <input
                        type="text"
                        value={impact.unit}
                        onChange={(e) => {
                          const newImpact = [...formData.impact]
                          newImpact[idx] = { ...impact, unit: e.target.value }
                          setFormData({ ...formData, impact: newImpact })
                        }}
                        className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="Unit (e.g., %)"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setFormData({
                            ...formData,
                            impact: formData.impact.filter((_, i) => i !== idx),
                          })
                        }}
                        className="px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-sm"
                      >
                        <Trash2 className="w-4 h-4 inline mr-2" />
                        Remove
                      </button>
                    </div>
                    <input
                      type="text"
                      value={impact.title}
                      onChange={(e) => {
                        const newImpact = [...formData.impact]
                        newImpact[idx] = { ...impact, title: e.target.value }
                        setFormData({ ...formData, impact: newImpact })
                      }}
                      className="w-full mb-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Title"
                    />
                    <textarea
                      value={impact.description}
                      onChange={(e) => {
                        const newImpact = [...formData.impact]
                        newImpact[idx] = { ...impact, description: e.target.value }
                        setFormData({ ...formData, impact: newImpact })
                      }}
                      rows={2}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Description"
                    />
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    impact: [
                      ...formData.impact,
                      { type: "positive", value: 0, unit: "", title: "", description: "" },
                    ],
                  })
                }}
                className="flex items-center gap-2 px-4 py-2 text-sm text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg"
              >
                <Plus className="w-4 h-4" />
                Add Impact
              </button>
            </div>
          </div>
        )}

        {/* Challenges Tab */}
        {activeTab === "challenges" && (
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Challenges Heading
              </label>
              <input
                type="text"
                value={formData.challenges_heading}
                onChange={(e) => setFormData({ ...formData, challenges_heading: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="e.g. The Challenge"
              />
            </div>

            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Challenges Description
                </label>
                <button
                  type="button"
                  onClick={() => insertHighlight('challenges-input', 'challenges')}
                  className="text-xs px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-500 rounded hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  Highlight Selection
                </button>
              </div>
              <textarea
                id="challenges-input"
                value={formData.challenges}
                onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Describe the challenges faced..."
              />
            </div>
          </div>
        )}

        {/* Problem Tab */}
        {activeTab === "problem" && (
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Problem Description
                </label>
                <button
                  type="button"
                  onClick={() => insertHighlight('problem-desc-input', 'problem_description')}
                  className="text-xs px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-500 rounded hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  Highlight Selection
                </button>
              </div>
              <textarea
                id="problem-desc-input"
                value={formData.problem_description}
                onChange={(e) => setFormData({ ...formData, problem_description: e.target.value })}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Describe the problem that this project solves..."
              />
            </div>
            <div>
              <ImageUploader
                label="Problem Section Image"
                currentImageUrl={formData.problem_image}
                storagePath={`portfolio/${formData.id}/problem-${Date.now()}.jpg`}
                onUploadSuccess={(url, path) => {
                  setFormData({ ...formData, problem_image: url })
                }}
                onRemove={() => {
                  setFormData({ ...formData, problem_image: "" })
                }}
                helperText="Image for problem section (recommended: 800×600px)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Problem Cards
              </label>
              <div className="space-y-4">
                {formData.problem_cards.map((card, idx) => (
                  <div key={idx} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                      <input
                        type="text"
                        value={card.title}
                        onChange={(e) => {
                          const newCards = [...formData.problem_cards]
                          newCards[idx] = { ...card, title: e.target.value }
                          setFormData({ ...formData, problem_cards: newCards })
                        }}
                        className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="Card title"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setFormData({
                            ...formData,
                            problem_cards: formData.problem_cards.filter((_, i) => i !== idx),
                          })
                        }}
                        className="px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-sm"
                      >
                        <Trash2 className="w-4 h-4 inline mr-2" />
                        Remove
                      </button>
                    </div>
                    <textarea
                      value={card.description}
                      onChange={(e) => {
                        const newCards = [...formData.problem_cards]
                        newCards[idx] = { ...card, description: e.target.value }
                        setFormData({ ...formData, problem_cards: newCards })
                      }}
                      rows={2}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Card description"
                    />
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    problem_cards: [...formData.problem_cards, { title: "", description: "" }],
                  })
                }}
                className="flex items-center gap-2 px-4 py-2 text-sm text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg"
              >
                <Plus className="w-4 h-4" />
                Add Problem Card
              </button>
            </div>
          </div>
        )}

        {/* Solution Tab */}
        {activeTab === "solution" && (
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Solution Heading
              </label>
              <input
                type="text"
                value={formData.solution_heading}
                onChange={(e) => setFormData({ ...formData, solution_heading: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="e.g. A Unified Approach"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Solution Description
                </label>
                <button
                  type="button"
                  onClick={() => insertHighlight('solution-desc-input', 'solution_description')}
                  className="text-xs px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-500 rounded hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  Highlight Selection
                </button>
              </div>
              <textarea
                id="solution-desc-input"
                value={formData.solution_description}
                onChange={(e) => setFormData({ ...formData, solution_description: e.target.value })}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Describe the solution implemented..."
              />
            </div>
            <div>
              <ImageUploader
                label="Solution Section Image"
                currentImageUrl={formData.solution_image}
                storagePath={`portfolio/${formData.id}/solution-${Date.now()}.jpg`}
                onUploadSuccess={(url, path) => {
                  setFormData({ ...formData, solution_image: url })
                }}
                onRemove={() => {
                  setFormData({ ...formData, solution_image: "" })
                }}
                helperText="Image for solution section (recommended: 800×600px)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Solution Cards
              </label>
              <div className="space-y-4">
                {formData.solution_cards.map((card, idx) => (
                  <div key={idx} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                      <input
                        type="text"
                        value={card.title}
                        onChange={(e) => {
                          const newCards = [...formData.solution_cards]
                          newCards[idx] = { ...card, title: e.target.value }
                          setFormData({ ...formData, solution_cards: newCards })
                        }}
                        className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="Card title"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setFormData({
                            ...formData,
                            solution_cards: formData.solution_cards.filter((_, i) => i !== idx),
                          })
                        }}
                        className="px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-sm"
                      >
                        <Trash2 className="w-4 h-4 inline mr-2" />
                        Remove
                      </button>
                    </div>
                    <textarea
                      value={card.description}
                      onChange={(e) => {
                        const newCards = [...formData.solution_cards]
                        newCards[idx] = { ...card, description: e.target.value }
                        setFormData({ ...formData, solution_cards: newCards })
                      }}
                      rows={2}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Card description"
                    />
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    solution_cards: [...formData.solution_cards, { title: "", description: "" }],
                  })
                }}
                className="flex items-center gap-2 px-4 py-2 text-sm text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg"
              >
                <Plus className="w-4 h-4" />
                Add Solution Card
              </button>
            </div>
          </div>
        )}

        {/* Outcomes Tab */}
        {activeTab === "outcomes" && (
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Outcomes Heading
              </label>
              <input
                type="text"
                value={formData.outcomes_heading}
                onChange={(e) => setFormData({ ...formData, outcomes_heading: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="e.g. Measurable Results"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Outcomes
              </label>
              <div className="space-y-4">
                {formData.outcomes.map((outcome, idx) => (
                  <div key={idx} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
                      <input
                        type="text"
                        value={outcome.type}
                        onChange={(e) => {
                          const newOutcomes = [...formData.outcomes]
                          newOutcomes[idx] = { ...outcome, type: e.target.value }
                          setFormData({ ...formData, outcomes: newOutcomes })
                        }}
                        className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="Type (e.g., positive)"
                      />
                      <input
                        type="number"
                        value={outcome.value}
                        onChange={(e) => {
                          const newOutcomes = [...formData.outcomes]
                          newOutcomes[idx] = { ...outcome, value: parseFloat(e.target.value) || 0 }
                          setFormData({ ...formData, outcomes: newOutcomes })
                        }}
                        className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="Value"
                      />
                      <input
                        type="text"
                        value={outcome.unit}
                        onChange={(e) => {
                          const newOutcomes = [...formData.outcomes]
                          newOutcomes[idx] = { ...outcome, unit: e.target.value }
                          setFormData({ ...formData, outcomes: newOutcomes })
                        }}
                        className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="Unit (e.g., %)"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setFormData({
                            ...formData,
                            outcomes: formData.outcomes.filter((_, i) => i !== idx),
                          })
                        }}
                        className="px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-sm"
                      >
                        <Trash2 className="w-4 h-4 inline mr-2" />
                        Remove
                      </button>
                    </div>
                    <input
                      type="text"
                      value={outcome.title}
                      onChange={(e) => {
                        const newOutcomes = [...formData.outcomes]
                        newOutcomes[idx] = { ...outcome, title: e.target.value }
                        setFormData({ ...formData, outcomes: newOutcomes })
                      }}
                      className="w-full mb-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Title"
                    />
                    <textarea
                      value={outcome.description}
                      onChange={(e) => {
                        const newOutcomes = [...formData.outcomes]
                        newOutcomes[idx] = { ...outcome, description: e.target.value }
                        setFormData({ ...formData, outcomes: newOutcomes })
                      }}
                      rows={2}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Description"
                    />
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    outcomes: [
                      ...formData.outcomes,
                      { type: "positive", value: 0, unit: "", title: "", description: "" },
                    ],
                  })
                }}
                className="flex items-center gap-2 px-4 py-2 text-sm text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg"
              >
                <Plus className="w-4 h-4" />
                Add Outcome
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Next Steps
              </label>
              <textarea
                value={formData.next_steps}
                onChange={(e) => setFormData({ ...formData, next_steps: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Describe future plans or next steps..."
              />
            </div>
          </div>
        )}

        {/* Process Tab */}
        {activeTab === "process" && (
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Process Section Heading
              </label>
              <input
                type="text"
                value={formData.process_heading}
                onChange={(e) => setFormData({ ...formData, process_heading: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="e.g. Design Process, Development Steps"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Project Steps
              </label>
              <div className="space-y-4">
                {formData.project_steps.map((step, idx) => (
                  <div key={idx} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Step {idx + 1}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setFormData({
                            ...formData,
                            project_steps: formData.project_steps.filter((_, i) => i !== idx),
                          })
                        }}
                        className="px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-sm"
                      >
                        <Trash2 className="w-4 h-4 inline mr-2" />
                        Remove
                      </button>
                    </div>
                    <input
                      type="text"
                      value={step.title}
                      onChange={(e) => {
                        const newSteps = [...formData.project_steps]
                        newSteps[idx] = { ...step, title: e.target.value }
                        setFormData({ ...formData, project_steps: newSteps })
                      }}
                      className="w-full mb-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Step title"
                    />
                    <textarea
                      value={step.description}
                      onChange={(e) => {
                        const newSteps = [...formData.project_steps]
                        newSteps[idx] = { ...step, description: e.target.value }
                        setFormData({ ...formData, project_steps: newSteps })
                      }}
                      rows={3}
                      className="w-full mb-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-mono text-sm"
                      placeholder="Step description. Use ### for subheadings."
                    />
                    <p className="text-xs text-gray-500 mb-2">
                      Supports Markdown: Use <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">### Subheading</code> for section titles.
                    </p>
                    <ImageUploader
                      label={`Step ${idx + 1} Image (optional)`}
                      currentImageUrl={step.image || ""}
                      storagePath={`portfolio/${formData.id}/step-${idx + 1}-${Date.now()}.jpg`}
                      onUploadSuccess={(url, path) => {
                        const newSteps = [...formData.project_steps]
                        newSteps[idx] = { ...step, image: url }
                        setFormData({ ...formData, project_steps: newSteps })
                      }}
                      onRemove={() => {
                        const newSteps = [...formData.project_steps]
                        newSteps[idx] = { ...step, image: null }
                        setFormData({ ...formData, project_steps: newSteps })
                      }}
                      helperText="Image for this project step (recommended: 600×400px)"
                      className="mt-2"
                    />
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    project_steps: [
                      ...formData.project_steps,
                      { title: "", description: "", image: null },
                    ],
                  })
                }}
                className="flex items-center gap-2 px-4 py-2 text-sm text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg"
              >
                <Plus className="w-4 h-4" />
                Add Project Step
              </button>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/admin/portfolio"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="w-5 h-5" />
            {saving ? "Saving..." : portfolioId ? "Update Portfolio" : "Create Portfolio"}
          </button>
        </div>
      </form>
    </div>
  )
}

