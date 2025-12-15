"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import {
  getWorkExperiences,
  getEducationExperiences,
  getOrganizationExperiences,
} from "@/lib/supabase/data";
import { calculateDuration, formatDuration, deduplicateExperiences } from "@/lib/utils/date-helpers";
import ExperienceCard from "./experience-section/experience-card";

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("work");
  const [workExperiences, setWorkExperiences] = useState<any[]>([]);
  const [educationExperiences, setEducationExperiences] = useState<any[]>([]);
  const [organizationExperiences, setOrganizationExperiences] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // Memoized toggle function for accordion
  const toggleExpanded = useCallback((key: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const [work, education, org] = await Promise.all([
          getWorkExperiences(),
          getEducationExperiences(),
          getOrganizationExperiences(),
        ]);

        // Deduplicate each array
        setWorkExperiences(deduplicateExperiences(work || []));
        setEducationExperiences(deduplicateExperiences(education || []));
        setOrganizationExperiences(deduplicateExperiences(org || []));
      } catch (error) {
        if (process.env.NODE_ENV !== "production") {
          console.error("Error fetching experiences:", error);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const tabs = [
    { id: "work", name: "Work Experience", icon: Briefcase },
    { id: "education", name: "Education", icon: GraduationCap },
    { id: "organization", name: "Organization", icon: Users },
  ];

  // Helper function to group experiences by company (for nested structure) - memoized
  const groupExperiencesByCompany = useCallback((experiences: any[]) => {
    const grouped = new Map<string, any[]>();

    experiences.forEach((exp) => {
      const companyKey = exp.company?.toLowerCase().trim() || "";
      if (!grouped.has(companyKey)) {
        grouped.set(companyKey, []);
      }
      grouped.get(companyKey)!.push(exp);
    });

    // Convert to array and sort by first experience period
    return Array.from(grouped.entries()).map(([companyKey, exps]) => {
      // Sort experiences by period (most recent first)
      const sortedExps = exps.sort((a, b) => {
        return b.period.localeCompare(a.period);
      });

      // Calculate total duration for all roles
      let totalMonths = 0;
      const durations = sortedExps.map((exp) => calculateDuration(exp.period));
      const validDurations = durations.filter((d): d is number => d !== null);
      if (validDurations.length > 0) {
        // For multiple roles, sum up the durations
        totalMonths = validDurations.reduce((sum, months) => sum + months, 0);
      }

      return {
        company: exps[0].company,
        logo: exps[0].logo,
        experiences: sortedExps,
        totalDuration: exps.length > 1 ? `${exps.length} roles` : null,
        totalMonths: totalMonths > 0 ? totalMonths : null,
      };
    });
  }, []);

  // Get the appropriate experiences based on the active tab - memoized
  const rawExperiences = useMemo(() => {
    return activeTab === "work" ? workExperiences : activeTab === "education" ? educationExperiences : organizationExperiences;
  }, [activeTab, workExperiences, educationExperiences, organizationExperiences]);

  // Group by company for nested structure (applies to all tabs) - memoized
  const groupedExperiences = useMemo(() => {
    return groupExperiencesByCompany(rawExperiences);
  }, [rawExperiences, groupExperiencesByCompany]);

  if (loading) {
    return (
      <section id="experience" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-20 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${activeTab === tab.id
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                >
                  <IconComponent className="h-4 w-4 mr-2" />
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Experience List - Clean Minimalist Design */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#fafafa] dark:bg-gray-950 rounded-3xl p-6 md:p-8 border border-gray-100 dark:border-gray-800">
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {activeTab === "work" ? "Experience" : activeTab === "education" ? "Education" : "Organization"}
            </h2>

            {/* Experience Items */}
            <div className="space-y-0">
              {groupedExperiences.map((group, groupIndex) => (
                <ExperienceCard
                  key={`${group.company}-${groupIndex}`}
                  group={group}
                  groupIndex={groupIndex}
                  expandedItems={expandedItems}
                  onToggleExpanded={toggleExpanded}
                  formatDuration={formatDuration}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
