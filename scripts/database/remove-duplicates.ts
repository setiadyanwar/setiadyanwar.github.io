import "dotenv/config"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing Supabase environment variables!")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function removeDuplicates(tableName: string) {
  try {
    console.log(`\n🔍 Checking duplicates in ${tableName}...`)

    // Fetch all records
    const { data: allRecords, error: fetchError } = await supabase
      .from(tableName)
      .select("*")
      .order("id", { ascending: true })

    if (fetchError) {
      console.error(`❌ Error fetching ${tableName}:`, fetchError)
      return
    }

    if (!allRecords || allRecords.length === 0) {
      console.log(`✅ No records found in ${tableName}`)
      return
    }

    console.log(`📊 Total records: ${allRecords.length}`)

    // Group by unique key (title, company, period)
    const seen = new Map<string, number[]>()
    const duplicates: number[] = []

    allRecords.forEach((record) => {
      const key = `${(record.title || "").trim().toLowerCase()}-${(record.company || "").trim().toLowerCase()}-${(record.period || "").trim().toLowerCase()}`
      
      if (seen.has(key)) {
        // This is a duplicate - keep the one with lower ID (older)
        const existingId = seen.get(key)!
        if (record.id > existingId) {
          duplicates.push(record.id)
        } else {
          duplicates.push(existingId)
          seen.set(key, record.id)
        }
      } else {
        seen.set(key, record.id)
      }
    })

    if (duplicates.length === 0) {
      console.log(`✅ No duplicates found in ${tableName}`)
      return
    }

    console.log(`⚠️  Found ${duplicates.length} duplicate(s) to remove:`)
    duplicates.forEach((id) => {
      const record = allRecords.find((r) => r.id === id)
      if (record) {
        console.log(`   - ID ${id}: ${record.title} at ${record.company} (${record.period})`)
      }
    })

    // Delete duplicates
    const { error: deleteError } = await supabase
      .from(tableName)
      .delete()
      .in("id", duplicates)

    if (deleteError) {
      console.error(`❌ Error deleting duplicates from ${tableName}:`, deleteError)
      return
    }

    console.log(`✅ Successfully removed ${duplicates.length} duplicate(s) from ${tableName}`)
  } catch (error) {
    console.error(`❌ Unexpected error processing ${tableName}:`, error)
  }
}

async function main() {
  console.log("🧹 Starting duplicate removal process...\n")

  await removeDuplicates("education_experiences")
  await removeDuplicates("organization_experiences")
  await removeDuplicates("work_experiences")

  console.log("\n✨ Duplicate removal process completed!")
}

main()

