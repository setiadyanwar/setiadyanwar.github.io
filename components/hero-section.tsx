"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, MapPin } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

// Import optimized sub-components
import BackgroundOrbs from "./hero-section/background-orbs";
import EyeTracker from "./hero-section/eye-tracker";
import ProfileCard from "./hero-section/profile-card";
import ContactDropdown from "./contact-dropdown";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#fafafa] dark:bg-black">
      {/* Clean Apple-style background */}
      <div className="absolute inset-0 bg-[#fafafa] dark:bg-black"></div>

      {/* Background Orbs - Separated component */}
      <BackgroundOrbs />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Profile photo for mobile - Separated component */}
            <ProfileCard isMobile />

            {/* Greeting with Eye Tracker */}
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-2 text-center md:text-left md:flex md:items-center md:gap-3"
            >
              {/* Eyes that follow cursor - Optimized component */}
              <EyeTracker />
              Hello, I&apos;m Setiady
            </motion.h2>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-500 mb-8 text-center md:text-left leading-[1.6] max-w-3xl"
            >
              I solve{" "}
              <span className="font-bold text-gray-900 dark:text-white">user problems</span>{" "}
              through thoughtful{" "}
              <span className="text-black dark:text-white font-bold">
                design
              </span>{" "}
              and {" "}
              <span className="text-black dark:text-white font-bold">
                elegant code
              </span>
              , creating digital products that matter.
            </motion.h1>

            {/* Founder Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex text-center justify-center md:justify-start md:text-left mb-4 text-gray-700 dark:text-gray-300"
            >
              <h4>Founder of Kreavoks Digital Agency | </h4>
              <img
                src="/client/kreavoks.svg"
                alt="Kreavoks Logo"
                className="h-6 w-16 ml-2"
              />
            </motion.div>

            {/* TypeAnimation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl h-20 mx-auto md:mx-0 text-center md:text-left"
            >
              <TypeAnimation
                sequence={[
                  "BNSP-Certified Web Programmer", 1000,
                  "Frontend Developer & UI/UX Enthusiast", 1000,
                  "Web Programmer with BNSP Certification and over 2 years of experience in Frontend Development and UI/UX Design", 1000
                ]}
                wrapper="p"
                speed={50}
                repeat={Infinity}
                className="min-h-[80px]"
              />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              {/* Combined Explore & Contact Button */}
              <div className="flex bg-gray-100 dark:bg-gray-800 rounded-full p-1.5 shadow-sm gap-1">
                {/* Explore Button */}
                <Button
                  asChild
                  className="rounded-full px-4 py-6 font-medium transition-all duration-200 bg-indigo-600 text-white hover:text-indigo-600 btn-splash"
                  size="lg"
                >
                  <Link href="/portfolio" className="flex items-center gap-2">
                    <span>Explore Works</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      style={{ willChange: 'transform' }}
                    >
                      →
                    </motion.div>
                  </Link>
                </Button>

                {/* Contact Dropdown - Separated component */}
                <ContactDropdown />
              </div>

              {/* CV Download Button */}
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-gray-600 dark:border-gray-400 text-gray-800 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-300 rounded-full px-4 py-6 font-medium transition-all duration-200 group btn-splash"
              >
                <Link href="/cv/cv_setiady.pdf" className="flex items-center gap-2">
                  <Download className="h-5 w-5 group-hover:animate-bounce" />
                  <span>Download CV</span>
                </Link>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-4 mt-8 justify-center md:justify-start"
            >
              <Link
                href="https://behance.net/setiadyanwar"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110 duration-300"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800">
                  <span className="font-semibold text-xs">Bē</span>
                </div>
              </Link>
              <Link
                href="https://github.com/setiadyanwar"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110 duration-300"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800">
                  <span className="sr-only">Github</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    >
                      <path d="M9.096 21.25v-3.146a3.33 3.33 0 0 1 .758-2.115c-3.005-.4-5.28-1.859-5.28-5.798c0-1.666 1.432-3.89 1.432-3.89c-.514-1.13-.5-3.084.06-3.551c0 0 1.95.175 3.847 1.75c1.838-.495 3.764-.554 5.661 0c1.897-1.575 3.848-1.75 3.848-1.75c.558.467.573 2.422.06 3.551c0 0 1.432 2.224 1.432 3.89c0 3.94-2.276 5.398-5.28 5.798a3.33 3.33 0 0 1 .757 2.115v3.146"></path>
                      <path d="M3.086 16.57c.163.554.463 1.066.878 1.496c.414.431.932.77 1.513.988a4.46 4.46 0 0 0 3.62-.216"></path>
                    </g>
                  </svg>
                </div>
              </Link>
              <Link
                href="https://instagram.com/setiadyanwarr"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110 duration-300"
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
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </div>
              </Link>
              <div className="ml-4 text-gray-600 dark:text-gray-400">
                <span className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  Indonesia / Tangerang
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Card Desktop - Separated component */}
          <ProfileCard />
        </div>
      </div>
    </section>
  );
}
