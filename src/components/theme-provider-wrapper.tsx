"use client"

import * as React from "react"
import { ThemeProvider } from "next-themes"

interface ThemeProviderWrapperProps {
  children: React.ReactNode
}

export default function ThemeProviderWrapper({ children }: ThemeProviderWrapperProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
