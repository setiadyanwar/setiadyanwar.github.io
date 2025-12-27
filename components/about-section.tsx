"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Globe, Instagram, Github, Linkedin, Mail, ArrowUpRight, Award, X } from "lucide-react"
import { FaBehance, FaDribbble, FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa"
import { FaMedium } from "react-icons/fa6"

export default function AboutSection() {
    const [selectedCert, setSelectedCert] = useState<number | null>(null)
    const scrollRefLeft = useRef<HTMLDivElement>(null)
    const scrollRefRight = useRef<HTMLDivElement>(null)

    const certificates = [
        { id: 1, title: "BNSP Web Developer Professional Certificate", image: "/sertifikat/bnsp-setiady.png" },
        { id: 2, title: "Google Cloud Skills Boost - Cloud Computing", image: "/sertifikat/google.png" },
        { id: 3, title: "Dicoding - Frontend Web Development", image: "/sertifikat/sertif-dicoding.png" },
        { id: 4, title: "SKK - Web Programmer Certification", image: "/sertifikat/skk%20sample.png" },
    ]

    const clients = [
        { id: 1, name: "Google", logo: "/client/google.svg" },
        { id: 2, name: "MicroIT", logo: "/client/microit.svg" },
        { id: 3, name: "svipb", logo: "/client/svipb.png" },
        { id: 4, name: "Agrimovie", logo: "/client/Agrimovie.png" },
        { id: 5, name: "niagahoster", logo: "/client/niagahoster.svg" },
        { id: 6, name: "GDGOC", logo: "/client/gdgoc.svg" },
        { id: 7, name: "Upala", logo: "/client/upala.png" },
        { id: 8, name: "Kreavoks", logo: "/client/kreavoks.svg" },
        { id: 9, name: "IPB University", logo: "/client/ipb.png" },
    ]

    // Split clients into two groups for two directions
    const clientsRow1 = clients.slice(0, 5)
    const clientsRow2 = clients.slice(5)

    // Infinite Auto-scrolling effect for both directions
    useEffect(() => {
        const scrollContainerLeft = scrollRefLeft.current
        const scrollContainerRight = scrollRefRight.current

        let scrollPosLeft = 0
        let scrollPosRight = 0
        const scrollSpeed = 0.5

        const scroll = () => {
            // Scroll Left (to the left)
            if (scrollContainerLeft) {
                scrollPosLeft += scrollSpeed
                if (scrollPosLeft >= scrollContainerLeft.scrollWidth / 2) scrollPosLeft = 0
                scrollContainerLeft.scrollLeft = scrollPosLeft
            }

            // Scroll Right (reverse direction)
            if (scrollContainerRight) {
                scrollPosRight += scrollSpeed
                if (scrollPosRight >= scrollContainerRight.scrollWidth / 2) scrollPosRight = 0
                // For "scrolling right" visually, we can just invert the scrollLeft logically or use a different math
                // but simplest is just adjusting the scroll speed and initial position
                scrollContainerRight.scrollLeft = (scrollContainerRight.scrollWidth / 2) - scrollPosRight
            }

            requestAnimationFrame(scroll)
        }
        const animation = requestAnimationFrame(scroll)
        return () => cancelAnimationFrame(animation)
    }, [])

    return (
        <section id="about" className="py-24 relative min-h-screen flex items-center overflow-x-clip">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Portrait */}
                    <div className="lg:col-span-5 flex flex-col items-center relative py-10">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-gray-500 dark:text-gray-400 font-normal text-sm md:text-base mb-2 relative z-10"
                        >
                            FrontEnd Developer & UI/UX Designer
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl lg:text-4xl font-bold dark:text-white text-center leading-tight relative z-10 mb-6 px-4"
                        >
                            Setiady Ibrahim Anwar
                        </motion.h2>

                        {/* Photo Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full max-w-[550px] flex items-end justify-center z-10 overflow-visible"
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] lg:w-[150%] h-[120%] lg:h-[150%] rounded-full bg-indigo-600/20 dark:bg-indigo-500/20 blur-[80px] lg:blur-[120px] z-0 pointer-events-none" />

                            <div className="relative z-10 w-full flex items-end justify-center overflow-visible">
                                <Image
                                    src="/setiady.png"
                                    alt="Setiady Ibrahim Anwar"
                                    width={1000}
                                    height={1200}
                                    className="object-contain w-full h-auto drop-shadow-2xl scale-110 origin-bottom"
                                    style={{
                                        maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                                        WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
                                    }}
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:col-span-7 space-y-8 lg:space-y-10 pt-10">
                        {/* 1. About Me */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                                <span className="text-xs font-bold uppercase tracking-widest">About Me</span>
                                <div className="h-[1px] flex-1 bg-gray-100 dark:bg-white/10" />
                            </div>
                            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                                I bridge the gap between human empathy and technical precision. My approach centers on deep <span className="text-indigo-600 dark:text-indigo-400 font-semibold">user-centered thinking</span>—understanding their needs to craft <span className="text-indigo-600 dark:text-indigo-400 font-semibold">visual designs</span> that resonate and <span className="text-indigo-600 dark:text-indigo-400 font-semibold">code implementations</span> that perform.
                            </p>
                        </motion.div>

                        {/* 2. Collaborating with Industry Leaders (Two Directions) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                                <span className="text-xs font-bold uppercase tracking-widest">Collaborating with Industry Leaders</span>
                                <div className="h-[1px] flex-1 bg-gray-100 dark:bg-white/10" />
                            </div>
                            <div className="relative group space-y-4">
                                {/* Row 1: Scroll Left */}
                                <div
                                    ref={scrollRefLeft}
                                    className="flex space-x-12 py-1 overflow-x-auto scrollbar-hide no-scrollbar"
                                    style={{
                                        scrollbarWidth: "none",
                                        msOverflowStyle: "none",
                                        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                                    }}
                                >
                                    {[...clientsRow1, ...clientsRow1].map((client, index) => (
                                        <div
                                            key={`${client.id}-r1-${index}`}
                                            className="flex-shrink-0 h-6 md:h-8 flex items-center justify-center filter grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                                        >
                                            <img src={client.logo} alt={client.name} className="h-full w-auto object-contain" />
                                        </div>
                                    ))}
                                </div>

                                {/* Row 2: Scroll Right */}
                                <div
                                    ref={scrollRefRight}
                                    className="flex space-x-12 py-1 overflow-x-auto scrollbar-hide no-scrollbar"
                                    style={{
                                        scrollbarWidth: "none",
                                        msOverflowStyle: "none",
                                        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                                    }}
                                >
                                    {[...clientsRow2, ...clientsRow2].map((client, index) => (
                                        <div
                                            key={`${client.id}-r2-${index}`}
                                            className="flex-shrink-0 h-6 md:h-8 flex items-center justify-center filter grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                                        >
                                            <img src={client.logo} alt={client.name} className="h-full w-auto object-contain" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* 3. Certifications */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                                <Award className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-widest">Certifications</span>
                                <div className="h-[1px] flex-1 bg-gray-100 dark:bg-white/10" />
                            </div>

                            <div className="flex flex-wrap gap-4">
                                {certificates.map((cert, index) => (
                                    <motion.div
                                        key={cert.id}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setSelectedCert(index)}
                                        className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden cursor-pointer border border-gray-200 dark:border-white/10 group bg-white dark:bg-white/5 flex-shrink-0"
                                    >
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-cover transition-all duration-500"
                                        />
                                        <div className="absolute inset-0 bg-indigo-600/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[1px]">
                                            <Award className="w-4 h-4 text-white" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* 4. Core Values & Skills */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                                <span className="text-xs font-bold uppercase tracking-widest">Core Values & Skills</span>
                                <div className="h-[1px] flex-1 bg-gray-100 dark:bg-white/10" />
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "User-Centered Design", "User Empathy", "Visual Design Strategy",
                                    "Clean Code Implementation", "Design-to-Code Handoff", "UX Research",
                                    "Prototyping", "Systematic Thinking", "Interface Interaction",
                                    "Problem Solving"
                                ].map((skill, index) => (
                                    <Badge
                                        key={index}
                                        variant="outline"
                                        className="px-3 py-1 text-xs md:text-sm rounded-full border-indigo-500/20 dark:border-white/10 bg-indigo-50/30 dark:bg-white/5 text-gray-600 dark:text-gray-400 font-medium cursor-default shadow-sm"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>

                        {/* 5. Sosmed Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-7 gap-3 md:gap-4"
                        >
                            {[
                                { name: 'LinkedIn', icon: FaLinkedin, href: "https://linkedin.com/in/setiadyanwar", color: "hover:text-blue-500" },
                                { name: 'Instagram', icon: FaInstagram, href: "https://www.instagram.com/setiadyanwarr", color: "hover:text-pink-500" },
                                { name: 'GitHub', icon: FaGithub, href: "https://github.com/setiadyanwar", color: "hover:text-gray-900 dark:hover:text-white" },
                                { name: 'Email', icon: FaEnvelope, href: "mailto:setiadyanwar@gmail.com", color: "hover:text-red-500" },
                                {
                                    name: 'Behance',
                                    icon: FaBehance,
                                    href: "https://behance.com/setiadyanwar",
                                    color: "hover:text-blue-400"
                                },
                                {
                                    name: 'Dribbble',
                                    icon: FaDribbble,
                                    href: "https://dribbble.com/setiadyanwar",
                                    color: "hover:text-pink-400"
                                },
                                {
                                    name: 'Medium',
                                    icon: FaMedium,
                                    href: "https://medium.com/@setiadyanwar",
                                    color: "hover:text-gray-900 dark:hover:text-white"
                                }
                            ].map((social, id) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={id}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative flex flex-col items-center justify-center p-4 md:p-6 bg-gray-50/50 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 rounded-3xl transition-all duration-300 hover:bg-white dark:hover:bg-white/10 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 overflow-hidden"
                                    >
                                        <div className={`relative z-10 transition-colors duration-300 ${social.color}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <ArrowUpRight className="absolute top-2 right-2 w-3 h-3 text-gray-300 dark:text-gray-600 group-hover:text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </a>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCert !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-6xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-[#0a0a0a]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-6 right-6 z-[110] p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all backdrop-blur-xl border border-white/20 shadow-xl"
                                onClick={() => setSelectedCert(null)}
                            >
                                <X className="h-6 w-6" />
                            </button>

                            <div className="flex-1 flex items-center justify-center p-2 md:p-6 bg-gray-100 dark:bg-gray-950 overflow-auto">
                                <img
                                    src={certificates[selectedCert].image}
                                    alt={certificates[selectedCert].title}
                                    className="max-w-full max-h-[75vh] object-contain shadow-2xl"
                                />
                            </div>

                            <div className="p-6 md:p-10 border-t border-gray-100 dark:border-white/5 bg-white dark:bg-[#0a0a0a] flex flex-col items-center gap-3">
                                <div className="flex items-center gap-2 px-4 py-1.5 bg-indigo-600/10 rounded-full border border-indigo-600/20">
                                    <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                                    <span className="text-[10px] md:text-xs text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-[0.2em]">Verified Professional Credential</span>
                                </div>
                                <h3 className="text-gray-900 dark:text-white font-bold text-xl md:text-3xl text-center leading-tight">
                                    {certificates[selectedCert].title}
                                </h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
