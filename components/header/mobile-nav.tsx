"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Search, Menu, Home, Briefcase, FolderOpen } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface MobileNavProps {
    onSearchOpen: () => void;
}

const mainNavLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Experience", href: "/experience" },
];

function getNavIcon(href: string) {
    switch (href) {
        case "/": return <Home className="h-4 w-4" />;
        case "/portfolio": return <FolderOpen className="h-4 w-4" />;
        case "/experience": return <Briefcase className="h-4 w-4" />;
        default: return <Home className="h-4 w-4" />;
    }
}

export default function MobileNav({ onSearchOpen }: MobileNavProps) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    // Set mounted state after client-side hydration
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="md:hidden fixed bottom-6 left-0 right-0 z-[100] px-4">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="max-w-md mx-auto"
            >
                {/* Main Floating Nav Bar */}
                <header className="bg-white/40 dark:bg-black/40 backdrop-blur-2xl backdrop-saturate-150 border border-white/40 dark:border-white/20 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] px-2 py-2 ring-1 ring-white/20 dark:ring-white/5">
                    <div className="flex items-center justify-between gap-1">
                        {/* Navigation Links */}
                        <div className="flex items-center gap-1">
                            {mainNavLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "relative flex flex-col items-center justify-center h-12 px-4 rounded-full transition-colors duration-300",
                                            isActive ? "text-indigo-600 dark:text-indigo-400" : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                                        )}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-pill"
                                                className="absolute inset-0 bg-indigo-50 dark:bg-indigo-950/40 rounded-full -z-10"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <div className="flex flex-col items-center">
                                            <motion.div
                                                animate={{ scale: isActive ? 1.1 : 1 }}
                                                className="mb-0.5"
                                            >
                                                {getNavIcon(link.href)}
                                            </motion.div>
                                            <span className="text-[10px] font-bold uppercase tracking-tighter mt-[-2px]">
                                                {link.name}
                                            </span>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Separator */}
                        <div className="w-[1px] h-6 bg-gray-200 dark:bg-white/10 mx-1" />

                        {/* Utility Buttons */}
                        <div className="flex items-center gap-1">
                            {/* Search Button */}
                            <button
                                onClick={onSearchOpen}
                                className="flex flex-col items-center justify-center w-11 h-12 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
                            >
                                <Search className="h-5 w-5" />
                                <span className="text-[9px] font-bold uppercase tracking-tighter mt-0.5">Search</span>
                            </button>

                            {/* Theme Toggle */}
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="flex flex-col items-center justify-center w-11 h-12 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
                            >
                                {mounted && (
                                    theme === "dark" ? (
                                        <Sun className="h-5 w-5 text-amber-500" />
                                    ) : (
                                        <Moon className="h-5 w-5 text-indigo-600" />
                                    )
                                )}
                                <span className="text-[9px] font-bold uppercase tracking-tighter mt-0.5">Mode</span>
                            </button>
                        </div>
                    </div>
                </header>
            </motion.div>
        </div>
    );
}
