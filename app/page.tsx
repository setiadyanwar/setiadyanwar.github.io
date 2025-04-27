"use client"

import HeroSection from "@/components/hero-section"
import ClientsLogoSection from "@/components/clients-logo-section"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Head from 'next/head';

export default function Home() {
  <>
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/dist/image/logo setiadyanwar.png" sizes="32x32" type="image/png" />

        {/* Title */}
        <title>Setiady Ibrahim Anwar | Portfolio</title>

        {/* CSS manual */}
        <link rel="stylesheet" href="/output.css" />
        <link rel="stylesheet" href="/cssnew.css" />

        {/* Captcha */}
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </Head>

      <main>
        {/* isi halaman */}
      </main>
    </>

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div>
      <HeroSection />

      <ClientsLogoSection />

      <div className="container mx-auto px-4 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center"
        >
          <motion.div
            variants={item}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="p-8 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20 border border-purple-200 dark:border-purple-800/30 transition-all duration-300 hover:shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">Frontend Development</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Creating responsive, accessible, and performant web applications with modern technologies.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="p-8 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/20 border border-orange-200 dark:border-orange-800/30 transition-all duration-300 hover:shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4 text-orange-600 dark:text-orange-300">UI/UX Design</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Designing intuitive and beautiful user interfaces with a focus on user experience.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/30 border border-gray-200 dark:border-gray-700/30 transition-all duration-300 hover:shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-700 dark:text-gray-300">Creative Solutions</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Solving complex problems with creative and innovative approaches.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Explore My Work</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-purple-600 hover:bg-purple-700 relative overflow-hidden group">
              <Link href="/portfolio">
                <span className="relative z-10">View Portfolio</span>
                <ArrowRight className="relative z-10 ml-2 h-4 w-4" />
                <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </Button>
            <Button
              asChild
              className="border-purple-300 dark:border-purple-800 relative overflow-hidden group outline"
            >
              <Link href="/about">
                <span className="relative z-10 group-hover:text-white dark:group-hover:text-white transition-colors duration-300">
                  About Me
                </span>
                <span className="absolute inset-0 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </Button>
            <Button
              asChild
              className="outline border-purple-300 dark:border-purple-800 relative overflow-hidden group"
            >
              <Link href="/experience">
                <span className="relative z-10 group-hover:text-white dark:group-hover:text-white transition-colors duration-300">
                  Experience
                </span>
                <span className="absolute inset-0 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
