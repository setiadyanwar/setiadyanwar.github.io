"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function AboutSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const values = [
    "Clean & Maintainable Code",
    "User-Centered Design",
    "Responsive & Accessible Interfaces",
    "Performance Optimization",
  ]

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
            className="relative"
          >
            {/* Main photo container */}
            <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-orange-500/20 blur-xl" />
              <div className="absolute inset-0 glassmorphism rounded-lg" />
              <div className="absolute inset-2 rounded-lg overflow-hidden">
                <Image
                  src="/setiady.png"
                  alt="About Setiady Ibrahim Anwar"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Certification photo overlapping front */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute bottom-4 right-4 w-40 h-56 rounded-lg overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg rotate-6 z-10"
              >
                <Image
                  src="/sertifikat/skk sample.png?height=160&width=96"
                  alt="BNSP Certification"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
            </div>

            {/* Additional photos container aligned left */}
            <div className="flex space-x-4 mt-6 justify-start max-w-[500px] mx-auto">
              {[1, 2].map((item) => (
                <div key={item} className="relative w-32 h-32 rounded-lg overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt={`Additional photo ${item}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-4 border-dashed border-indigo-400 dark:border-indigo-600 opacity-50" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border-4 border-dashed border-orange-400 dark:border-orange-600 opacity-50" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeIn}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              Frontend Developer & UI/UX Designer
            </h3>

            <p className="text-gray-700 dark:text-gray-300">
              I'm a passionate Frontend Developer and UI/UX Designer with a keen eye for detail and a commitment to
              creating exceptional user experiences. With expertise in modern web technologies, I specialize in building
              responsive, accessible, and visually appealing interfaces that balance aesthetics with functionality.
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              My approach combines technical expertise with creative problem-solving to deliver solutions that not only
              look great but also perform flawlessly across all devices and platforms.
            </p>

            <div className="space-y-3 mt-6">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">What I value:</h4>
              <ul className="space-y-2">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}