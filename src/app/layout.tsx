import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ThemeProviderWrapper from "@/components/theme-provider-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shop - Your Store Name",
  description: "Beautiful e-commerce experience with modern design",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
