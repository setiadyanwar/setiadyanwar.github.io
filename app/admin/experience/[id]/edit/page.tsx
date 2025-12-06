"use client"

import { useParams } from "next/navigation"
import ExperienceForm from "@/components/admin/experience-form"

export default function EditExperiencePage() {
  const params = useParams()
  const id = parseInt(params.id as string)

  return <ExperienceForm experienceId={id} type="work" />
}

