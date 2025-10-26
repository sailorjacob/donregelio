"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface Props {
  parentRef: React.RefObject<HTMLElement | null>
  variant?: "blue" | "gray"
}

// Bright sky-blue crosshair overlay that follows the cursor inside the given element
export default function CrosshairOverlay({ parentRef, variant = "blue" }: Props) {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  // Apply spring smoothing for gradual movement
  const smoothX = useSpring(x, { stiffness: 40, damping: 12 })
  const smoothY = useSpring(y, { stiffness: 40, damping: 12 })

  useEffect(() => {
    const parent = parentRef.current
    if (!parent) return

    const handleMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect()
      const offsetX = e.clientX - rect.left
      const offsetY = e.clientY - rect.top
      if (offsetX < 0 || offsetY < 0 || offsetX > rect.width || offsetY > rect.height) {
        // hide crosshair when outside
        x.set(-100)
        y.set(-100)
      } else {
        x.set(offsetX)
        y.set(offsetY)
      }
    }

    parent.addEventListener("mousemove", handleMove)
    parent.addEventListener("mouseleave", () => {
      x.set(-100)
      y.set(-100)
    })
    return () => {
      parent.removeEventListener("mousemove", handleMove)
    }
  }, [parentRef, x, y])

  const lineClass = variant === "gray" ? "bg-zinc-500/70" : "bg-sky-400/70"
  const circleBorder = variant === "gray" ? "border-zinc-500" : "border-sky-400"

  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {/* Vertical line */}
      <motion.div
        className={`absolute top-0 bottom-0 w-px ${lineClass}`}
        style={{ left: smoothX }}
      />
      {/* Horizontal line */}
      <motion.div
        className={`absolute left-0 right-0 h-px ${lineClass}`}
        style={{ top: smoothY }}
      />
      {/* Central circle */}
      <motion.div
        className={`absolute w-2.5 h-2.5 ${circleBorder} rounded-full -translate-x-1/2 -translate-y-1/2`}
        style={{ left: smoothX, top: smoothY }}
      />
    </div>
  )
}
