import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServerClient } from '@/lib/supabase/client'
import { userAgent } from 'next/server'

export async function POST(req: NextRequest) {
    try {
        const { path } = await req.json()

        if (!path) {
            return NextResponse.json({ error: 'Path is required' }, { status: 400 })
        }

        // 1. Get IP Address
        // x-forwarded-for is standard for proxies/Vercel
        const forwardedFor = req.headers.get('x-forwarded-for')
        let ip = forwardedFor ? forwardedFor.split(',')[0].trim() : (req.ip || '127.0.0.1')

        // Anonymize IP partially if desired (optional, keeping full for now as per user request)
        // ip = ip.split('.').slice(0, 3).join('.') + '.0' 

        // 2. Parse User Agent & Device Type
        const { device, browser, os } = userAgent(req)
        const deviceType = device.type === 'mobile' ? 'Mobile' : (device.type === 'tablet' ? 'Tablet' : 'Desktop')
        const userAgentString = req.headers.get('user-agent') || 'Unknown'

        // 3. Get Location (Vercel Headers)
        // These only work when deployed on Vercel
        const country = req.headers.get('x-vercel-ip-country') || 'Unknown'
        const city = req.headers.get('x-vercel-ip-city') || 'Unknown'

        // 4. Initialize Supabase
        const supabase = getSupabaseServerClient()
        if (!supabase) {
            console.error('Supabase client not initialized')
            return NextResponse.json({ error: 'Database connection failed' }, { status: 500 })
        }

        // 5. Insert into visitor_logs
        const logData = {
            ip_address: ip,
            user_agent: browser.name ? `${browser.name} on ${os.name}` : userAgentString,
            device_type: deviceType,
            country: country,
            city: city,
            path: path
        }

        const { error: logError } = await supabase
            .from('visitor_logs')
            .insert(logData)

        if (logError) {
            console.error('Error logging visitor:', logError)
            // We don't stop execution, we still want to count the view
        }

        // 6. Increment Aggregate Page View (Legacy Support)
        // This ensures our old charts still work
        const { error: rpcError } = await supabase.rpc('increment_page_view', {
            page_path: path
        })

        if (rpcError) {
            console.error('Error incrementing page view:', rpcError)
        }

        return NextResponse.json({ success: true })

    } catch (error) {
        console.error('Tracking API Error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
