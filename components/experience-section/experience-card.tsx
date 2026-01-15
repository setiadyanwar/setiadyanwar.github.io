"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface ExperienceCardProps {
    group: {
        company: string;
        logo?: string;
        experiences: any[];
        totalMonths?: number | null;
    };
    groupIndex: number;
    expandedItems: Set<string>;
    onToggleExpanded: (key: string) => void;
    formatDuration: (months: number) => string;
}

export default function ExperienceCard({
    group,
    groupIndex,
    expandedItems,
    onToggleExpanded,
    formatDuration,
}: ExperienceCardProps) {
    const groupKey = `group-${group.company}-${groupIndex}`;

    return (
        <motion.div
            key={groupKey}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
            className="border-b border-gray-200 dark:border-gray-800 last:border-b-0"
        >
            {/* Company Header */}
            <div className="py-4">
                <div className="flex items-center gap-4">
                    {/* Company Logo */}
                    {group.logo && (
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex-shrink-0 flex items-center justify-center">
                            <Image
                                src={group.logo.split("?")[0] || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23cccccc'/%3E%3C/svg%3E"}
                                alt={group.company}
                                width={48}
                                height={48}
                                className="object-contain p-1"
                                unoptimized
                            />
                        </div>
                    )}

                    <div className="flex-1 min-w-0">
                        <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                            {group.company}
                        </h3>
                        {group.totalMonths && (
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">
                                {formatDuration(group.totalMonths)}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Roles (Nested) */}
            <div className="space-y-0 border-l-2 border-gray-200 dark:border-gray-800 ml-5 md:ml-6 pl-4 md:pl-6">
                {group.experiences.map((exp: any, roleIndex: number) => {
                    const uniqueKey = exp.id || `${exp.title || ""}-${exp.company || ""}-${exp.period || ""}-${roleIndex}`;
                    const isExpanded = expandedItems.has(uniqueKey);
                    const hasDescription = exp.description || (exp.details && exp.details.length > 0);

                    return (
                        <div key={uniqueKey} className="border-b border-gray-200 dark:border-gray-800 last:border-b-0">
                            {/* Role Content */}
                            <div
                                className={`py-3 -ml-4 md:-ml-6 pl-[44px] md:pl-[40px] ${hasDescription ? "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900/50 rounded transition-colors" : ""}`}
                                onClick={() => {
                                    if (hasDescription) {
                                        onToggleExpanded(uniqueKey);
                                    }
                                }}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    {/* Left: Role Title */}
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-sm md:text-base font-medium text-gray-900 dark:text-white leading-tight">
                                            {exp.title}
                                        </h4>
                                    </div>

                                    {/* Right: Period & Location + Expand Icon */}
                                    <div className="flex items-start gap-3 flex-shrink-0">
                                        <div className="text-right whitespace-nowrap">
                                            <p className="text-xs md:text-sm font-medium text-gray-900 dark:text-white leading-tight">
                                                {exp.period}
                                            </p>
                                            {exp.location && (
                                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 leading-tight">{exp.location}</p>
                                            )}
                                        </div>

                                        {/* Expand/Collapse Icon */}
                                        {hasDescription && (
                                            <motion.div
                                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="flex-shrink-0 mt-0.5"
                                            >
                                                <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Accordion Content for Role */}
                            <AnimatePresence>
                                {isExpanded && hasDescription && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-4 pl-4 md:pl-6 space-y-3">
                                            {/* Description */}
                                            {exp.description && (
                                                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                    {exp.description}
                                                </p>
                                            )}

                                            {/* Details/Key Achievements */}
                                            {exp.details && exp.details.length > 0 && (
                                                <div>
                                                    <h5 className="text-xs font-semibold text-gray-900 dark:text-white mb-1.5">
                                                        Key Achievements:
                                                    </h5>
                                                    <ul className="list-disc list-inside space-y-0.5 text-xs text-gray-600 dark:text-gray-400">
                                                        {exp.details.map((detail: string, idx: number) => (
                                                            <li key={idx}>{detail}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Skills */}
                                            {exp.skills && exp.skills.length > 0 && (
                                                <div>
                                                    <h5 className="text-xs font-semibold text-gray-900 dark:text-white mb-1.5">
                                                        Skills:
                                                    </h5>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {exp.skills.map((skill: string, idx: number) => (
                                                            <span
                                                                key={idx}
                                                                className="px-2 py-0.5 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full"
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
}
