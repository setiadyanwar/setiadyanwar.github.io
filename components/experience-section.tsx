"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, GraduationCap, Users } from "lucide-react"
import Image from "next/image"

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("work")

  const tabs = [
    { id: "work", name: "Work Experience", icon: <Briefcase className="h-4 w-4 mr-2" /> },
    { id: "education", name: "Education", icon: <GraduationCap className="h-4 w-4 mr-2" /> },
    { id: "organization", name: "Organization", icon: <Users className="h-4 w-4 mr-2" /> },
  ]

  const workExperiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      logo: "/placeholder.svg?height=40&width=40",
      period: "2021 - Present",
      description:
        "Leading frontend development for enterprise applications, implementing modern UI/UX practices, and mentoring junior developers.",
      skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    },
    {
      title: "UI/UX Designer",
      company: "Creative Agency",
      logo: "/placeholder.svg?height=40&width=40",
      period: "2019 - 2021",
      description:
        "Designed user interfaces for web and mobile applications, created wireframes, prototypes, and conducted user testing.",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    },
    {
      title: "Frontend Developer",
      company: "Web Studio",
      logo: "/placeholder.svg?height=40&width=40",
      period: "2017 - 2019",
      description:
        "Developed responsive websites and web applications for various clients across different industries.",
      skills: ["HTML/CSS", "JavaScript", "Vue.js", "SCSS"],
    },
  ]

  const educationExperiences = [
    {
      title: "Bachelor of Computer Science",
      company: "University of Technology",
      logo: "/placeholder.svg?height=40&width=40",
      period: "2017 - 2021",
      description: "Specialized in Web Development and User Interface Design. Graduated with honors.",
      skills: ["Web Development", "UI/UX Design", "Data Structures", "Algorithms"],
    },
    {
      title: "Web Development Bootcamp",
      company: "Code Academy",
      logo: "/placeholder.svg?height=40&width=40",
      period: "2016 - 2017",
      description: "Intensive 6-month bootcamp focused on modern web development technologies and practices.",
      skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    },
  ]

  const organizationExperiences = [
    {
      title: "Core Team Product Development & User Experience",
      company: "GOOGLE DEVELOPER GROUP ON CAMPUS",
      logo: "/placeholder.svg?height=40&width=40",
      period: "Dec 2024 - Present",
      description:
        "Delivered insightful sessions on UI/UX design and no-code programming to over 150 GDGOC members, enhancing their skills in user-centered design and rapid prototyping.",
      skills: ["Mentorship", "UI/UX Design", "No-Code Programming", "Knowledge Sharing"],
    },
    {
      title: "Mentor UI/UX Designer",
      company: "HIMAVO MICRO IT",
      logo: "/placeholder.svg?height=40&width=40",
      period: "Jan 2024 - Sept 2024",
      description:
        "Provided UI/UX design guidance to over 30 students, ensuring they understand and apply key design principles effectively.",
      skills: ["Design Principles", "Tool Preparation", "User Experience Training"],
    },
    {
      title: "Head of Event Company Visit 2024",
      company: "HIMAVO MICRO IT",
      logo: "/placeholder.svg?height=40&width=40",
      period: "May 2024 - Jul 2024",
      description:
        "Led the Event Company Visit 2024 for 75 students, resulting in a 20% increase in student engagement in professional events.",
      skills: ["Team Leadership", "Stakeholder Engagement", "Budget Management"],
    },
    {
      title: "WebDev & UI/UX",
      company: "AGRIDATION",
      logo: "/placeholder.svg?height=40&width=40",
      period: "Jan 2024 - Present",
      description:
        "Worked with a team of 3 volunteers on a project to develop a website. Designed and developed a comprehensive informational website and payment portal for competitions.",
      skills: ["Team Collaboration", "Website Development", "Front-End Development", "UI/UX Design"],
    },
  ]

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
                index % 2 === 0 ? "md:pr-12 md:text-right md:ml-auto md:mr-1/2" : "md:pl-12 md:ml-1/2"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-6 h-6 rounded-full bg-indigo-600 dark:bg-indigo-400 z-10"></div>

              <Card className="glassmorphism overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 mr-3 flex-shrink-0">
                        <Image
                          src={exp.logo || "/placeholder.svg"}
                          alt={exp.company}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{exp.title}</h3>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800"
                    >
                      <Calendar className="h-3 w-3 mr-1" />
                      {exp.period}
                    </Badge>
                  </div>

                  <div className="flex items-center mb-4">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{exp.company}</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>

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
