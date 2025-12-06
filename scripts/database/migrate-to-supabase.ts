/**
 * Migration script to populate Supabase with data from lib/data.ts
 * 
 * Usage:
 * 1. Set up your Supabase environment variables in .env or .env.local:
 *    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
 *    SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
 * 
 * 2. Run the schema.sql in your Supabase SQL editor first
 * 
 * 3. Run this script: npm run migrate:supabase
 */

import { config } from "dotenv"
import { resolve } from "path"
import { createClient } from "@supabase/supabase-js"
import {
  portfolioItems,
  workExperiences,
  educationExperiences,
  organizationExperiences,
  technologies,
} from "../../lib/data"

// Load environment variables from .env or .env.local
config({ path: resolve(process.cwd(), ".env.local") })
config({ path: resolve(process.cwd(), ".env") })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing Supabase environment variables!")
  console.error("Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY")
  console.error("\nCurrent values:")
  console.error("  NEXT_PUBLIC_SUPABASE_URL:", supabaseUrl ? "✅ Set" : "❌ Missing")
  console.error("  SUPABASE_SERVICE_ROLE_KEY:", supabaseKey ? "✅ Set" : "❌ Missing")
  console.error("\nMake sure your .env or .env.local file exists in the project root.")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function migratePortfolioItems() {
  console.log("📦 Migrating portfolio items...")
  
  for (const item of portfolioItems) {
    const { error } = await supabase.from("portfolio_items").upsert(
      {
        id: item.id,
        title: item.title,
        date: item.date,
        subtitle: item.subtitle,
        category: item.category,
        image: item.image,
        additional_images: item.additionalImages || [],
        technologies: item.technologies || [],
        description: item.description,
        role: item.role,
        responsibilities: item.responsibilities || [],
        challenges: item.challenges,
        demo_url: item.demoUrl,
        repo_url: item.repoUrl,
        problem_image: (item as any).problemImage,
        solution_image: (item as any).solutionImage,
        problem_description: (item as any).problemDescription,
        problem_cards: (item as any).problemCards || [],
        solution_description: (item as any).solutionDescription,
        solution_cards: (item as any).solutionCards || [],
        status: (item as any).status,
        impact: (item as any).impact || [],
        outcomes: (item as any).outcomes || [],
        next_steps: (item as any).nextSteps,
        project_steps: item.projectSteps || [],
      },
      { onConflict: "id" }
    )

    if (error) {
      console.error(`❌ Error migrating ${item.id}:`, error.message)
    } else {
      console.log(`✅ Migrated: ${item.title}`)
    }
  }
  
  console.log(`✅ Completed migrating ${portfolioItems.length} portfolio items\n`)
}

async function migrateWorkExperiences() {
  console.log("💼 Migrating work experiences...")
  
  for (let i = 0; i < workExperiences.length; i++) {
    const exp = workExperiences[i]
    const { error } = await supabase.from("work_experiences").upsert(
      {
        title: exp.title,
        company: exp.company,
        logo: exp.logo,
        period: exp.period,
        description: exp.description,
        skills: exp.skills || [],
        details: exp.details || [],
        display_order: i,
      },
      { onConflict: "id" }
    )

    if (error) {
      console.error(`❌ Error migrating work experience ${exp.title}:`, error.message)
    } else {
      console.log(`✅ Migrated: ${exp.title} at ${exp.company}`)
    }
  }
  
  console.log(`✅ Completed migrating ${workExperiences.length} work experiences\n`)
}

async function migrateEducationExperiences() {
  console.log("🎓 Migrating education experiences...")
  
  for (let i = 0; i < educationExperiences.length; i++) {
    const exp = educationExperiences[i]
    const { error } = await supabase.from("education_experiences").upsert(
      {
        title: exp.title,
        company: exp.company,
        logo: exp.logo,
        period: exp.period,
        description: exp.description,
        skills: exp.skills || [],
        details: exp.details || [],
        display_order: i,
      },
      { onConflict: "id" }
    )

    if (error) {
      console.error(`❌ Error migrating education ${exp.title}:`, error.message)
    } else {
      console.log(`✅ Migrated: ${exp.title} at ${exp.company}`)
    }
  }
  
  console.log(`✅ Completed migrating ${educationExperiences.length} education experiences\n`)
}

async function migrateOrganizationExperiences() {
  console.log("👥 Migrating organization experiences...")
  
  for (let i = 0; i < organizationExperiences.length; i++) {
    const exp = organizationExperiences[i]
    const { error } = await supabase.from("organization_experiences").upsert(
      {
        title: exp.title,
        company: exp.company,
        logo: exp.logo,
        period: exp.period,
        description: exp.description,
        skills: exp.skills || [],
        details: exp.details || [],
        display_order: i,
      },
      { onConflict: "id" }
    )

    if (error) {
      console.error(`❌ Error migrating organization ${exp.title}:`, error.message)
    } else {
      console.log(`✅ Migrated: ${exp.title} at ${exp.company}`)
    }
  }
  
  console.log(`✅ Completed migrating ${organizationExperiences.length} organization experiences\n`)
}

async function migrateTechnologies() {
  console.log("🛠️  Migrating technologies...")
  
  for (const tech of technologies) {
    const { error } = await supabase.from("technologies").upsert(
      {
        name: tech.name,
        icon: tech.icon,
      },
      { onConflict: "name" }
    )

    if (error) {
      console.error(`❌ Error migrating technology ${tech.name}:`, error.message)
    } else {
      console.log(`✅ Migrated: ${tech.name}`)
    }
  }
  
  console.log(`✅ Completed migrating ${technologies.length} technologies\n`)
}

async function main() {
  console.log("🚀 Starting migration to Supabase...\n")
  
  try {
    await migratePortfolioItems()
    await migrateWorkExperiences()
    await migrateEducationExperiences()
    await migrateOrganizationExperiences()
    await migrateTechnologies()
    
    console.log("🎉 Migration completed successfully!")
  } catch (error) {
    console.error("❌ Migration failed:", error)
    process.exit(1)
  }
}

main()

