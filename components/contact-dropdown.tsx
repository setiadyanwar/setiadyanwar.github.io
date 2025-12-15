"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactDropdown() {
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
        <div className="relative" ref={contactRef}>
            <Button
                onClick={() => setIsContactOpen(!isContactOpen)}
                className={`rounded-full px-4 py-6 transition-all duration-200 btn-splash ${isContactOpen
                        ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-2 border-gray-700 dark:border-gray-300 hover:text-gray-800 dark:hover:text-gray-200'
                        : 'bg-transparent text-gray-700 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400'
                    }`}
                size="lg"
            >
                <MessageCircle className="h-5 w-5" />
            </Button>

            {/* Contact Dropdown */}
            {isContactOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-1 md:mt-2 w-48 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
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
        </div>
    );
}
