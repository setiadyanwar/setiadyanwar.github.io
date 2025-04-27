import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedCursor from "@/components/animated-cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Setiady Ibrahim Anwar | Frontend Developer & UI/UX Designer",
  description: "Portfolio of Setiady Ibrahim Anwar, a Frontend Web Developer and UI/UX Designer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <AnimatedCursor />
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
