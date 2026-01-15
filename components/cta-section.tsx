"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const contactRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (contactRef.current && !contactRef.current.contains(event.target as Node)) {
                setIsContactOpen(false);
            }
        };

        if (isContactOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isContactOpen]);

    return (
        <section className="relative w-full overflow-x-clip overflow-y-visible px-0 z-30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 bg-indigo-600 dark:bg-indigo-700 rounded-t-[2.5rem]"
            >
                <div className="container mx-auto px-6 md:px-12 py-12 md:py-16">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
                        {/* Left Side: Content */}
                        <div className="flex-1 text-center md:text-left">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight"
                            >
                                Ready to Elevate Your <br className="hidden lg:block" /> Digital Product?
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-base md:text-lg text-indigo-100 max-w-xl font-normal leading-relaxed"
                            >
                                Hire me for <span className="text-white font-bold underline decoration-white/30 underline-offset-4">Strategic UI/UX Design</span> and <span className="text-white font-bold underline decoration-white/30 underline-offset-4">High-Performance Development</span>.
                                Let&apos;s build something that matters.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="mt-6 flex flex-wrap justify-center md:justify-start gap-6 text-xs md:text-sm text-indigo-200"
                            >
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    <span>setiadyanwar@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>Tangerang, Indonesia</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side: Button */}
                        <div className="relative flex-shrink-0" ref={contactRef}>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <Button
                                    onClick={() => setIsContactOpen(!isContactOpen)}
                                    size="lg"
                                    className="bg-white text-indigo-600 hover:bg-gray-100 px-10 py-7 text-lg font-bold rounded-full transition-all duration-300 flex items-center gap-3 border-none"
                                >
                                    Get in Touch
                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isContactOpen ? 'rotate-180' : ''}`} />
                                </Button>
                            </motion.div>

                            <AnimatePresence>
                                {isContactOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute bottom-[calc(100%+12px)] md:bottom-auto md:top-[calc(100%+12px)] left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 w-[85vw] max-w-[260px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-2 z-[60] overflow-hidden"
                                    >
                                        <button
                                            onClick={() => {
                                                const message = `Halo Setiady! 👋\n\nI visited your portfolio and I'm interested in working with you.`;
                                                window.open(`https://wa.me/6289662007938?text=${encodeURIComponent(message)}`, '_blank');
                                                setIsContactOpen(false);
                                            }}
                                            className="w-full flex items-center gap-3 p-2 md:p-3 rounded-xl hover:bg-indigo-50 transition-colors group"
                                        >
                                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600 flex-shrink-0">
                                                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                                            </div>
                                            <div className="text-left min-w-0">
                                                <div className="text-sm font-bold text-gray-900 truncate">WhatsApp</div>
                                                <div className="text-[10px] text-gray-500 truncate">Fast Response</div>
                                            </div>
                                        </button>

                                        <button
                                            onClick={() => {
                                                window.location.href = `mailto:setiadyanwar@gmail.com?subject=Project Inquiry`;
                                                setIsContactOpen(false);
                                            }}
                                            className="w-full flex items-center gap-3 p-2 md:p-3 rounded-xl hover:bg-indigo-50 transition-colors group"
                                        >
                                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 flex-shrink-0">
                                                <Mail className="w-5 h-5 md:w-6 md:h-6" />
                                            </div>
                                            <div className="text-left min-w-0">
                                                <div className="text-sm font-bold text-gray-900 truncate">Email</div>
                                                <div className="text-[10px] text-gray-500 truncate">Official Channel</div>
                                            </div>
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Subtle decorative circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl pointer-events-none" />
            </motion.div>
        </section>
    );
}
