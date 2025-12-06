"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Save, X, Plus, Trash2 } from "lucide-react"
import Link from "next/link"

interface ExperienceFormData {
  title: string
  company: string
  logo: string
  period: string
  description: string
  skills: string[]
  details: string[]
  display_order: number
}

const defaultFormData: ExperienceFormData = {
  title: "",
  company: "",
  logo: "",
  period: "",
  description: "",
  skills: [],
  details: [],
  display_order: 0,
}

export default function ExperienceForm({ 
  experienceId, 
  type = "work" 
}: { 
  experienceId?: number
  type?: "work" | "education" | "organization"
}) {
  const router = useRouter()
  const [formData, setFormData] = useState<ExperienceFormData>(defaultFormData)
  const [loading, setLoading] = useState(!!experienceId)
  const [saving, setSaving] = useState(false)

  const typeLabels = {
    work: "Work Experience",
    education: "Education",
    organization: "Organization",
  }

  const apiPath = `/api/admin/${type === "work" ? "experience" : type === "education" ? "education" : "organization"}`

  useEffect(() => {
    if (experienceId) {
      fetchExperience()
    }
  }, [experienceId])

  async function fetchExperience() {
    try {
      const response = await fetch(`${apiPath}/${experienceId}`)
      if (!response.ok) throw new Error("Failed to fetch experience")
      const { data } = await response.json()
      setFormData({
        title: data.title || "",
        company: data.company || "",
        logo: data.logo || "",
        period: data.period || "",
        description: data.description || "",
        skills: data.skills || [],
        details: data.details || [],
        display_order: data.display_order || 0,
      })
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.error("Error fetching experience:", error)
      }
      alert("Failed to load experience")
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)

    try {
      const url = experienceId ? `${apiPath}/${experienceId}` : apiPath
      const method = experienceId ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Failed to save experience")
      }

      router.push(`/admin/${type === "work" ? "experience" : type}`)
    } catch (error: any) {
      alert(error.message || "Failed to save experience")
    } finally {
      setSaving(false)
    }
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
            {experienceId ? `Edit ${typeLabels[type]}` : `New ${typeLabels[type]}`}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {experienceId ? "Update experience details" : "Create a new experience entry"}
          </p>
        </div>
        <Link
          href={`/admin/${type === "work" ? "experience" : type}`}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          <X className="w-4 h-4" />
          Cancel
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
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
                placeholder="e.g., Frontend Developer"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Company/Institution <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g., PT SIGMA CIPTA CARAKA"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Logo URL
              </label>
              <input
                type="text"
                value={formData.logo}
                onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="/experience/company-logo.png"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Period <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.period}
                onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g., Jan 2024 - Present"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              placeholder="Brief description of the experience..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Skills
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({
                        ...formData,
                        skills: formData.skills.filter((_, i) => i !== idx),
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
                placeholder="Add skill"
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    const value = e.currentTarget.value.trim()
                    if (value && !formData.skills.includes(value)) {
                      setFormData({
                        ...formData,
                        skills: [...formData.skills, value],
                      })
                      e.currentTarget.value = ""
                    }
                  }
                }}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Details (Key Achievements)
            </label>
            <div className="space-y-2 mb-2">
              {formData.details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={detail}
                    onChange={(e) => {
                      const newDetails = [...formData.details]
                      newDetails[idx] = e.target.value
                      setFormData({ ...formData, details: newDetails })
                    }}
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Achievement or detail"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({
                        ...formData,
                        details: formData.details.filter((_, i) => i !== idx),
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
                  details: [...formData.details, ""],
                })
              }}
              className="flex items-center gap-2 px-4 py-2 text-sm text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg"
            >
              <Plus className="w-4 h-4" />
              Add Detail
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Display Order
            </label>
            <input
              type="number"
              value={formData.display_order}
              onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              min="0"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Lower numbers appear first. Leave 0 to add at the end.
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Link
            href={`/admin/${type === "work" ? "experience" : type}`}
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
            {saving ? "Saving..." : experienceId ? "Update Experience" : "Create Experience"}
          </button>
        </div>
      </form>
    </div>
  )
}

