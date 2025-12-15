"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Search } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface DesktopNavProps {
    onSearchOpen: () => void;
}

const mainNavLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Experience", href: "/experience" },
    { name: "About", href: "/about" },
];

export default function DesktopNav({ onSearchOpen }: DesktopNavProps) {
    const { theme, setTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    // Set mounted state after client-side hydration
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        // Check initial scroll position
        setIsScrolled(window.scrollY > 10);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={cn(
            "hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
            isScrolled
                ? "py-4 px-4"
                : "py-6 px-0"
        )}>
            <div className={cn("transition-all duration-500 ease-in-out", isScrolled ? "container mx-auto" : "w-full")}>
                <motion.header
                    initial={false}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className={cn(
                        "transition-all duration-500 ease-in-out relative overflow-hidden",
                        isScrolled
                            ? "rounded-3xl bg-white/70 dark:bg-black/70 backdrop-blur-3xl backdrop-saturate-150 shadow-2xl shadow-gray-200/20 dark:shadow-black/20 border border-white/20 dark:border-white/10"
                            : "rounded-none bg-white/5 dark:bg-black/5 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/10 dark:border-white/5"
                    )}
                    suppressHydrationWarning
                >
                    <div className={cn(
                        "transition-all duration-500 ease-in-out",
                        isScrolled
                            ? "px-8 py-4"
                            : "container mx-auto px-4 py-4"
                    )}>
                        {/* Desktop Navigation */}
                        <div className="flex items-center justify-between">
                            <Link
                                href="/"
                                className="text-2xl font-bold pb-1 leading-tight bg-gradient-to-r from-indigo-600 via-orange-500 to-indigo-600 dark:from-indigo-400 dark:via-orange-500 dark:to-indigo-400 bg-clip-text text-transparent transition-all hover:scale-105"
                                style={{
                                    backgroundSize: '200% auto',
                                    animation: 'shine 3s linear infinite',
                                }}
                            >
                                Setiadyanwar<span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">.</span>
                            </Link>

                            <style jsx>{`
                                @keyframes shine {
                                    to {
                                        background-position: 200% center;
                                    }
                                }
                            `}</style>

                            <div className="flex items-center space-x-8">
                                {/* Main Navigation */}
                                <nav className="flex items-center space-x-8">
                                    {mainNavLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={cn(
                                                "transition-all relative py-2 px-1 text-sm font-medium",
                                                pathname === link.href
                                                    ? "text-indigo-600 dark:text-indigo-400"
                                                    : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                                            )}
                                        >
                                            {link.name}
                                            {pathname === link.href && (
                                                <motion.span
                                                    layoutId="underline"
                                                    className="absolute left-0 bottom-0 h-0.5 w-full bg-indigo-600 dark:bg-indigo-400 rounded-full"
                                                />
                                            )}
                                        </Link>
                                    ))}
                                </nav>

                                {/* Search and Theme Toggle */}
                                <div className="flex items-center space-x-4">
                                    {/* Search Button */}
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={onSearchOpen}
                                        aria-label="Search"
                                        className="h-10 w-10 rounded-2xl bg-white/90 dark:bg-black/90 backdrop-blur-xl backdrop-saturate-150 border border-gray-300/60 dark:border-gray-600/60 hover:bg-white dark:hover:bg-black transition-all shadow-lg shadow-gray-200/30 dark:shadow-black/30 text-gray-700 dark:text-gray-200"
                                    >
                                        <Search className="h-5 w-5" />
                                    </Button>

                                    {/* Theme Toggle */}
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                        aria-label="Toggle theme"
                                        className="h-10 w-10 rounded-2xl bg-white/90 dark:bg-black/90 backdrop-blur-xl backdrop-saturate-150 border border-gray-300/60 dark:border-gray-600/60 hover:bg-white dark:hover:bg-black transition-all shadow-lg shadow-gray-200/30 dark:shadow-black/30 text-gray-700 dark:text-gray-200"
                                    >
                                        {mounted && theme === "dark" ? (
                                            <Sun className="h-5 w-5 text-amber-500" />
                                        ) : mounted ? (
                                            <Moon className="h-5 w-5 text-indigo-600" />
                                        ) : (
                                            <Moon className="h-5 w-5 text-indigo-600" />
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.header>
            </div>
        </div>
    );
}
