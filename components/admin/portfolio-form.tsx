"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Save, X, Plus, Trash2, Eye, Sparkles, LayoutGrid, List } from "lucide-react"
import Link from "next/link"
import ImageUploader from "@/components/admin/image-uploader"
import MultiImageUploader from "@/components/admin/multi-image-uploader"

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
  project_steps: Array<{ title: string; description: string; image: string | null; substeps: Array<{ title: string; description: string; images: string[] }> }>
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
        project_steps: (data.project_steps || []).map((step: any) => {
          const oldSubsteps = step.substeps || step.items || step.sub_steps || step.subItems || []
          const substeps = Array.isArray(oldSubsteps)
            ? oldSubsteps.map((sub: any) => {
              // If it's already an object with title, description and images, keep it
              if (typeof sub === 'object' && sub !== null && 'title' in sub) {
                return {
                  title: sub.title || '',
                  description: sub.description || '',
                  images: sub.images || []
                }
              }
              // If it's a string, convert to new format
              return { title: sub, description: '', images: [] }
            })
            : []
          return { ...step, substeps }
        }),
        overview_heading: data.overview_heading || "",
        process_heading: data.process_heading || "",
        challenges_heading: data.challenges_heading || "",
        problem_heading: data.problem_heading || "",
        solution_heading: data.solution_heading || "",
        outcomes_heading: data.outcomes_heading || "",
      })
    } catch (error) {
      console.error("Error fetching portfolio:", error)
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
    { id: "basic", label: "Basic Info", icon: List },
    { id: "overview", label: "Details & Overview", icon: LayoutGrid },
    { id: "process", label: "Process & Steps", icon: List },
    { id: "media", label: "Media & Gallery", icon: LayoutGrid },
    { id: "case-study", label: "Case Study (Problem/Solution)", icon: Sparkles },
    { id: "impact", label: "Impact & Outcomes", icon: LayoutGrid },
  ]

  // Helper to insert markdown bold syntax for highlighting
  const insertHighlight = (elementId: string, field: keyof PortfolioFormData | 'problem_cards' | 'solution_cards', cardIdx?: number, cardField?: 'description') => {
    const textarea = document.getElementById(elementId) as HTMLTextAreaElement
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const text = textarea.value
    const selectedText = text.substring(start, end)

    let newText = ''
    if (selectedText.startsWith('**') && selectedText.endsWith('**') && selectedText.length >= 4) {
      newText = text.substring(0, start) + selectedText.substring(2, selectedText.length - 2) + text.substring(end)
    } else {
      newText = text.substring(0, start) + `**${selectedText}**` + text.substring(end)
    }

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

    setTimeout(() => {
      textarea.focus()
      const offset = selectedText.startsWith('**') ? -2 : 2
      textarea.setSelectionRange(start + offset, end + offset)
    }, 0)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-gray-500 dark:text-gray-400 animate-pulse">Loading editor...</div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-[#fafafa]/80 dark:bg-black/80 backdrop-blur-md py-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {portfolioId ? "Edit Portfolio Item" : "Create New Project"}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {formData.title || "Untitled Project"}
          </p>
        </div>
        <div className="flex gap-3">
          {portfolioId && (
            <Link
              href={`/portfolio/${portfolioId}`}
              target="_blank"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
            >
              <Eye className="w-4 h-4 inline mr-2" />
              Preview
            </Link>
          )}
          <button
            onClick={handleSubmit}
            disabled={saving}
            className="px-6 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 flex items-center gap-2"
          >
            {saving ? "Saving..." : <><Save className="w-4 h-4" /> Save Changes</>}
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 p-1 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 flex-1 justify-center px-4 py-3 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${activeTab === tab.id
                ? "bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-sm"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-gray-800/50"
                }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* --- BASIC INFO TAB --- */}
        {activeTab === "basic" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6 bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Core Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-lg"
                    placeholder="Project Title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">ID (Slug)</label>
                  <input
                    type="text"
                    value={formData.id}
                    onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 font-mono text-sm text-gray-600 dark:text-gray-400"
                    placeholder="project-slug"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
                  >
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile Apps</option>
                    <option value="ui">UI/UX Design</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className={`w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg font-medium ${formData.status === 'published'
                        ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                        : 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400'
                      }`}
                  >
                    <option value="draft">Draft (Hidden)</option>
                    <option value="published">Published (Visible)</option>
                  </select>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {formData.status === 'published'
                      ? '✓ This portfolio item is visible on your website'
                      : '⚠ This portfolio item is hidden from your website'}
                  </p>
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subtitle</label>
                  <input
                    type="text"
                    value={formData.subtitle}
                    onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
                    placeholder="Brief catchy description"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Technologies</label>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {formData.technologies.map((tech, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-gray-700 text-indigo-700 dark:text-indigo-300 rounded-full text-sm shadow-sm border border-gray-200 dark:border-gray-600">
                          {tech}
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, technologies: formData.technologies.filter((_, i) => i !== idx) })}
                            className="hover:text-red-500 rounded-full p-0.5"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                    <input
                      type="text"
                      placeholder="Type a tech (e.g. React) and press Enter..."
                      className="w-full px-3 py-2 bg-transparent border-none focus:ring-0 text-sm"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          const val = e.currentTarget.value.trim()
                          if (val && !formData.technologies.includes(val)) {
                            setFormData({ ...formData, technologies: [...formData.technologies, val] })
                            e.currentTarget.value = ""
                          }
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Project Cover</h3>
                <ImageUploader
                  label="Hero Image"
                  storagePath={`portfolio/${formData.id}/hero-${Date.now()}.jpg`}
                  currentImageUrl={formData.image}
                  onUploadSuccess={(url) => setFormData({ ...formData, image: url })}
                  onRemove={() => setFormData({ ...formData, image: "" })}
                  helperText="Recommended size: 1200x630px"
                />
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Status & Links</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 uppercase mb-1">Status</label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
                    >
                      <option value="draft">Draft (Hidden)</option>
                      <option value="published">Published (Visible)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 uppercase mb-1">Project Date</label>
                    <input
                      type="text"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
                      placeholder="e.g. Jan 2024"
                    />
                  </div>
                  <div className="pt-2 border-t border-gray-100 dark:border-gray-800"></div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 uppercase mb-1">Demo URL</label>
                    <input
                      type="url"
                      value={formData.demo_url}
                      onChange={(e) => setFormData({ ...formData, demo_url: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-sm"
                      placeholder="https://..."
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 uppercase mb-1">Repo URL</label>
                    <input
                      type="url"
                      value={formData.repo_url}
                      onChange={(e) => setFormData({ ...formData, repo_url: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-sm"
                      placeholder="https://github.com/..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- OVERVIEW TAB --- */}
        {activeTab === "overview" && (
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm space-y-8">
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Overview Heading</label>
                <input
                  type="text"
                  value={formData.overview_heading}
                  onChange={(e) => setFormData({ ...formData, overview_heading: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-lg font-semibold"
                  placeholder="e.g. The Vision"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Project Description</label>
                  <button type="button" onClick={() => insertHighlight('description-input', 'description')} className="text-xs flex items-center gap-1 text-indigo-600 font-medium"><Sparkles className="w-3 h-3" /> Highlight Text</button>
                </div>
                <textarea
                  id="description-input"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={8}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 leading-relaxed"
                  placeholder="Tell the story of the project..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Role</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
                    placeholder="e.g. Lead Developer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Key Responsibilities</label>
                  <div className="space-y-2">
                    {formData.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex gap-2">
                        <input
                          type="text"
                          value={resp}
                          onChange={(e) => {
                            const newResp = [...formData.responsibilities]
                            newResp[idx] = e.target.value
                            setFormData({ ...formData, responsibilities: newResp })
                          }}
                          className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-sm"
                        />
                        <button type="button" onClick={() => setFormData({ ...formData, responsibilities: formData.responsibilities.filter((_, i) => i !== idx) })} className="text-red-500 p-2"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    ))}
                    <button type="button" onClick={() => setFormData({ ...formData, responsibilities: [...formData.responsibilities, ""] })} className="text-sm text-indigo-600 font-medium flex items-center gap-1"><Plus className="w-3 h-3" /> Add Responsibility</button>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Challenges Faced</label>
                  <button type="button" onClick={() => insertHighlight('challenges-input', 'challenges')} className="text-xs flex items-center gap-1 text-indigo-600 font-medium"><Sparkles className="w-3 h-3" /> Highlight Text</button>
                </div>
                <textarea
                  id="challenges-input"
                  value={formData.challenges}
                  onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
                  placeholder="What were the difficult parts..."
                />
              </div>
            </div>
          </div>
        )}

        {/* --- PROCESS TAB --- */}
        {activeTab === "process" && (
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm space-y-8">
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Process Heading</label>
                <input
                  type="text"
                  value={formData.process_heading}
                  onChange={(e) => setFormData({ ...formData, process_heading: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-lg font-semibold"
                  placeholder="e.g. How We Built It"
                />
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <label className="block text-lg font-semibold text-gray-900 dark:text-white">Project Steps</label>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, project_steps: [...formData.project_steps, { title: "", description: "", image: null, substeps: [] }] })}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" /> Add Step
                  </button>
                </div>

                <div className="space-y-6">
                  {formData.project_steps.map((step, idx) => (
                    <div key={idx} className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 relative group">
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div>
                              <label className="block text-xs font-medium text-gray-500 uppercase mb-1">Step Title</label>
                              <input
                                type="text"
                                value={step.title}
                                onChange={(e) => {
                                  const newSteps = [...formData.project_steps]
                                  newSteps[idx].title = e.target.value
                                  setFormData({ ...formData, project_steps: newSteps })
                                }}
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 font-medium"
                                placeholder="e.g. Research & Analysis"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-gray-500 uppercase mb-1">Description</label>
                              <textarea
                                value={step.description}
                                onChange={(e) => {
                                  const newSteps = [...formData.project_steps]
                                  newSteps[idx].description = e.target.value
                                  setFormData({ ...formData, project_steps: newSteps })
                                }}
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-sm"
                                placeholder="Describe what happened in this step..."
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-500 uppercase mb-1">Step Image</label>
                            <ImageUploader
                              label="Illustration"
                              storagePath={`portfolio/${formData.id}/steps/step-${idx + 1}`}
                              currentImageUrl={step.image || ""}
                              onUploadSuccess={(url) => {
                                const newSteps = [...formData.project_steps]
                                newSteps[idx].image = url
                                setFormData({ ...formData, project_steps: newSteps })
                              }}
                              onRemove={() => {
                                const newSteps = [...formData.project_steps]
                                newSteps[idx].image = null
                                setFormData({ ...formData, project_steps: newSteps })
                              }}
                              className="bg-white dark:bg-gray-900 border-dashed"
                            />
                          </div>
                        </div>

                        {/* Substeps Section */}
                        <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                          <div className="flex items-center justify-between mb-3">
                            <label className="block text-xs font-medium text-gray-500 uppercase">Key Activities (Sub-steps)</label>
                            <button
                              type="button"
                              onClick={() => {
                                const newSteps = [...formData.project_steps]
                                const newSubsteps = [...(newSteps[idx].substeps || []), { title: "", description: "", images: [] }]
                                newSteps[idx].substeps = newSubsteps
                                setFormData({ ...formData, project_steps: newSteps })
                              }}
                              className="text-xs text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-1"
                            >
                              <Plus className="w-3 h-3" /> Add Activity
                            </button>
                          </div>
                          <div className="space-y-4">
                            {(step.substeps || []).map((substep, subIdx) => (
                              <div key={subIdx} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 relative group">
                                <div className="space-y-3">
                                  <div className="flex gap-2">
                                    <input
                                      type="text"
                                      value={substep.title}
                                      onChange={(e) => {
                                        const newSteps = [...formData.project_steps]
                                        const newSubsteps = [...(newSteps[idx].substeps || [])]
                                        newSubsteps[subIdx] = { ...newSubsteps[subIdx], title: e.target.value }
                                        newSteps[idx].substeps = newSubsteps
                                        setFormData({ ...formData, project_steps: newSteps })
                                      }}
                                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-sm font-medium"
                                      placeholder="Activity title..."
                                    />
                                    <button
                                      type="button"
                                      onClick={() => {
                                        const newSteps = [...formData.project_steps]
                                        const newSubsteps = (newSteps[idx].substeps || []).filter((_, i) => i !== subIdx)
                                        newSteps[idx].substeps = newSubsteps
                                        setFormData({ ...formData, project_steps: newSteps })
                                      }}
                                      className="text-gray-400 hover:text-red-500 p-2"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  </div>

                                  {/* Description for substep */}
                                  <div>
                                    <label className="block text-xs text-gray-500 mb-1">Description</label>
                                    <textarea
                                      value={substep.description || ''}
                                      onChange={(e) => {
                                        const newSteps = [...formData.project_steps]
                                        const newSubsteps = [...(newSteps[idx].substeps || [])]
                                        newSubsteps[subIdx] = { ...newSubsteps[subIdx], description: e.target.value }
                                        newSteps[idx].substeps = newSubsteps
                                        setFormData({ ...formData, project_steps: newSteps })
                                      }}
                                      rows={3}
                                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-sm"
                                      placeholder="Describe this activity..."
                                    />
                                  </div>

                                  {/* Images for this substep */}
                                  <div>
                                    <label className="block text-xs text-gray-500 mb-2">Images</label>
                                    <MultiImageUploader
                                      images={substep.images || []}
                                      onImagesChange={(newImages) => {
                                        const newSteps = [...formData.project_steps]
                                        const newSubsteps = [...(newSteps[idx].substeps || [])]
                                        // Create completely new object to force re-render
                                        newSubsteps[subIdx] = {
                                          title: newSubsteps[subIdx].title,
                                          description: newSubsteps[subIdx].description,
                                          images: [...newImages] // Create new array reference
                                        }
                                        newSteps[idx] = {
                                          ...newSteps[idx],
                                          substeps: newSubsteps
                                        }
                                        setFormData({ ...formData, project_steps: newSteps })
                                      }}
                                      storagePath={`portfolio/${formData.id}/steps/step-${idx + 1}/substep-${subIdx + 1}`}
                                      label=""
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}

                            {(!step.substeps || step.substeps.length === 0) && (
                              <div className="text-center py-6 text-gray-400 text-sm">
                                No activities yet. Click "Add Activity" to start.
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          const newSteps = formData.project_steps.filter((_, i) => i !== idx)
                          setFormData({ ...formData, project_steps: newSteps })
                        }}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                        title="Remove Step"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}

                  {formData.project_steps.length === 0 && (
                    <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
                      <p className="text-gray-500 dark:text-gray-400 mb-4">No steps added yet. Document your process!</p>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, project_steps: [...formData.project_steps, { title: "", description: "", image: null, substeps: [] }] })}
                        className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors border border-indigo-200"
                      >
                        <Plus className="w-4 h-4 inline mr-2" /> Add First Step
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- MEDIA TAB --- */}
        {activeTab === "media" && (
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Project Gallery</h3>
              <MultiImageUploader
                images={formData.additional_images}
                onImagesChange={(newImages) => setFormData({ ...formData, additional_images: newImages })}
                storagePath={`portfolio/${formData.id}/gallery`}
                label="Screenshots & Visuals"
                helperText="Upload additional screenshots to show off the project features."
              />
            </div>
          </div>
        )}

        {/* --- CASE STUDY TAB (Problem/Solution) --- */}
        {activeTab === "case-study" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Problem Section */}
            <div className="space-y-6 bg-red-50/50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-900/30">
              <h3 className="text-xl font-bold text-red-800 dark:text-red-400 flex items-center gap-2">The Problem</h3>
              <textarea
                value={formData.problem_description}
                onChange={(e) => setFormData({ ...formData, problem_description: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-red-200 dark:border-red-900/50 rounded-lg bg-white dark:bg-gray-900"
                placeholder="What problem were you solving?"
              />
              <ImageUploader
                label="Problem Illustration"
                storagePath={`portfolio/${formData.id}/problem`}
                currentImageUrl={formData.problem_image}
                onUploadSuccess={(url) => setFormData({ ...formData, problem_image: url })}
                className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-dashed border-red-200"
              />

              <div className="space-y-4">
                <label className="font-semibold text-red-800 dark:text-red-400">Key Pain Points</label>
                {formData.problem_cards.map((card, idx) => (
                  <div key={idx} className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm border border-red-100 dark:border-red-900/30 relative group">
                    <input
                      type="text"
                      value={card.title}
                      onChange={(e) => {
                        const newCards = [...formData.problem_cards];
                        newCards[idx].title = e.target.value;
                        setFormData({ ...formData, problem_cards: newCards });
                      }}
                      className="font-bold text-red-700 dark:text-red-400 w-full bg-transparent border-none p-0 focus:ring-0 mb-2"
                      placeholder="Pain Point Title"
                    />
                    <textarea
                      value={card.description}
                      onChange={(e) => {
                        const newCards = [...formData.problem_cards];
                        newCards[idx].description = e.target.value;
                        setFormData({ ...formData, problem_cards: newCards });
                      }}
                      rows={2}
                      className="w-full text-sm text-gray-600 dark:text-gray-300 bg-transparent border-none p-0 focus:ring-0 resize-none"
                      placeholder="Description..."
                    />
                    <button type="button" onClick={() => {
                      const newCards = formData.problem_cards.filter((_, i) => i !== idx);
                      setFormData({ ...formData, problem_cards: newCards });
                    }} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 text-red-400 hover:text-red-600"><X className="w-4 h-4" /></button>
                  </div>
                ))}
                <button type="button" onClick={() => setFormData({ ...formData, problem_cards: [...formData.problem_cards, { title: "", description: "" }] })} className="w-full py-2 border-2 border-dashed border-red-200 dark:border-red-900/50 rounded-xl text-red-600 dark:text-red-400 font-medium hover:bg-red-50 dark:hover:bg-red-900/20 transition-all">+ Add Pain Point</button>
              </div>
            </div>

            {/* Solution Section */}
            <div className="space-y-6 bg-emerald-50/50 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-900/30">
              <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-400 flex items-center gap-2">The Solution</h3>
              <textarea
                value={formData.solution_description}
                onChange={(e) => setFormData({ ...formData, solution_description: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-emerald-200 dark:border-emerald-900/50 rounded-lg bg-white dark:bg-gray-900"
                placeholder="How did you solve it?"
              />
              <ImageUploader
                label="Solution Illustration"
                storagePath={`portfolio/${formData.id}/solution`}
                currentImageUrl={formData.solution_image}
                onUploadSuccess={(url) => setFormData({ ...formData, solution_image: url })}
                className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-dashed border-emerald-200"
              />

              <div className="space-y-4">
                <label className="font-semibold text-emerald-800 dark:text-emerald-400">Key Features</label>
                {formData.solution_cards.map((card, idx) => (
                  <div key={idx} className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-900/30 relative group">
                    <input
                      type="text"
                      value={card.title}
                      onChange={(e) => {
                        const newCards = [...formData.solution_cards];
                        newCards[idx].title = e.target.value;
                        setFormData({ ...formData, solution_cards: newCards });
                      }}
                      className="font-bold text-emerald-700 dark:text-emerald-400 w-full bg-transparent border-none p-0 focus:ring-0 mb-2"
                      placeholder="Feature Title"
                    />
                    <textarea
                      value={card.description}
                      onChange={(e) => {
                        const newCards = [...formData.solution_cards];
                        newCards[idx].description = e.target.value;
                        setFormData({ ...formData, solution_cards: newCards });
                      }}
                      rows={2}
                      className="w-full text-sm text-gray-600 dark:text-gray-300 bg-transparent border-none p-0 focus:ring-0 resize-none"
                      placeholder="Description..."
                    />
                    <button type="button" onClick={() => {
                      const newCards = formData.solution_cards.filter((_, i) => i !== idx);
                      setFormData({ ...formData, solution_cards: newCards });
                    }} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 text-red-400 hover:text-red-600"><X className="w-4 h-4" /></button>
                  </div>
                ))}
                <button type="button" onClick={() => setFormData({ ...formData, solution_cards: [...formData.solution_cards, { title: "", description: "" }] })} className="w-full py-2 border-2 border-dashed border-emerald-200 dark:border-emerald-900/50 rounded-xl text-emerald-600 dark:text-emerald-400 font-medium hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all">+ Add Feature</button>
              </div>
            </div>
          </div>
        )}

        {/* --- IMPACT TAB --- */}
        {activeTab === "impact" && (
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm space-y-8">
            <h3 className="text-xl font-bold">Project Impact & Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {formData.impact.map((item, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 relative group hover:shadow-md transition-all">
                  <div className="flex gap-4 mb-4">
                    <input
                      type="number"
                      value={item.value}
                      onChange={(e) => {
                        const newImpact = [...formData.impact];
                        newImpact[idx].value = parseFloat(e.target.value) || 0;
                        setFormData({ ...formData, impact: newImpact });
                      }}
                      className="w-24 text-4xl font-bold bg-transparent border-none p-0 focus:ring-0 text-indigo-600 dark:text-indigo-400"
                      placeholder="0"
                    />
                    <input
                      type="text"
                      value={item.unit}
                      onChange={(e) => {
                        const newImpact = [...formData.impact];
                        newImpact[idx].unit = e.target.value;
                        setFormData({ ...formData, impact: newImpact });
                      }}
                      className="w-16 text-xl font-medium bg-transparent border-none p-0 focus:ring-0 text-gray-400 mt-auto mb-1"
                      placeholder="%"
                    />
                  </div>
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => {
                      const newImpact = [...formData.impact];
                      newImpact[idx].title = e.target.value;
                      setFormData({ ...formData, impact: newImpact });
                    }}
                    className="w-full font-bold text-gray-900 dark:text-white bg-transparent border-none p-0 focus:ring-0 mb-1"
                    placeholder="Metric Title"
                  />
                  <textarea
                    value={item.description}
                    onChange={(e) => {
                      const newImpact = [...formData.impact];
                      newImpact[idx].description = e.target.value;
                      setFormData({ ...formData, impact: newImpact });
                    }}
                    rows={2}
                    className="w-full text-sm text-gray-500 dark:text-gray-400 bg-transparent border-none p-0 focus:ring-0 resize-none"
                    placeholder="Brief explanation..."
                  />

                  <button type="button" onClick={() => {
                    const newImpact = formData.impact.filter((_, i) => i !== idx);
                    setFormData({ ...formData, impact: newImpact });
                  }} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-2 bg-white dark:bg-gray-700 rounded-lg text-red-500 shadow-sm"><Trash2 className="w-4 h-4" /></button>
                </div>
              ))}

              <button type="button" onClick={() => setFormData({ ...formData, impact: [...formData.impact, { type: 'positive', value: 0, unit: '%', title: '', description: '' }] })} className="flex flex-col items-center justify-center p-6 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 transition-all gap-2 text-gray-500 hover:text-indigo-600">
                <Plus className="w-8 h-8" />
                <span className="font-medium">Add Metric</span>
              </button>
            </div>
          </div>
        )}

      </form>
    </div>
  )
}
