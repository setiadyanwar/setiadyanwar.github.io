import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/config/site-config'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Setiady Ibrahim Anwar - Frontend Developer & UI/UX Designer'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'system-ui, sans-serif',
                    position: 'relative',
                }}
            >
                {/* Background Pattern */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        opacity: 0.1,
                        background: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                    }}
                />

                {/* Content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '60px',
                        zIndex: 1,
                    }}
                >
                    {/* Name */}
                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: 'bold',
                            marginBottom: 20,
                            letterSpacing: '-2px',
                        }}
                    >
                        Setiady Ibrahim Anwar
                    </div>

                    {/* Title */}
                    <div
                        style={{
                            fontSize: 36,
                            color: 'rgba(255, 255, 255, 0.9)',
                            marginBottom: 40,
                        }}
                    >
                        Frontend Developer & UI/UX Designer
                    </div>

                    {/* Tech Stack Badges */}
                    <div
                        style={{
                            display: 'flex',
                            gap: 16,
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        }}
                    >
                        {['React', 'Next.js', 'TypeScript', 'UI/UX', 'BNSP Certified'].map((tech) => (
                            <div
                                key={tech}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.2)',
                                    backdropFilter: 'blur(10px)',
                                    padding: '12px 24px',
                                    borderRadius: 999,
                                    fontSize: 24,
                                    fontWeight: 600,
                                }}
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
