"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Search, Menu, Home, Briefcase, FolderOpen } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    // Set mounted state after client-side hydration
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
            <motion.header
                initial={false}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 dark:bg-black/80 backdrop-blur-3xl backdrop-saturate-150 border-t border-white/20 dark:border-white/10 shadow-2xl shadow-gray-200/20 dark:shadow-black/20"
                suppressHydrationWarning
            >
                <div className="px-4 py-3 safe-area-pb">
                    {/* Mobile Bottom Navigation */}
                    <div className="flex items-center justify-around">
                        {mainNavLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "flex flex-col items-center space-y-1 py-2 px-3 rounded-xl transition-all min-w-0",
                                    pathname === link.href
                                        ? "text-indigo-600 dark:text-indigo-400"
                                        : "text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                                )}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <div className={cn(
                                    "w-7 h-7 rounded-full flex items-center justify-center transition-all",
                                    pathname === link.href
                                        ? "bg-indigo-600 text-white dark:bg-indigo-400 dark:text-gray-900"
                                        : "bg-gray-200/80 dark:bg-gray-700/80 text-gray-600 dark:text-gray-400"
                                )}>
                                    {getNavIcon(link.href)}
                                </div>
                                <span className="text-xs font-medium truncate">{link.name}</span>
                            </Link>
                        ))}

                        {/* Search Button */}
                        <button
                            onClick={onSearchOpen}
                            className="flex flex-col items-center space-y-1 py-2 px-3 rounded-xl transition-all min-w-0"
                        >
                            <div className="w-7 h-7 rounded-full flex items-center justify-center bg-gray-200/80 dark:bg-gray-700/80 text-gray-600 dark:text-gray-400">
                                <Search className="h-4 w-4" />
                            </div>
                            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Search</span>
                        </button>

                        {/* Settings/More Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="flex flex-col items-center space-y-1 py-2 px-3 rounded-xl transition-all min-w-0"
                        >
                            <div className="w-7 h-7 rounded-full flex items-center justify-center bg-gray-200/80 dark:bg-gray-700/80 text-gray-600 dark:text-gray-400">
                                <Menu className="h-4 w-4" />
                            </div>
                            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">More</span>
                        </button>
                    </div>

                    {/* Expandable Menu */}
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-gray-200/20 dark:border-gray-700/20 mt-3 pt-3"
                        >
                            <div className="flex items-center justify-between">
                                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Settings</div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                    aria-label="Toggle theme"
                                    className="h-8 w-8 rounded-lg bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-gray-300/50 dark:border-gray-600/50 hover:bg-white dark:hover:bg-black transition-all shadow-md"
                                >
                                    {mounted && theme === "dark" ? (
                                        <Sun className="h-4 w-4 text-amber-500" />
                                    ) : mounted ? (
                                        <Moon className="h-4 w-4 text-indigo-600" />
                                    ) : (
                                        <Moon className="h-4 w-4 text-indigo-600" />
                                    )}
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </motion.header>
        </div>
    );
}
