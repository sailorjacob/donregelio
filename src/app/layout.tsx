"use client"

import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/LanguageContext"
import AgeVerification from "@/components/AgeVerification"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isVerified, setIsVerified] = useState(() => {
    // Initialize state from localStorage
    if (typeof window !== 'undefined') {
      const verifiedTime = localStorage.getItem("ageVerified")
      if (verifiedTime) {
        const expiryTime = parseInt(verifiedTime)
        const currentTime = new Date().getTime()
        
        if (currentTime < expiryTime) {
          return true
        } else {
          // Verification expired, remove it
          localStorage.removeItem("ageVerified")
        }
      }
    }
    return false
  })

  const handleVerified = () => {
    setIsVerified(true)
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Don Rogelio</title>
        <meta
          name="description"
          content="Discover the finest collection of premium cigars from Don Rogelio. Handcrafted with tradition and excellence."
        />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {!isVerified && <AgeVerification onVerified={handleVerified} />}
            {isVerified && children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
