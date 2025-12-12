/**
 * Script to update portfolio items order in Supabase
 * This will set display_order based on the order in lib/data.ts
 * 
 * Usage: npm run update:portfolio-order
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
  console.error("Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function updatePortfolioOrder() {
  console.log("🔄 Updating portfolio items order...\n")
  console.log("📋 Note: Make sure display_order column exists in Supabase!")
  console.log("   If not, run this SQL in Supabase SQL Editor first:\n")
  console.log("   ALTER TABLE portfolio_items ADD COLUMN IF NOT EXISTS display_order INTEGER DEFAULT 0;")
  console.log("   CREATE INDEX IF NOT EXISTS idx_portfolio_items_display_order ON portfolio_items(display_order);\n")

  // Update display_order: ESS should be first (order: 0)
  // Other items follow their order in the array, starting from 1
  let updatedCount = 0
  let errorCount = 0
  let columnExists = true

  // First, try to set ESS to order 0 to test if column exists
  const { error: testError } = await supabase
    .from("portfolio_items")
    .update({ display_order: 0 })
    .eq("id", "ess")
    .select()

  if (testError && testError.message.includes("display_order")) {
    console.error("❌ Column 'display_order' does not exist in database!")
    console.error("   Please run the SQL commands shown above in Supabase SQL Editor first.\n")
    columnExists = false
  }

  if (!columnExists) {
    console.log("⚠️  Skipping order update. Please add the column first.")
    return
  }

  // Set ESS to order 0 (first position)
  const { error: essError } = await supabase
    .from("portfolio_items")
    .update({ display_order: 0 })
    .eq("id", "ess")

  if (essError) {
    console.error(`❌ Error updating ESS:`, essError.message)
    errorCount++
  } else {
    console.log(`✅ Updated order for: Employee Self Service Portal (order: 0 - FIRST)`)
    updatedCount++
  }

  // Update other items: set order based on their position in array
  // ESS is at index, so items before ESS get order 1, 2, 3... and items after get order based on their index
  const essIndex = portfolioItems.findIndex(item => item.id === "ess")
  
  for (let i = 0; i < portfolioItems.length; i++) {
    const item = portfolioItems[i]
    
    // Skip ESS as we already set it to 0
    if (item.id === "ess") {
      continue
    }

    // Calculate display_order: 
    // - Items before ESS position get order 1, 2, 3...
    // - Items after ESS position get order based on their index (but skip ESS)
    let displayOrder: number
    if (essIndex === -1) {
      // ESS not found, use index as order
      displayOrder = i
    } else if (i < essIndex) {
      // Item is before ESS, order starts from 1
      displayOrder = i + 1
    } else {
      // Item is after ESS, order is index (ESS already at 0)
      displayOrder = i
    }

    const { error } = await supabase
      .from("portfolio_items")
      .update({ display_order: displayOrder })
      .eq("id", item.id)

    if (error) {
      console.error(`❌ Error updating ${item.id}:`, error.message)
      errorCount++
    } else {
      console.log(`✅ Updated order for: ${item.title} (order: ${displayOrder})`)
      updatedCount++
    }
  }

  console.log("\n" + "=".repeat(50))
  console.log(`📊 Summary:`)
  console.log(`  Items processed: ${portfolioItems.length}`)
  console.log(`  Successfully updated: ${updatedCount}`)
  console.log(`  Errors: ${errorCount}`)

  if (updatedCount > 0) {
    console.log("\n🎉 Portfolio order has been updated!")
    console.log("💡 Note: You may need to add display_order column manually in Supabase SQL editor if it doesn't exist:")
    console.log("   ALTER TABLE portfolio_items ADD COLUMN IF NOT EXISTS display_order INTEGER DEFAULT 0;")
    console.log("   CREATE INDEX IF NOT EXISTS idx_portfolio_items_display_order ON portfolio_items(display_order);")
  }
}

updatePortfolioOrder()

