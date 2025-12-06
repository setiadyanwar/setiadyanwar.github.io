"use client"

import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, GraduationCap, Users } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"
import {
  getWorkExperiences,
  getEducationExperiences,
  getOrganizationExperiences,
} from "@/lib/supabase/data"

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("work")
  const [workExperiences, setWorkExperiences] = useState<any[]>([])
  const [educationExperiences, setEducationExperiences] = useState<any[]>([])
  const [organizationExperiences, setOrganizationExperiences] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [work, education, org] = await Promise.all([
          getWorkExperiences(),
          getEducationExperiences(),
          getOrganizationExperiences(),
        ])
        
        setWorkExperiences(work.map((exp: any) => ({ ...exp, isExpanded: false })))
        setEducationExperiences(education.map((exp: any) => ({ ...exp, isExpanded: false })))
        setOrganizationExperiences(org.map((exp: any) => ({ ...exp, isExpanded: false })))
      } catch (error) {
        if (process.env.NODE_ENV !== "production") {
          console.error("Error fetching experiences:", error)
        }
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  

  const tabs = [
    { id: "work", name: "Work Experience", icon: <Briefcase className="h-4 w-4 mr-2" /> },
    { id: "education", name: "Education", icon: <GraduationCap className="h-4 w-4 mr-2" /> },
    { id: "organization", name: "Organization", icon: <Users className="h-4 w-4 mr-2" /> },
  ]

  // Get the appropriate experiences based on the active tab
  const experiences =
    activeTab === "work" ? workExperiences : activeTab === "education" ? educationExperiences : organizationExperiences

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors flex items-center ${
                  activeTab === tab.id
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-indigo-200 dark:bg-indigo-800/30"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:pr-12 md:text-left md:ml-auto md:mr-6" : "md:pl-12 md:ml-6"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-6 h-6 rounded-full bg-indigo-600 dark:bg-indigo-400 z-10">
                {/* Pulsing stroke animation */}
                <span className="absolute inset-0 rounded-full border-2 border-indigo-400 dark:border-indigo-300 animate-ping opacity-75"></span>
                <span className="absolute inset-0 rounded-full border-4 border-indigo-200 dark:border-indigo-700 animate-pulse"></span>
              </div>

              <Card className="glassmorphism overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex-row md:flex items-center justify-between mb-4">
                    <div className="flex items-center mb-2 md:mb-0">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 mr-3 flex-shrink-0">
                        <Image
                          src={exp.logo || "/placeholder.svg"}
                          alt={exp.company}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div className="group relative">
                        <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 truncate max-w-[200px] md:max-w-[300px]">
                          {exp.title}
                        </h3>
                        {/* Full title on hover */}
                        <div className="absolute left-0 top-full mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white dark:bg-gray-800 p-2 rounded-md shadow-lg z-20 max-w-xs">
                          <p className="text-gray-800 dark:text-gray-200 text-sm">{exp.title}</p>
                        </div>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800 flex-shrink-0"
                    >
                      <Calendar className="h-3 w-3 mr-1" />
                      {exp.period}

                    </Badge>
                  </div>

                  <div className="flex items-center mb-4">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{exp.company}</span>
                  </div>

                  {/* Replace the simple paragraph with an accordion */}
                  <div className="mb-4">
                    <motion.div initial={{ height: "auto" }} className="overflow-hidden">
                      {/* Truncated description */}
                      <div className="relative">
                        <p className={`text-gray-600 dark:text-gray-400 ${!exp.isExpanded ? "line-clamp-2" : ""}`}>
                          {exp.description}
                        </p>

                        {/* Additional details as bullet points - only shown when expanded */}
                        {exp.isExpanded && exp.details && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="mt-3"
                          >
                            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Key Achievements:</h4>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                                  {exp.details.map((detail: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, i: Key | null | undefined) => (
                                <li key={i}>{detail}</li>
                              ))}
                            </ul>
                          </motion.div>
                        )}

                        {/* Read more/less toggle */}
                        <button
                          onClick={() => {
                            const updatedExperiences = [...experiences]
                            updatedExperiences[index] = {
                              ...exp,
                              isExpanded: !exp.isExpanded,
                            }
                            if (activeTab === "work") {
                              setWorkExperiences(updatedExperiences)
                            } else if (activeTab === "education") {
                              setEducationExperiences(updatedExperiences)
                            } else {
                              setOrganizationExperiences(updatedExperiences)
                            }
                          }}
                          className="text-indigo-600 dark:text-indigo-400 text-sm font-medium mt-1 flex items-center hover:underline"
                        >
                          {exp.isExpanded ? "Read less" : "Read more"}
                          <motion.span
                            animate={{ rotate: exp.isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="ml-1"
                          >
                            ↓
                          </motion.span>
                        </button>
                      </div>
                    </motion.div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-indigo-100/50 dark:bg-indigo-900/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
