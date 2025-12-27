"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

// Import optimized sub-components
import BackgroundOrbs from "./hero-section/background-orbs";
import EyeTracker from "./hero-section/eye-tracker";
import ContactDropdown from "./contact-dropdown";
import CvDownloadDropdown from "./cv-download-dropdown";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#fafafa] dark:bg-black overflow-hidden pt-20">
      {/* Background Orbs */}
      <BackgroundOrbs />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Greeting with Eye Tracker centered */}
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 bg-white/50 dark:bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200 dark:border-white/10"
            >
              <EyeTracker />
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                Hello, I&apos;m Setiady
              </span>
            </motion.div>
          </div>

          {/* New Headline Style inspired by Image 1 */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-8">
            Solving{" "}
            <span className="inline-block align-middle mx-1">
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
                className="relative w-12 h-16 md:w-16 md:h-22 lg:w-20 lg:h-28 bg-indigo-100 dark:bg-indigo-900/30 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-xl"
              >
                <Image
                  src="/setiady.png"
                  alt="Setiady"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </span>{" "}
            problems <br className="hidden md:block" />
            through <span className="text-indigo-600 dark:text-indigo-400">design</span> &{" "}
            <span className="relative inline-block">
              code
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0 7C25 2 75 2 100 7" stroke="currentColor" strokeWidth="3" fill="none" className="text-indigo-600/30" />
              </svg>
            </span>
          </h1>

          {/* Founder Info Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center mb-10"
          >
            <div className="flex items-center gap-3 bg-gray-100/50 dark:bg-white/5 px-4 py-2 rounded-2xl border border-gray-200/50 dark:border-white/10 backdrop-blur-md transition-all hover:bg-gray-100/80 dark:hover:bg-white/10 group">
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-tight">
                Founder of
              </span>
              <div className="h-4 w-[1px] bg-gray-300 dark:bg-gray-700 mx-1" />
              <div className="flex items-center">
                <Image
                  src="/client/kreavoks.svg"
                  alt="Kreavoks Logo"
                  width={85}
                  height={24}
                  className="opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </motion.div>

          {/* TypeAnimation centered */}
          <div className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-12 h-16 max-w-2xl mx-auto">
            <TypeAnimation
              sequence={[
                "Building immersive digital experiences.", 1000,
                "Focused on UI/UX and Frontend Dev.", 1000,
                "Certified Web Programmer based in ID.", 1000
              ]}
              wrapper="p"
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* CTA Buttons centered */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex bg-white dark:bg-gray-900 rounded-full p-1.5 border border-gray-200 dark:border-white/10 gap-1">
              <Button
                asChild
                className="rounded-full px-8 py-6 font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-all"
                size="lg"
              >
                <Link href="/portfolio" className="flex items-center gap-2">
                  <span>Explore Works</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >→</motion.span>
                </Link>
              </Button>
              <ContactDropdown />
            </div>
            <CvDownloadDropdown />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
