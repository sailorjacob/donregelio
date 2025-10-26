"use client"

import { motion } from "framer-motion"
import { useCallback, useState, useRef } from "react"
import ProcessGearGraphic from "./ProcessGearGraphic"
import CrosshairOverlay from "./CrosshairOverlay"

interface Step {
  id: string
  label: string
  descr: string
}

const steps: Step[] = [
  { id: "01", label: "Discovery", descr: "Learn about your business, goals, and vision to establish clear project objectives." },
  { id: "02", label: "Strategy", descr: "Develop a detailed roadmap and technical approach tailored to your specific needs." },
  { id: "03", label: "Design & Development", descr: "We craft beautiful experiences and build robust interfaces with clean design." },
  { id: "04", label: "Launch & Optimize", descr: "Deploy your project and provide ongoing support to ensure continued success." },
]

export default function ProcessDropdown({ onClose }: { onClose: () => void }) {
  const [hovered, setHovered] = useState<number | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleClick = useCallback(() => {
    const section = document.getElementById("process")
    if (section) {
      const headerOffset = 96
      const elementTop = section.getBoundingClientRect().top + window.pageYOffset
      const scrollPosition = elementTop - headerOffset
      window.scrollTo({ top: scrollPosition, behavior: "smooth" })
      setTimeout(() => {
        onClose()
      }, 700)
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ willChange: "height, opacity" }}
      className="absolute top-full inset-x-0 w-full bg-zinc-900 border-b border-zinc-700 shadow-2xl overflow-hidden z-50"
      ref={dropdownRef}
      onMouseLeave={onClose}
    >
      <CrosshairOverlay parentRef={dropdownRef} variant="gray" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-16 py-8 w-full justify-items-center">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className="group flex flex-col items-center cursor-pointer"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            onClick={handleClick}
          >
            <div className={`${hovered !== null && hovered !== idx ? 'opacity-40' : 'opacity-100'} transition-opacity duration-300 relative text-zinc-400`}>
              <ProcessGearGraphic index={idx} number={step.id} active={hovered === idx} />
            </div>

            <span className="mt-3 font-light text-sm text-zinc-300 hover:text-zinc-100 transition-colors tracking-wider uppercase">
              {step.label}
            </span>

            <p className="mt-2 text-xs leading-snug text-zinc-400 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {step.descr}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
