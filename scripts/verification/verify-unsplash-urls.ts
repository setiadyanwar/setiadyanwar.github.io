import { createClient } from "@supabase/supabase-js"
import { config } from "dotenv"
import { resolve } from "path"

config({ path: resolve(process.cwd(), ".env") })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing Supabase environment variables!")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

// Valid Unsplash URLs that work - tested and confirmed
const validUnsplashUrls = {
  problem: [
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  ],
  solution: [
    "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  ],
}

// Test if URL is accessible
async function testImageUrl(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: "HEAD", signal: AbortSignal.timeout(5000) })
    return response.ok
  } catch (error) {
    return false
  }
}

// Get a random valid URL from the list
function getRandomValidUrl(type: "problem" | "solution"): string {
  const urls = validUnsplashUrls[type]
  return urls[Math.floor(Math.random() * urls.length)]
}

async function verifyAndFixUnsplashUrls() {
  console.log("🔍 Verifying Unsplash URLs in Supabase...\n")

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

  let fixedCount = 0
  let brokenCount = 0

  for (const item of supabaseItems) {
    const needsUpdate: any = {}
    let hasChanges = false

    // Check problem_image if it's an Unsplash URL
    if (item.problem_image && item.problem_image.includes("unsplash.com")) {
      const isValid = await testImageUrl(item.problem_image)
      if (!isValid) {
        console.log(`  ❌ ${item.title}: Broken problem_image URL`)
        console.log(`     Old: ${item.problem_image}`)
        needsUpdate.problem_image = getRandomValidUrl("problem")
        console.log(`     New: ${needsUpdate.problem_image}`)
        brokenCount++
        hasChanges = true
      }
    }

    // Check solution_image if it's an Unsplash URL
    if (item.solution_image && item.solution_image.includes("unsplash.com")) {
      const isValid = await testImageUrl(item.solution_image)
      if (!isValid) {
        console.log(`  ❌ ${item.title}: Broken solution_image URL`)
        console.log(`     Old: ${item.solution_image}`)
        needsUpdate.solution_image = getRandomValidUrl("solution")
        console.log(`     New: ${needsUpdate.solution_image}`)
        brokenCount++
        hasChanges = true
      }
    }

    // Update if needed
    if (hasChanges) {
      const { error: updateError } = await supabase
        .from("portfolio_items")
        .update(needsUpdate)
        .eq("id", item.id)

      if (updateError) {
        console.error(`  ❌ Error updating ${item.title}:`, updateError)
      } else {
        console.log(`  ✅ Fixed ${item.title}\n`)
        fixedCount++
      }
    } else {
      console.log(`  ✅ ${item.title}: All URLs OK`)
    }
  }

  console.log("\n" + "=".repeat(50))
  console.log(`📊 Summary:`)
  console.log(`  Items checked: ${supabaseItems.length}`)
  console.log(`  Broken URLs found: ${brokenCount}`)
  console.log(`  URLs fixed: ${fixedCount}`)

  if (fixedCount > 0) {
    console.log("\n🎉 Broken Unsplash URLs have been fixed!")
  } else {
    console.log("\n✅ All Unsplash URLs are valid!")
  }
}

verifyAndFixUnsplashUrls()

