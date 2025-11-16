"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Users, TrendingUp } from "lucide-react"

export default function ClientCounter() {
  const [clientCount, setClientCount] = useState(50000)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Starting date: November 16, 2025
    const startDate = new Date("2025-11-16T00:00:00")
    const currentDate = new Date()
    
    // Calculate hours elapsed since start date
    const hoursElapsed = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60))
    
    // Every 3 hours, add 1-2 clients (we'll use 1.5 average, so ~1 per 3 hours)
    const periodsElapsed = Math.floor(hoursElapsed / 3)
    
    // Random increment between 1-2 for each period
    const increment = periodsElapsed > 0 ? Math.floor(periodsElapsed * 1.5) : 0
    
    const totalClients = 50000 + increment
    setClientCount(totalClients)

    // Trigger animation after component mounts
    setTimeout(() => setIsVisible(true), 500)
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
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white px-6 py-3 rounded-full shadow-2xl border border-amber-400/50 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            <Users className="w-5 h-5" />
          </motion.div>
          
          <div className="flex items-center gap-2">
            <motion.span
              key={displayCount}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-bold text-lg tabular-nums"
            >
              {displayCount.toLocaleString()}+
            </motion.span>
            <span className="font-medium text-sm">Clients Served</span>
          </div>

          <motion.div
            animate={{ 
              y: [0, -3, 0]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <TrendingUp className="w-4 h-4 text-amber-200" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

