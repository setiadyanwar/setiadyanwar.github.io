import { createClient, type SupabaseClient } from "@supabase/supabase-js"

// Server-side client (uses process.env)
const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

let cachedClient: SupabaseClient | null = null

export function getSupabaseServerClient(): SupabaseClient | null {
  if (cachedClient) {
    return cachedClient
  }

  if (!supabaseUrl || !supabaseKey) {
    return null
  }

  cachedClient = createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
    },
  })

  return cachedClient
}

// Client-side client (uses NEXT_PUBLIC_* env vars)
let cachedBrowserClient: SupabaseClient | null = null

export function getSupabaseBrowserClient(): SupabaseClient | null {
  if (typeof window === "undefined") {
    // Server-side, use server client
    return getSupabaseServerClient()
  }

  if (cachedBrowserClient) {
    return cachedBrowserClient
  }

  const browserUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const browserKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!browserUrl || !browserKey) {
    return null
  }

  cachedBrowserClient = createClient(browserUrl, browserKey, {
    auth: {
      persistSession: true,
    },
  })

  return cachedBrowserClient
}


