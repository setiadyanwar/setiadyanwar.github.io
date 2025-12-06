"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import PortfolioForm from "@/components/admin/portfolio-form"

export default function EditPortfolioPage() {
  const params = useParams()
  const id = params.id as string

  return <PortfolioForm portfolioId={id} />
}

