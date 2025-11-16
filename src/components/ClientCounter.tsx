"use client"

import { useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import { Users, TrendingUp } from "lucide-react"

// Calculate client count based on elapsed time
const calculateClientCount = () => {
  // Starting date: November 16, 2025
  const startDate = new Date("2025-11-16T00:00:00")
  const currentDate = new Date()
  
  // Calculate hours elapsed since start date
  const hoursElapsed = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60))
  
  // Every 3 hours, add 1-2 clients (we'll use 1.5 average, so ~1 per 3 hours)
  const periodsElapsed = Math.floor(hoursElapsed / 3)
  
  // Random increment between 1-2 for each period
  const increment = periodsElapsed > 0 ? Math.floor(periodsElapsed * 1.5) : 0
  
  return 50000 + increment
}

export default function ClientCounter() {
  const clientCount = useMemo(() => calculateClientCount(), [])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  // Animated counter effect
  const [displayCount, setDisplayCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let currentCount = 50000
    const increment = Math.ceil((clientCount - 50000) / 50) || 1
    const duration = 2000 // 2 seconds
    const steps = 50
    const stepDuration = duration / steps

    const timer = setInterval(() => {
      currentCount += increment
      if (currentCount >= clientCount) {
        setDisplayCount(clientCount)
        clearInterval(timer)
      } else {
        setDisplayCount(currentCount)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [clientCount, isVisible])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none"
    >
      <div className="bg-white text-gray-900 px-6 py-3 rounded-full shadow-lg border border-gray-200">
        <div className="flex items-center gap-3">
          <Users className="w-4 h-4 text-gray-600" />
          
          <div className="flex items-center gap-2">
            <motion.span
              key={displayCount}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-semibold text-base tabular-nums text-gray-900"
            >
              {displayCount.toLocaleString()}+
            </motion.span>
            <span className="font-light text-xs text-gray-600 uppercase tracking-wide">Clients Served</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

