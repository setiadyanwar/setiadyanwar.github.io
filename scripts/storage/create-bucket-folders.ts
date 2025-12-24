/**
 * Script to automatically create folder structure in Supabase Storage
 * 
 * Usage:
 * 1. Make sure your .env.local has NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY
 * 2. Run: npm run storage:create-folders
 * 
 * This will create all necessary folders in the portfolio-images bucket
 */

import { config } from "dotenv"
import { resolve } from "path"
import { createClient } from "@supabase/supabase-js"

// Load environment variables
config({ path: resolve(process.cwd(), ".env.local") })
config({ path: resolve(process.cwd(), ".env") })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    console.error("❌ Missing Supabase environment variables!")
    console.error("Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY")
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

// Bucket name
const BUCKET_NAME = "portfolio-images"

// Folder structure to create
const FOLDERS = [
    // Portfolio project folders (24 projects)
    "portfolio/kreavoks",              // Kreavoks E-learning & Agency
    "portfolio/nobarin",               // Nobarin Movie Streaming
    "portfolio/upala",                 // Upala Company Profile & CRM
    "portfolio/freezemart",            // Freezemart E-commerce
    "portfolio/studylens",             // Studylens AI Learning
    "portfolio/nusoundtara",           // Nusoundtara Ticket Booking
    "portfolio/nexaid",                // NexAid
    "portfolio/ess",                   // ESS Telkomsigma
    "portfolio/butchery",              // Butchery
    "portfolio/ecotainment",           // Ecotainment
    "portfolio/skilpath",              // Skilpath
    "portfolio/skillify",              // Skillify
    "portfolio/gobojongsoang",         // Gobojongsoang
    "portfolio/rescuisine",            // Rescuisine
    "portfolio/transmate",             // Transmate
    "portfolio/hotelid",               // HotelID
    "portfolio/swiftcare",             // Swiftcare
    "portfolio/agridation",            // Agridation
    "portfolio/pembimbingid",          // PembimbingID
    "portfolio/redesignipb",           // Redesign IPB
    "portfolio/bemkmipb",              // BEM KM IPB
    "portfolio/uvan",                  // Uvan
    "portfolio/famiapp",               // FamiApp
    "portfolio/wingspos",              // WingsPOS

    // Category folders
    "hero",
    "experience",
    "activities",
    "certificates",
    "temp",
]

/**
 * Create a folder by uploading a placeholder image
 * Supabase Storage doesn't support empty folders, so we upload a tiny 1x1 transparent PNG
 * This works even if bucket has image/* MIME type restriction
 */
async function createFolder(folderPath: string) {
    const filePath = `${folderPath}/.placeholder.png`

    try {
        // Create a tiny 1x1 transparent PNG (base64 encoded)
        // This is the smallest valid PNG file possible
        const base64PNG = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        const binaryString = atob(base64PNG)
        const bytes = new Uint8Array(binaryString.length)
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i)
        }
        const blob = new Blob([bytes], { type: "image/png" })

        // Upload placeholder image to create folder
        const { error } = await supabase.storage
            .from(BUCKET_NAME)
            .upload(filePath, blob, {
                contentType: "image/png",
                upsert: false, // Don't overwrite if exists
            })

        if (error) {
            // Check if error is because file already exists
            if (error.message.includes("already exists") || error.message.includes("duplicate")) {
                console.log(`⏭️  Skipped: ${folderPath}/ (already exists)`)
                return { success: true, skipped: true }
            }

            console.error(`❌ Error creating ${folderPath}/:`, error.message)
            return { success: false, error: error.message }
        }

        console.log(`✅ Created: ${folderPath}/`)
        return { success: true, skipped: false }
    } catch (error: any) {
        console.error(`❌ Unexpected error creating ${folderPath}/:`, error.message)
        return { success: false, error: error.message }
    }
}

/**
 * Check if bucket exists, create if not
 */
async function ensureBucketExists() {
    console.log(`🔍 Checking if bucket "${BUCKET_NAME}" exists...`)

    try {
        const { data: buckets, error } = await supabase.storage.listBuckets()

        if (error) {
            console.error("❌ Error listing buckets:", error.message)
            return false
        }

        const bucketExists = buckets?.some(bucket => bucket.name === BUCKET_NAME)

        if (bucketExists) {
            console.log(`✅ Bucket "${BUCKET_NAME}" already exists\n`)
            return true
        }

        console.log(`📦 Creating bucket "${BUCKET_NAME}"...`)

        const { error: createError } = await supabase.storage.createBucket(BUCKET_NAME, {
            public: true, // Make bucket public
            fileSizeLimit: 5242880, // 5MB limit
            allowedMimeTypes: ["image/*"], // Only allow images
        })

        if (createError) {
            console.error("❌ Error creating bucket:", createError.message)
            return false
        }

        console.log(`✅ Bucket "${BUCKET_NAME}" created successfully\n`)
        return true
    } catch (error: any) {
        console.error("❌ Unexpected error:", error.message)
        return false
    }
}

/**
 * Main function
 */
async function main() {
    console.log("🚀 Starting Supabase Storage folder creation...\n")
    console.log("=".repeat(60))

    // Ensure bucket exists
    const bucketReady = await ensureBucketExists()
    if (!bucketReady) {
        console.error("\n❌ Cannot proceed without bucket. Please create it manually in Supabase Dashboard.")
        process.exit(1)
    }

    console.log(`📁 Creating ${FOLDERS.length} folders in "${BUCKET_NAME}"...\n`)
    console.log("=".repeat(60) + "\n")

    let created = 0
    let skipped = 0
    let failed = 0

    // Create all folders
    for (const folder of FOLDERS) {
        const result = await createFolder(folder)

        if (result.success) {
            if (result.skipped) {
                skipped++
            } else {
                created++
            }
        } else {
            failed++
        }

        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100))
    }

    console.log("\n" + "=".repeat(60))
    console.log("\n📊 Summary:")
    console.log(`   ✅ Created: ${created} folders`)
    console.log(`   ⏭️  Skipped: ${skipped} folders (already exist)`)
    console.log(`   ❌ Failed: ${failed} folders`)
    console.log(`   📁 Total: ${FOLDERS.length} folders`)

    if (failed === 0) {
        console.log("\n🎉 All folders created successfully!")
        console.log("\n💡 Next steps:")
        console.log("   1. Go to Supabase Dashboard → Storage → portfolio-images")
        console.log("   2. Verify all folders are created")
        console.log("   3. Setup RLS policies for the bucket")
        console.log("   4. Start uploading images!")
    } else {
        console.log("\n⚠️  Some folders failed to create. Please check the errors above.")
    }
}

main()
