/**
 * Script to verify and fix problem_image and solution_image in Supabase
 */

import { config } from "dotenv"
import { resolve } from "path"
import { createClient } from "@supabase/supabase-js"
import { portfolioItems } from "../../lib/data"

// Load environment variables
config({ path: resolve(process.cwd(), ".env.local") })
config({ path: resolve(process.cwd(), ".env") })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing Supabase environment variables!")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function verifyAndFixImages() {
  console.log("🔍 Verifying portfolio images in Supabase...\n")

  // Get all portfolio items from Supabase
  const { data: supabaseItems, error: fetchError } = await supabase
    .from("portfolio_items")
    .select("id, title, problem_image, solution_image")

  if (fetchError) {
    console.error("❌ Error fetching portfolio items:", fetchError)
    return
  }

  if (!supabaseItems || supabaseItems.length === 0) {
    console.log("⚠️  No portfolio items found in Supabase")
    return
  }

  // Create a map of local data for quick lookup
  const localDataMap = new Map(
    portfolioItems.map((item) => [item.id, { problemImage: item.problemImage, solutionImage: item.solutionImage }])
  )

  let fixedCount = 0
  let missingCount = 0

  for (const item of supabaseItems) {
    const localData = localDataMap.get(item.id)
    const needsUpdate: any = {}

    // Check problem_image
    if (!item.problem_image && localData?.problemImage) {
      needsUpdate.problem_image = localData.problemImage
      console.log(`  🔧 ${item.title}: Missing problem_image, will add`)
      missingCount++
    }

    // Check solution_image
    if (!item.solution_image && localData?.solutionImage) {
      needsUpdate.solution_image = localData.solutionImage
      console.log(`  🔧 ${item.title}: Missing solution_image, will add`)
      missingCount++
    }

    // Update if needed
    if (Object.keys(needsUpdate).length > 0) {
      const { error: updateError } = await supabase
        .from("portfolio_items")
        .update(needsUpdate)
        .eq("id", item.id)

      if (updateError) {
        console.error(`  ❌ Error updating ${item.title}:`, updateError)
      } else {
        console.log(`  ✅ Fixed ${item.title}`)
        fixedCount++
      }
    } else {
      console.log(`  ✅ ${item.title}: Images OK`)
    }
  }

  console.log("\n" + "=".repeat(50))
  console.log(`📊 Summary:`)
  console.log(`  Items checked: ${supabaseItems.length}`)
  console.log(`  Items with missing images: ${missingCount}`)
  console.log(`  Items fixed: ${fixedCount}`)

  if (fixedCount > 0) {
    console.log("\n🎉 Images have been fixed!")
  } else {
    console.log("\n✅ All images are present!")
  }
}

verifyAndFixImages()


