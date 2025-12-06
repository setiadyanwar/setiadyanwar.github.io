import { NextRequest, NextResponse } from "next/server"
import { getSupabaseServerClient } from "@/lib/supabase/client"

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = getSupabaseServerClient()
    if (!supabase) {
      return NextResponse.json({ error: "Supabase client not available" }, { status: 500 })
    }

    const { data, error } = await supabase
      .from("education_experiences")
      .select("*")
      .eq("id", params.id)
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    if (!data) {
      return NextResponse.json({ error: "Education experience not found" }, { status: 404 })
    }

    return NextResponse.json({ data })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = getSupabaseServerClient()
    if (!supabase) {
      return NextResponse.json({ error: "Supabase client not available" }, { status: 500 })
    }

    const body = await request.json()

    const { data, error } = await supabase
      .from("education_experiences")
      .update({
        title: body.title,
        company: body.company,
        logo: body.logo || null,
        period: body.period,
        description: body.description || null,
        skills: body.skills || [],
        details: body.details || [],
        display_order: body.display_order || 0,
        updated_at: new Date().toISOString(),
      })
      .eq("id", params.id)
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ data })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = getSupabaseServerClient()
    if (!supabase) {
      return NextResponse.json({ error: "Supabase client not available" }, { status: 500 })
    }

    const { error } = await supabase
      .from("education_experiences")
      .delete()
      .eq("id", params.id)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

