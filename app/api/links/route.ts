import { NextRequest, NextResponse } from "next/server"
import { LinkItem } from "@/lib/links-data"
import { supabaseServerClient } from "@/lib/supabase-client"

const LINKS_TABLE = "links"

const mapFromDb = (row: any): LinkItem => ({
  id: row.id,
  title: row.title,
  url: row.url,
  icon: row.icon,
  section: row.section,
  sectionOrder: row.section_order ?? 0,
  linkOrder: row.link_order ?? 0,
  preview: {
    text: row.preview_text || "",
    domain: row.preview_domain || "",
    image: row.preview_image || "",
  },
})

const mapToDb = (link: LinkItem) => ({
  id: link.id,
  title: link.title,
  url: link.url,
  icon: link.icon,
  section: link.section,
  section_order: link.sectionOrder ?? 0,
  link_order: link.linkOrder ?? 0,
  preview_text: link.preview?.text || "",
  preview_domain: link.preview?.domain || "",
  preview_image: link.preview?.image || "",
})

// GET - Read all links
export async function GET() {
  try {
    const { data, error } = await supabaseServerClient
      .from(LINKS_TABLE)
      .select("*")
      .order("section_order", { ascending: true })
      .order("link_order", { ascending: true })

    if (error) {
      throw error
    }

    return NextResponse.json((data || []).map(mapFromDb))
  } catch (error) {
    console.error("Error reading links:", error)
    return NextResponse.json({ error: "Failed to read links" }, { status: 500 })
  }
}

// POST - Create new link
export async function POST(request: NextRequest) {
  try {
    const newLink: LinkItem = await request.json()

    if (!newLink.id || !newLink.title || !newLink.url) {
      return NextResponse.json(
        { error: "Missing required fields: id, title, url" },
        { status: 400 }
      )
    }

    const { error } = await supabaseServerClient.from(LINKS_TABLE).insert(mapToDb(newLink))

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({ error: "Link with this ID already exists" }, { status: 400 })
      }
      throw error
    }

    return NextResponse.json({ success: true, link: newLink })
  } catch (error) {
    console.error("Error creating link:", error)
    return NextResponse.json({ error: "Failed to create link" }, { status: 500 })
  }
}

// PUT - Update existing link
export async function PUT(request: NextRequest) {
  try {
    const updatedLink: LinkItem = await request.json()

    if (!updatedLink.id) {
      return NextResponse.json({ error: "Link ID is required" }, { status: 400 })
    }

    const { error } = await supabaseServerClient
      .from(LINKS_TABLE)
      .update(mapToDb(updatedLink))
      .eq("id", updatedLink.id)

    if (error) {
      throw error
    }

    return NextResponse.json({ success: true, link: updatedLink })
  } catch (error) {
    console.error("Error updating link:", error)
    return NextResponse.json({ error: "Failed to update link" }, { status: 500 })
  }
}

// DELETE - Delete link
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "Link ID is required" }, { status: 400 })
    }

    const { error } = await supabaseServerClient.from(LINKS_TABLE).delete().eq("id", id)

    if (error) {
      throw error
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting link:", error)
    return NextResponse.json({ error: "Failed to delete link" }, { status: 500 })
  }
}

