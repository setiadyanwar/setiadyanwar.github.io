"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Code, Palette, MousePointer, Users } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/50 via-white to-orange-50/30 dark:from-indigo-950/30 dark:via-gray-900 dark:to-orange-950/20 opacity-50"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-[10%] w-16 h-16 rounded-full bg-indigo-200/30 dark:bg-indigo-800/10"
          animate={{
            y: [0, 30, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-[15%] w-20 h-20 rounded-full bg-orange-200/30 dark:bg-orange-800/10"
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-[20%] w-24 h-24 rounded-full bg-blue-200/20 dark:bg-blue-800/10"
          animate={{
            y: [0, 50, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Profile photo for mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex justify-center items-center mb-8 md:hidden"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-indigo-300 dark:border-indigo-700 p-1 bg-white dark:bg-gray-900">
                <Image
                  src="/setiady.png"
                  alt="Setiady Ibrahim Anwar"
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                />
              </div>

              {/* Floating design elements */}
              <motion.div
                className="absolute -top-2 right-24 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md"
                animate={{ y: [0, -5, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Code className="w-4 h-4 text-indigo-500" />
              </motion.div>

              <motion.div
                className="absolute -bottom-2 left-24 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md"
                animate={{ y: [0, 5, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
              >
                <Palette className="w-4 h-4 text-orange-500" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 right-24 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md"
                animate={{ x: [0, 5, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              >
                <MousePointer className="w-4 h-4 text-blue-500" />
              </motion.div>

              <motion.div
                className="absolute top-0 left-24 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md"
                animate={{ x: [0, -5, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
              >
                <Users className="w-4 h-4 text-green-500" />
              </motion.div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl text-gray-500 dark:text-gray-400 mb-2 text-center md:text-left"
            >
              Hello I'm
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 text-center md:text-left"
            >
              Setiady{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Ibrahim</span>
                <span className="absolute inset-0 flex">
                  <span className="w-2 h-2 bg-blue-500 absolute -top-1 -left-1"></span>
                  <span className="w-2 h-2 bg-blue-500 absolute -top-1 -right-1"></span>
                  <span className="w-2 h-2 bg-blue-500 absolute -bottom-1 -left-1"></span>
                  <span className="w-2 h-2 bg-blue-500 absolute -bottom-1 -right-1"></span>
                  <span className="border border-blue-500 absolute inset-0 z-0 bg-indigo-500/20"></span>
                </span>
              </span>{" "}
              <br />
              <span className="text-indigo-600 dark:text-indigo-400">Anwar</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center justify-center md:justify-start md:text-left mb-4 text-indigo-500 animate-pulse"
            >
              <h4>| Founder of Kreavoks Digital Agency</h4>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-16 max-w-xl h-20 mx-auto md:mx-0 text-center md:text-left"
            >
              <TypeAnimation
                sequence={[
                  "UI/UX Designer specialist",
                  1000,
                  "Frontend Web Developer",
                  1000,
                  "UI/UX Design and Frontend Web Developer specialist with over 2 years of experience focusing on User Interface and User Experience.",
                  1000,
                ]}
                wrapper="p"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="min-h-[80px]"
              />
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <Button
                asChild
                className="bg-indigo-600 hover:bg-indigo-700 rounded-full px-8 relative overflow-hidden group"
                variant="default"
                size="lg"
              >
                <Link href="/portfolio">
                  <span className="relative z-10">Explore Me</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-indigo-300 dark:border-indigo-800 rounded-full px-8 relative overflow-hidden group"
              >
                <Link href="#cv">
                  <span className="relative z-10 group-hover:text-white dark:group-hover:text-white transition-colors duration-300">
                    My CV
                  </span>
                  <Download className="relative z-10 ml-2 h-4 w-4 group-hover:text-white dark:group-hover:text-white transition-colors duration-300" />
                  <span className="absolute inset-0 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-4 mt-8 justify-center md:justify-start"
            >
              <Link
                href="https://behance.net/setiadyanwar"
                className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-transform hover:scale-110 duration-300"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800">
                  <span className="font-semibold text-xs">Bē</span>
                </div>
              </Link>
              <Link
                href="https://github.com/setiadyanwar"
                className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-transform hover:scale-110 duration-300"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800">
                  <span className="sr-only">Github</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                      <path d="M9.096 21.25v-3.146a3.33 3.33 0 0 1 .758-2.115c-3.005-.4-5.28-1.859-5.28-5.798c0-1.666 1.432-3.89 1.432-3.89c-.514-1.13-.5-3.084.06-3.551c0 0 1.95.175 3.847 1.75c1.838-.495 3.764-.554 5.661 0c1.897-1.575 3.848-1.75 3.848-1.75c.558.467.573 2.422.06 3.551c0 0 1.432 2.224 1.432 3.89c0 3.94-2.276 5.398-5.28 5.798a3.33 3.33 0 0 1 .757 2.115v3.146"></path>
                      <path d="M3.086 16.57c.163.554.463 1.066.878 1.496c.414.431.932.77 1.513.988a4.46 4.46 0 0 0 3.62-.216"></path>
                    </g>
                  </svg>
                </div>
              </Link>
              <Link
                href="https://instagram.com/setiadyanwarr"
                className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-transform hover:scale-110 duration-300"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </div>
              </Link>
              <div className="ml-4 text-gray-600 dark:text-gray-400">
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Indonesia / Tangerang
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[500px] w-full max-w-[400px] mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-200/50 to-orange-100/50 dark:from-indigo-900/30 dark:to-orange-800/20 blur-xl"
              ></motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute inset-0 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <Image src="/setiady.png" alt="Setiady Ibrahim Anwar" fill className="object-cover" />
              </motion.div>

              {/* Floating design elements */}
              <motion.div
                className="absolute top-10 right-0 w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md"
                animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Code className="w-6 h-6 text-indigo-500" />
              </motion.div>

              <motion.div
                className="absolute bottom-20 left-0 w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md"
                animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
              >
                <Palette className="w-6 h-6 text-orange-500" />
              </motion.div>

              <motion.div
                className="absolute top-1/3 -right-6 w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md"
                animate={{ x: [0, 10, 0], rotate: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              >
                <MousePointer className="w-6 h-6 text-blue-500" />
              </motion.div>

              <motion.div
                className="absolute top-2/3 -left-6 w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md"
                animate={{ x: [0, -10, 0], rotate: [0, -15, 0] }}
                transition={{ duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
              >
                <Users className="w-6 h-6 text-green-500" />
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-orange-200 dark:bg-orange-700/30 blur-lg"
              ></motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-indigo-200 dark:bg-indigo-700/30 blur-lg"
              ></motion.div>

              {/* Name tag */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-8 left-20 transform -translate-x-1/2 w-fit bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full py-2 px-6 shadow-lg"
              >
                <div className="text-center">
                  <p className="font-semibold text-gray-900 dark:text-white">Setiadyanwar</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">UI/UX Designer | Frontend Dev</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
