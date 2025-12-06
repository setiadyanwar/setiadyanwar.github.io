import { NextRequest, NextResponse } from "next/server"
import { getSupabaseServerClient } from "@/lib/supabase/client"

// GET - Fetch all work experiences
export async function GET() {
  try {
    const supabase = getSupabaseServerClient()
    if (!supabase) {
      return NextResponse.json({ error: "Supabase client not available" }, { status: 500 })
    }

    const { data, error } = await supabase
      .from("work_experiences")
      .select("*")
      .order("display_order", { ascending: true })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ data })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// POST - Create new work experience
export async function POST(request: NextRequest) {
  try {
    const supabase = getSupabaseServerClient()
    if (!supabase) {
      return NextResponse.json({ error: "Supabase client not available" }, { status: 500 })
    }

    const body = await request.json()

    // Validate required fields
    if (!body.title || !body.company || !body.period) {
      return NextResponse.json(
        { error: "Title, company, and period are required" },
        { status: 400 }
      )
    }

    // Get max display_order
    const { data: maxOrder } = await supabase
      .from("work_experiences")
      .select("display_order")
      .order("display_order", { ascending: false })
      .limit(1)
      .single()

    const { data, error } = await supabase
      .from("work_experiences")
      .insert({
        title: body.title,
        company: body.company,
        logo: body.logo || null,
        period: body.period,
        description: body.description || null,
        skills: body.skills || [],
        details: body.details || [],
        display_order: (maxOrder?.display_order || 0) + 1,
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

