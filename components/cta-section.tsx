"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, ChevronDown } from "lucide-react";
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
        <section className="py-24 md:py-32">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl bg-gray-100 dark:bg-gray-900 p-8 md:p-12 lg:p-16 border border-gray-200 dark:border-gray-800"
                >
                    {/* Decorative elements - subtle */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    {/* Decorative grid pattern - subtle */}
                    <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 pb-2 leading-tight bg-gradient-to-r from-gray-900 via-indigo-600 to-gray-900 dark:from-white dark:via-indigo-400 dark:to-white bg-clip-text text-transparent animate-shine"
                            style={{
                                backgroundSize: '200% auto',
                                animation: 'shine 3s linear infinite',
                            }}
                        >
                            Let&apos;s Work Together
                        </motion.h2>

                        <style jsx>{`
                            @keyframes shine {
                                to {
                                    background-position: 200% center;
                                }
                            }
                        `}</style>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
                        >
                            Ready to bring your ideas to life? Let&apos;s create something amazing together.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative inline-block"
                            ref={contactRef}
                        >
                            <Button
                                onClick={() => setIsContactOpen(!isContactOpen)}
                                size="lg"
                                className="bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 px-8 py-6 text-base md:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Get in Touch
                                <ChevronDown className={`ml-2 h-5 w-5 transition-transform duration-300 ${isContactOpen ? 'rotate-180' : ''}`} />
                            </Button>

                            {/* Contact Dropdown - same as hero section */}
                            <AnimatePresence>
                                {isContactOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
                                    >
                                        <div className="py-2">
                                            <button
                                                onClick={() => {
                                                    const message = `Halo Setiady! 👋

Saya tertarik untuk berdiskusi tentang:
• Project collaboration
• Job opportunities  
• Consultation services
• Other inquiries

Mohon informasi lebih lanjut. Terima kasih!`;
                                                    const encodedMessage = encodeURIComponent(message);
                                                    window.open(`https://wa.me/6289662007938?text=${encodedMessage}`, '_blank');
                                                    setIsContactOpen(false);
                                                }}
                                                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                                            >
                                                <MessageCircle className="w-4 h-4 text-green-500 group-hover:text-green-600 dark:group-hover:text-green-400" />
                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">WhatsApp</span>
                                            </button>

                                            <div className="h-px bg-gray-100 dark:bg-gray-800 mx-2"></div>

                                            <button
                                                onClick={() => {
                                                    const subject = 'Collaboration Inquiry - Portfolio Website';
                                                    const body = `Dear Setiady,

I hope this email finds you well. I came across your portfolio website and I'm interested in discussing:

• Potential collaboration opportunities
• Job openings in your company
• Consultation services you offer
• Other business inquiries

I would appreciate the opportunity to connect and learn more about your services.

Best regards,
[Your Name]
[Your Company/Organization]
[Your Contact Information]`;
                                                    const encodedSubject = encodeURIComponent(subject);
                                                    const encodedBody = encodeURIComponent(body);
                                                    window.location.href = `mailto:setiadyanwar@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
                                                    setIsContactOpen(false);
                                                }}
                                                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                                            >
                                                <Mail className="w-4 h-4 text-blue-500 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</span>
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Optional: Quick contact info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400"
                        >
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span>setiadyanwar@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MessageCircle className="h-4 w-4" />
                                <span>Available for freelance</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
