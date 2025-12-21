import { NextRequest, NextResponse } from "next/server"
import { getSupabaseServerClient } from "@/lib/supabase/client"

// GET - Fetch all portfolio items
export async function GET() {
  try {
    const supabase = getSupabaseServerClient()
    if (!supabase) {
      return NextResponse.json({ error: "Supabase client not available" }, { status: 500 })
    }

    const { data, error } = await supabase
      .from("portfolio_items")
      .select("*")
      .order("display_order", { ascending: true })
      .order("created_at", { ascending: false })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ data })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// POST - Create new portfolio item
export async function POST(request: NextRequest) {
  try {
    const supabase = getSupabaseServerClient()
    if (!supabase) {
      return NextResponse.json({ error: "Supabase client not available" }, { status: 500 })
    }

    const body = await request.json()

    // Validate required fields
    if (!body.title || !body.category) {
      return NextResponse.json(
        { error: "Title and category are required" },
        { status: 400 }
      )
    }

    // Generate ID from title if not provided
    const id = body.id || body.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")

    const { data, error } = await supabase
      .from("portfolio_items")
      .insert({
        id,
        title: body.title,
        date: body.date || null,
        subtitle: body.subtitle || null,
        category: body.category,
        image: body.image || null,
        additional_images: body.additional_images || [],
        technologies: body.technologies || [],
        description: body.description || null,
        role: body.role || null,
        responsibilities: body.responsibilities || [],
        challenges: body.challenges || null,
        demo_url: body.demo_url || null,
        repo_url: body.repo_url || null,
        problem_image: body.problem_image || null,
        solution_image: body.solution_image || null,
        problem_description: body.problem_description || null,
        problem_cards: body.problem_cards || [],
        solution_description: body.solution_description || null,
        solution_cards: body.solution_cards || [],
        status: body.status || "draft",
        impact: body.impact || [],
        outcomes: body.outcomes || [],
        next_steps: body.next_steps || null,
        project_steps: body.project_steps || [],
        overview_heading: body.overview_heading || null,
        process_heading: body.process_heading || null,
        challenges_heading: body.challenges_heading || null,
        problem_heading: body.problem_heading || null,
        solution_heading: body.solution_heading || null,
        outcomes_heading: body.outcomes_heading || null,
        updated_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ data }, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

