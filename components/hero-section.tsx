"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Code, Palette, MousePointer, Users } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Profile photo for mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex justify-center items-center mb-8 md:hidden"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-indigo-300 dark:border-indigo-700 p-2.5 bg-white dark:bg-gray-900">
                <Image
                  src="/setiady.png"
                  alt="Setiady Ibrahim Anwar"
                  width={102}
                  height={102}
                  className="rounded-full object-cover"
                />
              </div>

              {/* Floating design elements */}
              <motion.div
                className="absolute -top-2 right-24 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md"
                animate={{ y: [0, -5, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Code className="w-4 h-4 text-indigo-500" />
              </motion.div>

              <motion.div
                className="absolute -bottom-2 left-24 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md"
                animate={{ y: [0, 5, 0], rotate: [0, -5, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <Palette className="w-4 h-4 text-orange-500" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 right-24 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md"
                animate={{ x: [0, 5, 0], rotate: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <MousePointer className="w-4 h-4 text-blue-500" />
              </motion.div>

              <motion.div
                className="absolute top-0 left-24 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md"
                animate={{ x: [0, -5, 0], rotate: [0, -10, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
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
                <span className="relative z-10 px-2">Ibrahim</span>
                <span className="absolute inset-0 flex">
                  <span className="w-2 h-2 bg-blue-500 absolute -top-1 -left-1"></span>
                  <span className="w-2 h-2 bg-blue-500 absolute -top-1 -right-1"></span>
                  <span className="w-2 h-2 bg-blue-500 absolute -bottom-1 -left-1"></span>
                  <span className="w-2 h-2 bg-blue-500 absolute -bottom-1 -right-1"></span>
                  <span className="border border-blue-500 absolute inset-0 z-0 bg-indigo-500/20"></span>
                </span>
              </span>{" "}
              <br />
              <span className="text-indigo-600 dark:text-indigo-400">
                Anwar
              </span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex text-center justify-center md:justify-start md:text-left mb-4 text-indigo-500 animate-pulse"
            >
              <h4>Founder of Kreavoks Digital Agency | </h4>
              <svg
                width="180"
                height="40"
                viewBox="0 0 189 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-16 ml-2"
              >
                <path
                  d="M0.676643 6.32498L5.98319 2.21021V16.967L13.6233 9.37296H21.2633L12.5187 18.2097L22.7361 32.3852H16.0626L8.46851 21.9837L5.98319 24.469V32.3852H0L0.676643 6.32498Z"
                  fill="#4082E6"
                />
                <path
                  d="M25.0221 20.2809C25.0221 16.6296 25.9272 13.8835 27.7375 12.0425C29.5478 10.2015 31.9258 9.28101 34.8713 9.28101H35.1475V15.1261H34.9174C33.598 15.1261 32.6161 15.5403 31.9718 16.3688C31.3275 17.1972 31.0053 18.5013 31.0053 20.2809V32.3853H25.0221V20.2809Z"
                  fill="#4082E6"
                />
                <path
                  d="M37.4335 20.5571C37.4335 18.4399 37.9397 16.4762 38.9523 14.6659C39.9955 12.8249 41.4069 11.3675 43.1865 10.2936C44.9968 9.18901 46.9759 8.63672 49.1237 8.63672C51.0874 8.63672 52.9744 9.09696 54.7847 10.0175C56.595 10.9073 58.0831 12.2113 59.2491 13.9295C60.4457 15.6478 61.0747 17.6729 61.1361 20.0048C61.1668 20.9866 61.1054 21.9378 60.952 22.8583H43.8769C44.1531 23.9936 44.7514 24.8987 45.6719 25.5737C46.623 26.2181 47.7736 26.5403 49.1237 26.5403C50.0749 26.5403 50.8419 26.4175 51.4249 26.1721C52.0386 25.9266 52.5909 25.6044 53.0818 25.2055L60.2156 25.2516C59.2644 27.3687 57.807 29.0869 55.8433 30.4063C53.8796 31.7257 51.7011 32.3854 49.3078 32.3854C47.1293 32.3854 45.1349 31.8638 43.3246 30.8205C41.5143 29.7466 40.0722 28.3045 38.9983 26.4942C37.9551 24.6839 37.4335 22.7049 37.4335 20.5571ZM54.7387 18.0717C54.2784 16.9978 53.5421 16.1387 52.5295 15.4944C51.5477 14.8193 50.4738 14.4818 49.3078 14.4818C48.0191 14.4818 46.9145 14.804 45.994 15.4483C45.0735 16.0927 44.3678 16.9672 43.8769 18.0717H54.7387Z"
                  fill="#4082E6"
                />
                <path
                  d="M75.3041 32.3854C73.1563 32.3854 71.1773 31.8638 69.367 30.8205C67.5567 29.7466 66.1146 28.3045 65.0407 26.4942C63.9668 24.6533 63.4298 22.6589 63.4298 20.511C63.4298 18.3632 63.9668 16.3842 65.0407 14.5739C66.1146 12.7329 67.5567 11.2908 69.367 10.2476C71.1773 9.17367 73.1563 8.63672 75.3041 8.63672C77.4519 8.63672 79.431 9.17367 81.2413 10.2476C83.0516 11.2908 84.4784 12.7329 85.5216 14.5739C86.5955 16.3842 87.1324 18.3632 87.1324 20.511V32.0172H81.1493V29.5779C80.8117 30.3449 80.0753 31.0046 78.9401 31.5569C77.8048 32.1092 76.5928 32.3854 75.3041 32.3854ZM75.3502 26.5403C77.0377 26.5403 78.4338 25.9726 79.5384 24.8374C80.643 23.6714 81.1953 22.2293 81.1953 20.511C81.1953 18.7928 80.643 17.366 79.5384 16.2308C78.4338 15.0648 77.0377 14.4818 75.3502 14.4818C73.6626 14.4818 72.2512 15.0648 71.1159 16.2308C69.9806 17.366 69.413 18.7928 69.413 20.511C69.413 22.2293 69.9806 23.6714 71.1159 24.8374C72.2512 25.9726 73.6626 26.5403 75.3502 26.5403Z"
                  fill="#4082E6"
                />
                <path
                  d="M89.4183 9.37305H95.6777L100.924 24.5151L106.217 9.37305H112.477L103.916 32.3853H97.9329L89.4183 9.37305Z"
                  fill="#4082E6"
                />
                <path
                  d="M130.155 2.0904C132.286 2.35736 134.183 3.13614 135.846 4.42672C137.543 5.69068 138.795 7.30084 139.601 9.25721C140.441 11.187 140.728 13.2174 140.461 15.3486C140.194 17.4797 139.414 19.3919 138.119 21.0851C136.859 22.7517 135.249 24.0034 133.289 24.8402C131.363 25.6503 129.334 25.9219 127.203 25.6549C125.072 25.3879 123.158 24.6225 121.461 23.3585C119.798 22.0679 118.546 20.4578 117.706 18.528C116.899 16.5717 116.63 14.5279 116.897 12.3967C117.164 10.2656 117.927 8.36672 119.187 6.70012C120.482 5.0069 122.092 3.75522 124.018 2.9451C125.978 2.10834 128.024 1.82345 130.155 2.0904ZM129.474 7.89592C127.8 7.68616 126.327 8.08919 125.055 9.10499C123.788 10.0904 123.047 11.4355 122.834 13.1404C122.62 14.8453 123.004 16.3468 123.986 17.6448C124.971 18.9124 126.301 19.6511 127.975 19.8608C129.65 20.0706 131.106 19.6809 132.343 18.6917C133.584 17.6721 134.311 16.3098 134.524 14.6049C134.738 12.9 134.367 11.4156 133.412 10.1519C132.461 8.85765 131.149 8.10567 129.474 7.89592Z"
                  fill="#4082E6"
                />
                <path
                  d="M116.801 24.1023C120.761 29.7754 127.414 32.2655 135.59 28.0666"
                  stroke="url(#paint0_linear_1505_378)"
                  strokeWidth="4.57197"
                  strokeLinecap="round"
                />
                <circle
                  cx="128.563"
                  cy="13.4737"
                  r="3.20038"
                  transform="rotate(7.13997 128.563 13.4737)"
                  fill="#FEF747"
                />
                <path
                  d="M144.9 6.32498L150.206 2.21021V16.967L157.846 9.37296H165.486L156.742 18.2097L166.959 32.3852H160.286L152.692 21.9837L150.206 24.469V32.3852H144.223L144.9 6.32498Z"
                  fill="#4082E6"
                />
                <path
                  d="M179.122 32.3852C177.346 32.3852 175.707 32.0942 174.207 31.5123C172.706 30.8998 171.496 30.0117 170.577 28.8479C169.689 27.6534 169.245 26.2293 169.245 24.5755H174.942C174.942 25.3105 175.34 25.9077 176.136 26.3671C176.963 26.8265 178.004 27.0562 179.26 27.0562C180.454 27.0562 181.373 26.8571 182.016 26.459C182.69 26.0302 183.027 25.4943 183.027 24.8511C183.027 24.1773 182.66 23.7026 181.925 23.427C181.19 23.1514 180.01 22.8757 178.387 22.6001C176.58 22.2938 175.08 21.9569 173.885 21.5894C172.691 21.1913 171.649 20.5328 170.761 19.614C169.904 18.6646 169.475 17.3324 169.475 15.6173C169.475 14.3004 169.888 13.1212 170.715 12.0799C171.573 11.008 172.721 10.1811 174.161 9.59921C175.6 8.98668 177.208 8.68042 178.984 8.68042C181.741 8.68042 183.992 9.3542 185.738 10.7018C187.483 12.0187 188.356 13.8563 188.356 16.2145H182.66C182.66 15.5713 182.277 15.0354 181.511 14.6066C180.776 14.1778 179.903 13.9635 178.893 13.9635C177.912 13.9635 177.086 14.1625 176.412 14.5607C175.769 14.9588 175.447 15.4642 175.447 16.0767C175.447 16.628 175.799 17.0414 176.504 17.317C177.208 17.5927 178.326 17.853 179.857 18.098C181.664 18.4043 183.18 18.7565 184.405 19.1546C185.63 19.5221 186.702 20.1806 187.621 21.13C188.54 22.0488 188.999 23.3351 188.999 24.9889C189.03 27.439 188.126 29.2919 186.289 30.5476C184.482 31.7727 182.093 32.3852 179.122 32.3852Z"
                  fill="#4082E6"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1505_378"
                    x1="116.392"
                    y1="26.039"
                    x2="135.181"
                    y2="30.0033"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4082E6" />
                    <stop offset="1" stopColor="#FEF747" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-16 max-w-xl h-20 mx-auto md:mx-0 text-center md:text-left"
            >
              <TypeAnimation
                sequence={[
                  "BNSP-Certified Web Programmer", 1000,
                  "Frontend Developer & UI/UX Enthusiast", 1000,
                  "Web Programmer with BNSP Certification and over 2 years of experience in Frontend Development and UI/UX Design", 1000
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
                <Image
                  src="/setiady.png"
                  alt="Setiady Ibrahim Anwar"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Floating design elements */}
              <motion.div
                className="absolute top-10 right-0 w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md"
                animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Code className="w-6 h-6 text-indigo-500" />
              </motion.div>

              <motion.div
                className="absolute bottom-20 left-0 w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md"
                animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <Palette className="w-6 h-6 text-orange-500" />
              </motion.div>

              <motion.div
                className="absolute top-1/3 -right-6 w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md"
                animate={{ x: [0, 10, 0], rotate: [0, 15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <MousePointer className="w-6 h-6 text-blue-500" />
              </motion.div>

              <motion.div
                className="absolute top-2/3 -left-6 w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md"
                animate={{ x: [0, -10, 0], rotate: [0, -15, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                <Users className="w-6 h-6 text-green-500" />
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-orange-200 dark:bg-orange-700/30 blur-lg"
              ></motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
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
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Setiadyanwar
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    UI/UX Designer | Frontend Dev
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
