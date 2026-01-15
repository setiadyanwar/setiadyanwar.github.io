"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

// Import optimized sub-components
import BackgroundOrbs from "./hero-section/background-orbs";
import EyeTracker from "./hero-section/eye-tracker";
import ContactDropdown from "./contact-dropdown";
import CvDownloadDropdown from "./cv-download-dropdown";

export default function HeroSection() {
  const words = ["problems", "needs", "logic", "ideas", "goals"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#fafafa] dark:bg-black overflow-x-clip overflow-y-visible pt-16 pb-16 z-20">
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
          <div className="flex justify-center mb-4 md:mb-6">
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

          {/* New Headline Style: Strategic & Problem-Solving */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-6 md:mb-8">
            Solving{" "}
            <span className="inline-block align-middle mx-1">
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
                className="relative w-12 h-16 md:w-16 md:h-22 lg:w-20 lg:h-28 bg-indigo-100 dark:bg-indigo-900/30 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-xl"
              >
                <Image
                  src="/profile-photo.png"
                  alt="Setiady"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </span>{" "}
            Business{" "}
            <span
              className="relative inline-flex h-[1.12em] items-center overflow-hidden lg:min-w-[5ch] align-middle -translate-y-1"
              style={{ perspective: "1000px" }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ y: "100%", opacity: 0, rotateX: -90, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, rotateX: 0, filter: "blur(0px)" }}
                  exit={{ y: "-100%", opacity: 0, rotateX: 90, filter: "blur(8px)" }}
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="inline-block !leading-none text-indigo-600 dark:text-indigo-400"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            <br className="hidden md:block" />
            with Strategic <span className="relative inline-block">
              Design
              <svg className="absolute -bottom-1.5 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1.5, ease: "easeInOut" }}
                  d="M2 6C20 3 40 3 60 5C75 7 90 6 98 3"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                  className="text-indigo-600/40 dark:text-indigo-400/40"
                />
              </svg>
            </span> & Excellence
          </h1>

          {/* Minimalist Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center mb-6 md:mb-8"
          >
            <div className="inline-flex items-center gap-2.5 bg-white/40 dark:bg-white/5 px-4 py-2 rounded-full border border-gray-200/50 dark:border-white/10 backdrop-blur-sm">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-[10px] md:text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-[0.1em]">Available for Hire</span>

              <div className="hidden md:flex items-center gap-2.5 border-l border-gray-300/50 dark:border-gray-700/50 pl-2.5 ml-0.5">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Concept → Market</span>
              </div>
            </div>
          </motion.div>

          {/* Refined TypeAnimation */}
          <div className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 md:mb-10 h-16 max-w-2xl mx-auto font-medium">
            <TypeAnimation
              sequence={[
                "Turning complex problems into seamless interfaces.", 1500,
                "Bridging the gap between UI/UX and Engineering.", 1500,
                "Founder of Kreavoks. BNSP Certified Web Developer.", 1500
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
