/**
 * Helper function to calculate duration in months from period string
 * Supports formats like:
 * - "Jun 2025 – Dec 2025"
 * - "Jan 2024 - Feb 2024"
 * - "2021 - Present"
 * - "2021 - 2025"
 */
export function calculateDuration(period: string): number | null {
    try {
        // Parse period
        const parts = period.split(/[–-]/).map((p) => p.trim());
        if (parts.length !== 2) return null;

        const monthNames = [
            "jan", "feb", "mar", "apr", "may", "jun",
            "jul", "aug", "sep", "oct", "nov", "dec"
        ];

        const parseDate = (str: string) => {
            const trimmed = str.toLowerCase().trim();
            const parts = trimmed.split(" ");

            // Handle format like "2021" or "2021 - Present" (year only)
            if (parts.length === 1) {
                const year = parseInt(parts[0]);
                if (!isNaN(year)) {
                    return { month: 0, year }; // Default to January if only year
                }
            }

            // Handle format like "Jun 2025" or "Jan 2024"
            if (parts.length === 2) {
                const month = monthNames.findIndex((m) => parts[0].startsWith(m));
                const year = parseInt(parts[1]);
                if (month !== -1 && !isNaN(year)) {
                    return { month, year };
                }
            }

            return null;
        };

        const start = parseDate(parts[0]);
        const endStr = parts[1].toLowerCase().trim();

        // Handle "Present" case
        if (endStr.includes("present") || endStr.includes("sekarang")) {
            const now = new Date();
            const end = { month: now.getMonth(), year: now.getFullYear() };
            if (!start) return null;
            const months = (end.year - start.year) * 12 + (end.month - start.month) + 1;
            return months;
        }

        const end = parseDate(parts[1]);
        if (!start || !end) return null;

        const months = (end.year - start.year) * 12 + (end.month - start.month) + 1;
        return months;
    } catch {
        return null;
    }
}

/**
 * Helper function to format duration in human-readable format
 */
export function formatDuration(months: number): string {
    if (months < 1) return "Less than 1 month";
    if (months === 1) return "1 month";
    if (months < 12) return `${months} months`;
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    if (remainingMonths === 0) {
        return years === 1 ? "1 year" : `${years} years`;
    }
    return `${years} year${years > 1 ? "s" : ""} ${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
}

/**
 * Helper function to deduplicate experiences based on title, company, and period
 */
export function deduplicateExperiences(experiences: any[]): any[] {
    const seen = new Set<string>();
    return experiences.filter((exp) => {
        // Create a unique key from title, company, and period
        const key = `${exp.title || ""}-${exp.company || ""}-${exp.period || ""}`;
        if (seen.has(key)) {
            return false;
        }
        seen.add(key);
        return true;
    });
}
