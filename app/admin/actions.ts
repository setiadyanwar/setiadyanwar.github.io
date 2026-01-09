"use server"

import { cookies, headers } from "next/headers"
import { createClient } from "@/lib/supabase/server"
import { nanoid } from "nanoid"

const SESSION_DURATION = 24 * 60 * 60 * 1000 // 24 hours

function getClientInfo() {
    const headersList = headers()
    const ip = headersList.get("x-forwarded-for")?.split(",")[0].trim() ||
        headersList.get("x-real-ip") ||
        "unknown"
    const userAgent = headersList.get("user-agent") || "unknown"

    let deviceInfo = "Desktop"
    if (userAgent.includes("Mobile")) deviceInfo = "Mobile"
    else if (userAgent.includes("Tablet")) deviceInfo = "Tablet"

    return { ip, userAgent, deviceInfo }
}

function sanitizeInput(input: string): string {
    return input.trim().replace(/[<>\"'`]/g, "").substring(0, 100)
}

export async function login(formData: FormData) {
    const { ip } = getClientInfo()
    const username = sanitizeInput(formData.get("username") as string || "")
    const password = formData.get("password") as string || ""

    if (!username || !password || username.length < 3 || password.length < 3) {
        return { success: false, error: "Invalid credentials" }
    }

    const validUsername = process.env.ADMIN_USERNAME || "adminporto"
    const validPassword = process.env.ADMIN_PASSWORD || "proui2026"

    if (username === validUsername && password === validPassword) {
        const supabase = createClient()
        const { userAgent, deviceInfo } = getClientInfo()

        const sessionId = nanoid(32)
        const expiresAt = new Date(Date.now() + SESSION_DURATION)

        const { error } = await supabase.from("admin_sessions").insert({
            id: sessionId,
            username,
            ip_address: ip,
            user_agent: userAgent,
            device_info: deviceInfo,
            expires_at: expiresAt.toISOString(),
            is_active: true,
        })

        if (error) {
            console.error("Failed to create session:", error)
            return { success: false, error: "Server error. Please try again." }
        }

        cookies().set("admin_session", sessionId, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: SESSION_DURATION / 1000,
            path: "/",
        })

        return { success: true }
    }

    return { success: false, error: "Invalid credentials" }
}

export async function logout() {
    const sessionId = cookies().get("admin_session")?.value

    if (sessionId) {
        const supabase = createClient()
        supabase.from("admin_sessions").update({ is_active: false }).eq("id", sessionId).then()
    }

    cookies().delete("admin_session")
    return { success: true }
}

export async function getActiveSessions() {
    const supabase = createClient()

    const { data, error } = await supabase
        .from("admin_sessions")
        .select("*")
        .eq("is_active", true)
        .gt("expires_at", new Date().toISOString())
        .order("login_at", { ascending: false })

    if (error) {
        console.error("Failed to fetch sessions:", error)
        return []
    }

    return data || []
}

export async function revokeSession(sessionId: string) {
    const cleanSessionId = sanitizeInput(sessionId)
    const supabase = createClient()

    const { error } = await supabase
        .from("admin_sessions")
        .update({ is_active: false })
        .eq("id", cleanSessionId)

    if (error) {
        console.error("Failed to revoke session:", error)
        return { success: false }
    }

    return { success: true }
}
