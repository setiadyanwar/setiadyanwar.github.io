"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { FaQuoteLeft } from "react-icons/fa"

const testimonials = [
    {
        name: "Moch. Adam Athallahrich",
        role: "Front End Developer at Telkomsigma",
        content: "Setiady has a high level of curiosity and is a very fast learner. I am impressed with how he handles technical challenges, and his strong work ethic makes him a valuable asset to any engineering team.",
        stars: 5,
        platform: "LinkedIn Recommendation"
    },
    {
        name: "Mochamad Faishol Tri Afandi",
        role: "Officer at Telkomsigma",
        content: "Ady has exceptional technical capabilities. What distinguished him was not just his coding proficiency, but his remarkable UI/UX design skills. He perfectly bridges technical implementation with user-centered design.",
        stars: 5,
        platform: "LinkedIn Recommendation"
    },
    {
        name: "Sarah Wijaya",
        role: "Creative Partner",
        content: "A highly collaborative professional who brings both strategic design thinking and solid development skills to the table. He consistently delivers high-quality work that exceeds expectations.",
        stars: 5,
        platform: "Project Collaboration"
    }
]

export default function TestimonialsSection() {
    // Duplicate testimonials for smooth infinite loop
    const doubledTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

    return (
        <section className="py-24 bg-gray-50 dark:bg-black/40 overflow-hidden relative">
            <div className="container mx-auto px-4 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto space-y-4"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest">
                        <Star className="w-3 h-3 fill-current" />
                        Recommendations
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                        What People Say About My Work
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                        Testimonials and recommendations from colleagues, clients, and collaborators.
                    </p>
                </motion.div>
            </div>

            {/* Marquee Container */}
            <div className="relative flex flex-col justify-center overflow-hidden testimonials-marquee-container">
                {/* Fade Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-gray-50 dark:from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-gray-50 dark:from-[#0a0a0a] to-transparent z-20 pointer-events-none" />

                <div className="flex gap-6 py-4 px-4 pr-10 animate-marquee-slow hover-pause active-pause" style={{ width: "max-content" }}>
                    {doubledTestimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="bg-white/50 dark:bg-white/5 p-8 rounded-2xl border border-gray-200/60 dark:border-white/10 hover:border-indigo-500/30 transition-all duration-300 group relative w-[320px] md:w-[450px] flex-shrink-0 hover:scale-[1.02] hover:bg-white dark:hover:bg-white/[0.08]"
                        >
                            <FaQuoteLeft className="w-6 h-6 text-indigo-500/20 mb-6 group-hover:text-indigo-500/40 transition-colors" />

                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10 text-sm md:text-base italic font-medium line-clamp-4 md:line-clamp-none">
                                &quot;{testimonial.content}&quot;
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-indigo-500/10 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center font-bold text-indigo-600 dark:text-gray-400 text-sm">
                                    {testimonial.name[0]}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-gray-900 dark:text-white text-sm truncate">{testimonial.name}</h4>
                                    <div className="flex items-center gap-2">
                                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold truncate max-w-[120px] md:max-w-none">{testimonial.role}</p>
                                        <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700 flex-shrink-0" />
                                        <div className="flex gap-0.5 flex-shrink-0">
                                            {[...Array(testimonial.stars)].map((_, i) => (
                                                <Star key={i} className="w-2.5 h-2.5 text-amber-400 fill-current" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <style jsx global>{`
                    .animate-marquee-slow {
                        animation: marquee-testimonial 60s linear infinite;
                    }
                    .hover-pause:hover {
                        animation-play-state: paused;
                    }
                    .active-pause:active {
                        animation-play-state: paused;
                    }
                    @keyframes marquee-testimonial {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                `}</style>
            </div>
        </section>
    )
}
