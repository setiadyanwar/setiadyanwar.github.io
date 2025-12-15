"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Search, X, Home, User, Briefcase, FolderOpen, Code, Palette, Globe } from "lucide-react";
import { SEARCH_DATA, type SearchItem } from "@/lib/data/search-data";

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// Icon renderer function
function getIcon(iconName: string) {
    const iconProps = { className: "h-4 w-4" };
    switch (iconName) {
        case "Home": return <Home {...iconProps} />;
        case "FolderOpen": return <FolderOpen {...iconProps} />;
        case "Briefcase": return <Briefcase {...iconProps} />;
        case "User": return <User {...iconProps} />;
        case "Code": return <Code {...iconProps} />;
        case "Palette": return <Palette {...iconProps} />;
        case "Globe": return <Globe {...iconProps} />;
        default: return <Search {...iconProps} />;
    }
}

// Scroll to section function with specific content highlighting
function scrollToSection(href: string, activityId?: number) {
    if (href.startsWith('/#')) {
        const sectionId = href.substring(2); // Remove '/#' to get section id
        // Small delay to ensure modal is closed before scrolling
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // If it's activities section and we have specific activity, trigger custom event
                if (sectionId === 'activities' && activityId) {
                    window.dispatchEvent(new CustomEvent('showSpecificActivity', {
                        detail: { activityId: activityId }
                    }));
                }
            }
        }, 100);
    } else {
        // For full page navigation
        window.location.href = href;
    }
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Filter suggestions based on search query
    const filteredSuggestions = searchQuery
        ? SEARCH_DATA.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase())) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : SEARCH_DATA;

    // Reset selected index when search query changes
    useEffect(() => {
        setSelectedIndex(0);
    }, [searchQuery]);

    // Handle keyboard navigation
    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (!isOpen) return;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(prev =>
                    prev < filteredSuggestions.length - 1 ? prev + 1 : 0
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex(prev =>
                    prev > 0 ? prev - 1 : filteredSuggestions.length - 1
                );
                break;
            case 'Enter':
                e.preventDefault();
                if (filteredSuggestions[selectedIndex]) {
                    const item = filteredSuggestions[selectedIndex];
                    scrollToSection(item.href, item.activityId);
                    onClose();
                }
                break;
            case 'Escape':
                onClose();
                break;
        }
    }, [isOpen, filteredSuggestions, selectedIndex, onClose]);

    // Close search on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            return () => document.removeEventListener('keydown', handleEscape);
        }
    }, [isOpen, onClose]);

    // Reset search query when modal closes
    useEffect(() => {
        if (!isOpen) {
            setSearchQuery("");
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

            {/* Search Modal - Minimalist */}
            <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="relative w-full max-w-lg bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-xl shadow-xl border border-gray-200/40 dark:border-gray-700/40"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Search Input - Compact */}
                <div className="p-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="w-full pl-10 pr-10 py-3 text-base bg-transparent border-none outline-none text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                            autoFocus
                        />
                        <button
                            onClick={onClose}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                {/* Empty State - Show when no search query */}
                {!searchQuery && (
                    <div className="border-t border-gray-200/40 dark:border-gray-700/40 p-6 text-center">
                        <Search className="h-8 w-8 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                            Search anything on this website
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">
                            Try: &quot;react&quot;, &quot;typescript&quot;, &quot;figma&quot;, &quot;laravel&quot;, &quot;agile&quot;, &quot;bnsp&quot;, &quot;performance&quot;
                        </p>
                    </div>
                )}

                {/* Search Suggestions - Simple and Clean */}
                {searchQuery && filteredSuggestions.length > 0 && (
                    <div className="border-t border-gray-200/40 dark:border-gray-700/40 max-h-96 overflow-y-auto">
                        <div className="p-2">
                            {filteredSuggestions.map((item, index) => (
                                <button
                                    key={`${item.href}-${index}`}
                                    onClick={() => {
                                        scrollToSection(item.href, item.activityId);
                                        onClose();
                                    }}
                                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-150 group text-left ${index === selectedIndex
                                            ? 'bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/40'
                                            : 'hover:bg-gray-100/60 dark:hover:bg-gray-800/40'
                                        }`}
                                >
                                    <div className={`${index === selectedIndex
                                            ? 'text-blue-600 dark:text-blue-400'
                                            : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300'
                                        }`}>
                                        {getIcon(item.icon)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className={`text-sm font-medium ${index === selectedIndex
                                                ? 'text-blue-900 dark:text-blue-100'
                                                : 'text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300'
                                            }`}>
                                            {item.name}
                                        </div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                            {item.description}
                                        </div>
                                        {searchQuery && item.keywords.find(keyword =>
                                            keyword.toLowerCase().includes(searchQuery.toLowerCase())
                                        ) && (
                                                <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                                    Matched: {item.keywords.find(keyword =>
                                                        keyword.toLowerCase().includes(searchQuery.toLowerCase())
                                                    )}
                                                </div>
                                            )}
                                    </div>
                                    {index === selectedIndex && (
                                        <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                                            Enter
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* No Results */}
                {searchQuery && filteredSuggestions.length === 0 && (
                    <div className="border-t border-gray-200/40 dark:border-gray-700/40 p-6 text-center">
                        <Search className="h-8 w-8 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                            No results found for &quot;{searchQuery}&quot;
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">
                            Try searching for skills, activities, or navigation
                        </p>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}
