/**
 * Remove duplicate experience entries from database
 * Keeps only the entry with the lowest ID for each duplicate group
 */

import { config } from "dotenv"
import { resolve } from "path"
import { createClient } from "@supabase/supabase-js"

config({ path: resolve(process.cwd(), ".env.local") })
config({ path: resolve(process.cwd(), ".env") })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

async function removeDuplicates() {
    console.log("🔍 Finding and removing duplicate experiences...\n")

    // Fetch all work experiences
    const { data: workExp, error: fetchError } = await supabase
        .from("work_experiences")
        .select("*")
        .order("id", { ascending: true })

    if (fetchError) {
        console.error("❌ Error fetching work experiences:", fetchError)
        return
    }

    console.log(`📊 Total entries found: ${workExp?.length || 0}`)

    // Group by title + company to find duplicates (ignore period)
    const groups = new Map<string, any[]>()
    workExp?.forEach((exp) => {
        const key = `${exp.title}|${exp.company}`
        if (!groups.has(key)) {
            groups.set(key, [])
        }
        groups.get(key)!.push(exp)
    })

    console.log(`📋 Unique experiences: ${groups.size}`)

    // Find duplicates and IDs to delete
    const idsToDelete: number[] = []
    let duplicateCount = 0

    groups.forEach((exps, key) => {
        if (exps.length > 1) {
            duplicateCount++
            console.log(`\n⚠️  Found ${exps.length} duplicates for: ${key}`)

            // Keep the first one (lowest ID), delete the rest
            const [keep, ...remove] = exps
            console.log(`   ✅ Keeping ID: ${keep.id}`)

            remove.forEach((exp) => {
                console.log(`   ❌ Will delete ID: ${exp.id}`)
                idsToDelete.push(exp.id)
            })
        }
    })

    if (idsToDelete.length === 0) {
        console.log("\n✅ No duplicates found!")
        return
    }

    console.log(`\n📊 Summary:`)
    console.log(`   Total entries: ${workExp?.length}`)
    console.log(`   Unique experiences: ${groups.size}`)
    console.log(`   Duplicate groups: ${duplicateCount}`)
    console.log(`   IDs to delete: ${idsToDelete.length}`)

    console.log(`\n⚠️  About to delete ${idsToDelete.length} duplicate entries...`)
    console.log("Press Ctrl+C to cancel, or wait 5 seconds to proceed...")

    await new Promise((resolve) => setTimeout(resolve, 5000))

    // Delete duplicates
    console.log("\n🗑️  Deleting duplicates...")

    const { error: deleteError } = await supabase
        .from("work_experiences")
        .delete()
        .in("id", idsToDelete)

    if (deleteError) {
        console.error("❌ Error deleting duplicates:", deleteError)
        return
    }

    console.log(`\n✅ Successfully deleted ${idsToDelete.length} duplicate entries!`)

    // Verify
    const { count: finalCount } = await supabase
        .from("work_experiences")
        .select("*", { count: "exact", head: true })

    console.log(`\n📊 Final count: ${finalCount} work experiences`)
    console.log("✅ Cleanup complete!")
}

removeDuplicates()
