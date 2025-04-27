"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description:
        "Leading frontend development for enterprise applications, implementing modern UI/UX practices, and mentoring junior developers.",
      skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    },
    {
      title: "UI/UX Designer",
      company: "Creative Agency",
      period: "2019 - 2021",
      description:
        "Designed user interfaces for web and mobile applications, created wireframes, prototypes, and conducted user testing.",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    },
    {
      title: "Frontend Developer",
      company: "Web Studio",
      period: "2017 - 2019",
      description:
        "Developed responsive websites and web applications for various clients across different industries.",
      skills: ["HTML/CSS", "JavaScript", "Vue.js", "SCSS"],
    },
  ]

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in frontend development and UI/UX design
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-purple-200 dark:bg-purple-800/30"></div>

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
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-6 h-6 rounded-full bg-purple-600 dark:bg-purple-400 z-10"></div>

              <Card className="glassmorphism overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">{exp.title}</h3>
                    <Badge
                      variant="outline"
                      className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800"
                    >
                      <Calendar className="h-3 w-3 mr-1" />
                      {exp.period}
                    </Badge>
                  </div>

                  <div className="flex items-center mb-4">
                    <Briefcase className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{exp.company}</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-purple-100/50 dark:bg-purple-900/20">
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
