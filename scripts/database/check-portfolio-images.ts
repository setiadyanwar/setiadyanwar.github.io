/**
 * Check portfolio image URLs in database
 */

import { config } from "dotenv"
import { resolve } from "path"
import { createClient } from "@supabase/supabase-js"

config({ path: resolve(process.cwd(), ".env.local") })
config({ path: resolve(process.cwd(), ".env") })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkPortfolioImages() {
    const portfolioId = process.argv[2] || "ess"

    console.log(`🔍 Checking images for portfolio: ${portfolioId}\n`)

    const { data, error } = await supabase
        .from("portfolio_items")
        .select("id, title, image, problem_image, solution_image")
        .eq("id", portfolioId)
        .single()

    if (error) {
        console.error("❌ Error:", error)
        return
    }

    if (!data) {
        console.log("❌ Portfolio not found!")
        return
    }

    console.log("📊 Portfolio Image URLs:\n")
    console.log(`Title: ${data.title}`)
    console.log(`\n🖼️  Hero Image:`)
    console.log(`   ${data.image || "(empty)"}`)
    console.log(`\n❗ Problem Image:`)
    console.log(`   ${data.problem_image || "(empty)"}`)
    console.log(`\n✅ Solution Image:`)
    console.log(`   ${data.solution_image || "(empty)"}`)

    // Check if URLs are Supabase URLs
    const isSupabaseUrl = (url: string) => url?.includes("supabase.co/storage")

    console.log(`\n🔍 Analysis:`)
    console.log(`   Hero: ${data.image ? (isSupabaseUrl(data.image) ? "✅ Supabase" : "⚠️  External") : "❌ Empty"}`)
    console.log(`   Problem: ${data.problem_image ? (isSupabaseUrl(data.problem_image) ? "✅ Supabase" : "⚠️  External") : "❌ Empty"}`)
    console.log(`   Solution: ${data.solution_image ? (isSupabaseUrl(data.solution_image) ? "✅ Supabase" : "⚠️  External") : "❌ Empty"}`)
}

checkPortfolioImages()
