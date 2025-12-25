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
  // Use browser client if in browser, server client otherwise
  const supabase = typeof window !== 'undefined'
    ? getSupabaseBrowserClient()
    : getSupabaseServerClient()

  if (!supabase) {
    return []
  }

  try {
    // Try RPC function first
    const { data, error } = await supabase.rpc('get_analytics_summary', {
      days_back: daysBack
    })

    if (error) {
      console.warn('RPC error, falling back to direct query:', error.message)

      // Fallback: Direct query if RPC fails
      const startDate = new Date()
      startDate.setDate(startDate.getDate() - daysBack)

      const { data: rawData, error: queryError } = await supabase
        .from('analytics')
        .select('date, visits, path')
        .gte('date', startDate.toISOString().split('T')[0])
        .order('date', { ascending: true })

      if (queryError) {
        console.error('Direct query also failed:', queryError)
        return []
      }

      // Aggregate manually
      const aggregated = rawData?.reduce((acc: any[], row: any) => {
        const existing = acc.find(item => item.date === row.date)
        if (existing) {
          existing.total_visits += row.visits
          existing.unique_paths = new Set([...existing.unique_paths, row.path]).size
        } else {
          acc.push({
            date: row.date,
            total_visits: row.visits,
            unique_paths: 1
          })
        }
        return acc
      }, []) || []

      return aggregated
    }

    return data || []
  } catch (error) {
    console.error('Analytics fetch error:', error)
    return []
  }
}

export async function getTopPages(limit: number = 10) {
  // Use browser client if in browser, server client otherwise
  const supabase = typeof window !== 'undefined'
    ? getSupabaseBrowserClient()
    : getSupabaseServerClient()

  if (!supabase) {
    return []
  }

  try {
    // Get all analytics data (remove date filter to avoid timezone issues)
    const { data: rawData, error } = await supabase
      .from('analytics')
      .select('path, visits')

    if (error) {
      console.error('Error fetching top pages:', error)
      return []
    }

    if (!rawData || rawData.length === 0) {
      console.log('📄 No top pages data found')
      return []
    }

    console.log('✅ Raw data fetched:', rawData.length, 'rows')

    // Aggregate visits per path manually
    const pathMap = new Map<string, number>()

    rawData.forEach((row: any) => {
      const currentVisits = pathMap.get(row.path) || 0
      pathMap.set(row.path, currentVisits + (Number(row.visits) || 0))
    })

    // Convert to array and sort
    const aggregated = Array.from(pathMap.entries())
      .map(([path, visits]) => ({ path, visits }))
      .sort((a, b) => b.visits - a.visits)
      .slice(0, limit)

    console.log('🎯 Top Pages Aggregated:', aggregated)
    return aggregated
  } catch (error) {
    console.error('Top pages fetch error:', error)
    return []
  }
}

export async function getRecentVisitors(limit: number = 20) {
  const supabase = typeof window !== 'undefined'
    ? getSupabaseBrowserClient()
    : getSupabaseServerClient()

  if (!supabase) return []

  try {
    const { data, error } = await supabase.rpc('get_recent_visitors', {
      limit_count: limit
    })

    if (error) {
      console.warn('RPC error for recent visitors, falling back to direct query:', error.message)
      const { data: rawData, error: queryError } = await supabase
        .from('visitor_logs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(limit)

      if (queryError) {
        console.error('Error fetching recent visitors:', queryError)
        return []
      }
      return rawData || []
    }

    return data || []
  } catch (error) {
    console.error('Recent visitors fetch error:', error)
    return []
  }
}
