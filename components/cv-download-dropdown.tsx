"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Download, Code, Palette, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CvDownloadDropdown() {
    const [isCvOpen, setIsCvOpen] = useState(false);
    const cvRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (cvRef.current && !cvRef.current.contains(event.target as Node)) {
                setIsCvOpen(false);
            }
        };

        if (isCvOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isCvOpen]);

    return (
        <div className="relative" ref={cvRef}>
            <Button
                onClick={() => setIsCvOpen(!isCvOpen)}
                variant="outline"
                size="lg"
                className={`border-2 border-gray-600 dark:border-gray-400 text-gray-800 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-300 rounded-full px-4 py-6 font-medium transition-all duration-200 group btn-splash ${isCvOpen ? 'bg-gray-100 dark:bg-gray-800' : ''
                    }`}
            >
                <div className="flex items-center gap-2">
                    <Download className="h-5 w-5 group-hover:animate-bounce" />
                    <span>Download CV</span>
                </div>
            </Button>

            {/* CV Dropdown */}
            {isCvOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
                >
                    <div className="py-2">
                        <a
                            href="/cv/cv_setiady_fullstack.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsCvOpen(false)}
                            className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                        >
                            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors">
                                <Code className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Fullstack Engineer</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Detailed technical focus</div>
                            </div>
                        </a>

                        <div className="h-px bg-gray-100 dark:bg-gray-800 mx-4 my-1"></div>

                        <a
                            href="/cv/cv_setiady.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsCvOpen(false)}
                            className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                        >
                            <div className="bg-pink-100 dark:bg-pink-900/30 p-2 rounded-lg group-hover:bg-pink-200 dark:group-hover:bg-pink-800/50 transition-colors">
                                <Palette className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">UI/UX Designer</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Design & product focus</div>
                            </div>
                        </a>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
