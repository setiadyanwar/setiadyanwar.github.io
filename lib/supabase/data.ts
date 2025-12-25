import { getSupabaseServerClient, getSupabaseBrowserClient } from "./client"

// Helper to get the appropriate client (server or browser)
function getSupabaseClient() {
  // Check if we're in browser environment
  if (typeof window !== "undefined") {
    return getSupabaseBrowserClient()
  }
  return getSupabaseServerClient()
}

// Portfolio Items
export async function getPortfolioItems(includeHidden: boolean = false) {
  const supabase = getSupabaseClient()
  if (!supabase) {
    // Fallback to local data if Supabase is not configured
    const { portfolioItems } = await import("../data")
    return portfolioItems
  }

  let query = supabase
    .from("portfolio_items")
    .select("id, title, subtitle, category, image, technologies, date, created_at, display_order, status")

  if (!includeHidden) {
    query = query.eq("status", "published") // Only show published items for public
  }

  const { data, error } = await query
    .order("display_order", { ascending: true })
    .order("created_at", { ascending: false })

  if (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error fetching portfolio items:", error)
    }
    // Fallback to local data
    const { portfolioItems } = await import("../data")
    return portfolioItems
  }


  return data || []
}

export async function getPortfolioItemById(id: string) {
  const supabase = getSupabaseClient()
  if (!supabase) {
    const { portfolioItems } = await import("../data")
    return portfolioItems.find((item) => item.id === id) || null
  }

  const { data, error } = await supabase
    .from("portfolio_items")
    .select("*")
    .eq("id", id)
    .order("updated_at", { ascending: false })
    .single()

  if (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error fetching portfolio item:", error)
    }
    const { portfolioItems } = await import("../data")
    return portfolioItems.find((item) => item.id === id) || null
  }

  return data
}

// Work Experiences
export async function getWorkExperiences() {
  const supabase = getSupabaseServerClient()
  if (!supabase) {
    const { workExperiences } = await import("../data")
    return workExperiences
  }

  const { data, error } = await supabase
    .from("work_experiences")
    .select("*")
    .order("display_order", { ascending: true })

  if (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error fetching work experiences:", error)
    }
    const { workExperiences } = await import("../data")
    return workExperiences
  }

  return data || []
}

// Education Experiences
export async function getEducationExperiences() {
  const supabase = getSupabaseServerClient()
  if (!supabase) {
    const { educationExperiences } = await import("../data")
    return educationExperiences
  }

  const { data, error } = await supabase
    .from("education_experiences")
    .select("*")
    .order("display_order", { ascending: true })

  if (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error fetching education experiences:", error)
    }
    const { educationExperiences } = await import("../data")
    return educationExperiences
  }

  return data || []
}

// Organization Experiences
export async function getOrganizationExperiences() {
  const supabase = getSupabaseServerClient()
  if (!supabase) {
    const { organizationExperiences } = await import("../data")
    return organizationExperiences
  }

  const { data, error } = await supabase
    .from("organization_experiences")
    .select("*")
    .order("display_order", { ascending: true })

  if (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error fetching organization experiences:", error)
    }
    const { organizationExperiences } = await import("../data")
    return organizationExperiences
  }

  return data || []
}

// Technologies
export async function getTechnologies() {
  const supabase = getSupabaseServerClient()
  if (!supabase) {
    const { technologies } = await import("../data")
    return technologies
  }

  const { data, error } = await supabase
    .from("technologies")
    .select("*")
    .order("name", { ascending: true })

  if (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error fetching technologies:", error)
    }
    const { technologies } = await import("../data")
    return technologies
  }

  return data || []
}

// Analytics Functions
export async function getVisitorAnalytics(daysBack: number = 7) {
  const supabase = getSupabaseServerClient()
  if (!supabase) {
    return []
  }

  try {
    const { data, error } = await supabase.rpc('get_analytics_summary', {
      days_back: daysBack
    })

    if (error) {
      if (process.env.NODE_ENV !== "production") {
        console.error('Error fetching analytics:', error)
      }
      return []
    }

    return data || []
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error('Analytics fetch error:', error)
    }
    return []
  }
}

export async function getTopPages(limit: number = 10) {
  const supabase = getSupabaseServerClient()
  if (!supabase) {
    return []
  }

  try {
    const { data, error } = await supabase
      .from('analytics')
      .select('path, visits')
      .gte('date', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0])
      .order('visits', { ascending: false })
      .limit(limit)

    if (error) {
      if (process.env.NODE_ENV !== "production") {
        console.error('Error fetching top pages:', error)
      }
      return []
    }

    return data || []
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error('Top pages fetch error:', error)
    }
    return []
  }
}
