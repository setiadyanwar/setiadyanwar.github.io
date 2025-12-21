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
export async function getPortfolioItems() {
  const supabase = getSupabaseClient()
  if (!supabase) {
    // Fallback to local data if Supabase is not configured
    const { portfolioItems } = await import("../data")
    return portfolioItems
  }

  const { data, error } = await supabase
    .from("portfolio_items")
    .select("*")
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


