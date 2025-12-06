import "dotenv/config"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing Supabase environment variables!")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkDuplicates(tableName: string) {
  try {
    console.log(`\n🔍 Checking duplicates in ${tableName}...`)

    // Fetch all records
    const { data: allRecords, error: fetchError } = await supabase
      .from(tableName)
      .select("*")
      .order("id", { ascending: true })

    if (fetchError) {
      console.error(`❌ Error fetching ${tableName}:`, fetchError)
      return { hasDuplicates: false, count: 0 }
    }

    if (!allRecords || allRecords.length === 0) {
      console.log(`✅ No records found in ${tableName}`)
      return { hasDuplicates: false, count: 0 }
    }

    console.log(`📊 Total records: ${allRecords.length}`)

    // Group by unique key (title, company, period)
    const seen = new Map<string, number[]>()
    const duplicates: Array<{ id: number; title: string; company: string; period: string }> = []

    allRecords.forEach((record) => {
      const key = `${(record.title || "").trim().toLowerCase()}-${(record.company || "").trim().toLowerCase()}-${(record.period || "").trim().toLowerCase()}`
      
      if (seen.has(key)) {
        // This is a duplicate
        const existingIds = seen.get(key)!
        existingIds.push(record.id)
        seen.set(key, existingIds)
        
        duplicates.push({
          id: record.id,
          title: record.title || "",
          company: record.company || "",
          period: record.period || "",
        })
      } else {
        seen.set(key, [record.id])
      }
    })

    if (duplicates.length === 0) {
      console.log(`✅ No duplicates found in ${tableName}`)
      return { hasDuplicates: false, count: 0 }
    }

    console.log(`⚠️  Found ${duplicates.length} duplicate(s):`)
    
    // Group duplicates by key for better display
    const duplicateGroups = new Map<string, number[]>()
    allRecords.forEach((record) => {
      const key = `${(record.title || "").trim().toLowerCase()}-${(record.company || "").trim().toLowerCase()}-${(record.period || "").trim().toLowerCase()}`
      const ids = seen.get(key)
      if (ids && ids.length > 1) {
        duplicateGroups.set(key, ids)
      }
    })

    duplicateGroups.forEach((ids, key) => {
      const [title, company, period] = key.split("-")
      console.log(`\n   📌 "${title}" at "${company}" (${period}):`)
      ids.forEach((id) => {
        const record = allRecords.find((r) => r.id === id)
        console.log(`      - ID ${id}${record?.created_at ? ` (created: ${new Date(record.created_at).toLocaleDateString()})` : ""}`)
      })
    })

    return { hasDuplicates: true, count: duplicates.length }
  } catch (error) {
    console.error(`❌ Unexpected error processing ${tableName}:`, error)
    return { hasDuplicates: false, count: 0 }
  }
}

async function main() {
  console.log("🔎 Starting duplicate check process...\n")

  const results = {
    education: await checkDuplicates("education_experiences"),
    organization: await checkDuplicates("organization_experiences"),
    work: await checkDuplicates("work_experiences"),
  }

  console.log("\n" + "=".repeat(60))
  console.log("📊 SUMMARY")
  console.log("=".repeat(60))
  
  const totalDuplicates = results.education.count + results.organization.count + results.work.count
  
  if (totalDuplicates === 0) {
    console.log("✅ No duplicates found in any table!")
    console.log("\n✨ Database is clean!")
  } else {
    console.log(`⚠️  Found duplicates:`)
    console.log(`   - Education: ${results.education.count} duplicate(s)`)
    console.log(`   - Organization: ${results.organization.count} duplicate(s)`)
    console.log(`   - Work: ${results.work.count} duplicate(s)`)
    console.log(`\n💡 Run 'npm run remove:duplicates' to clean them up`)
  }
}

main()

