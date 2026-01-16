export interface AnalyticsSummary {
    date: string
    total_visits: number
    unique_paths: number
}

export interface TopPage {
    path: string
    visits: number
}

export interface VisitorLog {
    id: string
    visitor_id: string
    path: string
    referrer?: string
    user_agent?: string
    ip_address?: string
    country?: string
    city?: string
    device_type?: string
    browser?: string
    os?: string
    created_at: string
}

export interface AnalyticsRecord {
    date: string
    path: string
    visits: number
    unique_visitors?: number
}
