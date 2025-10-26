"use client"

import { motion } from "framer-motion"

interface GearGraphicProps {
  index: number
  number: string
  active?: boolean
}

// Full animated graphic variations for each process step, adapted from the homepage
export default function ProcessGearGraphic({ index, number, active = false }: GearGraphicProps) {
  const baseSize = "w-28 h-28 md:w-32 md:h-32" // generous sizing for dropdown

  const commonSvgProps = {
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    stroke: "currentColor",
    fill: "none",
    strokeWidth: 0.4,
    className: `${baseSize} text-zinc-400`,
    style: { willChange: "transform" }
  }

  const withAnim = (extra: Record<string, unknown> = {}) => ({
    ...commonSvgProps,
    animate: active ? { rotate: 360 } : { rotate: 0 },
    transition: active ? { repeat: Infinity, duration: 8, ease: "linear" } : { duration: 0 },
    ...extra
  })

  // SVG clusters for each of the four steps
  const visuals = [
    // 1. Triple hexagon cluster
    (
      <div className={`relative ${baseSize}`} key="hexCluster">
        {[0, 1, 2].map(i => (
          <motion.svg
            key={i}
            viewBox="0 0 32 32"
            {...withAnim()}
            initial={{ rotate: 0, scale: [1, 0.7, 0.5][i] }}

            className={`absolute inset-0 ${baseSize}`}
            style={{ transformOrigin: "50% 50%", translate: ["0px 0px", "12px -8px", "-14px 10px"][i] }}
          >
            <polygon points="16 3 28 10 28 22 16 29 4 22 4 10" />
          </motion.svg>
        ))}
      </div>
    ),
    // 2. Dashed circle trio
    (
      <div className={`relative ${baseSize}`} key="dashedCircles">
        {[14, 10, 6].map((r, i) => (
          <motion.svg
            key={i}
            viewBox="0 0 32 32"
            {...withAnim()}
            initial={{ rotate: -90, scale: 1 - i * 0.15 }}
            className={`absolute inset-0 ${baseSize}`}
            style={{ translate: `${i === 0 ? -12 : i === 1 ? 0 : 12}px ${i === 2 ? 10 : -10}px` }}
          >
            <circle cx="16" cy="16" r={r} strokeDasharray="4 3" />
          </motion.svg>
        ))}
      </div>
    ),
    // 3. Double gear outlines
    (
      <div className={`relative ${baseSize}`} key="gears">
        {[0, 1].map(i => (
          <motion.svg
            key={i}
            viewBox="0 0 32 32"
            {...withAnim()}
            initial={{ rotate: -90 + (i === 0 ? -5 : 10), scale: i === 0 ? 1 : 0.45 }}
            className={`absolute inset-0 ${baseSize}`}
            style={{ translate: `${i === 0 ? "0px 0px" : "20px -12px"}` }}
          >
            <path d="M30.329 13.721l-2.65-.441a11.922 11.922 0 0 0-1.524-3.653l1.476-2.066a1.983 1.983 0 0 0-.211-2.553l-.428-.428a1.983 1.983 0 0 0-2.553-.211L22.373 5.845a11.922 11.922 0 0 0-3.653-1.524l-.441-2.65A2 2 0 0 0 16.306 0h-.612a2 2 0 0 0-1.973 1.671l-.441 2.65a11.922 11.922 0 0 0-3.653 1.524L7.561 4.369a1.983 1.983 0 0 0-2.553.211l-.428.428a1.983 1.983 0 0 0-.211 2.553l1.476 2.066a11.922 11.922 0 0 0-1.524 3.653l-2.65.441A2 2 0 0 0 0 15.694v.612a2 2 0 0 0 1.671 1.973l2.65.441a11.922 11.922 0 0 0 1.524 3.653L4.369 24.439a1.983 1.983 0 0 0 .211 2.553l.428.428a1.983 1.983 0 0 0 2.553.211l2.066-1.476a11.922 11.922 0 0 0 3.653 1.524l.441 2.65A2 2 0 0 0 15.694 32h.612a2 2 0 0 0 1.973-1.671l.441-2.65a11.922 11.922 0 0 0 3.653-1.524l2.066 1.476a1.983 1.983 0 0 0 2.553-.211l.428-.428a1.983 1.983 0 0 0 .211-2.553l-1.476-2.066a11.922 11.922 0 0 0 1.524-3.653l2.65-.441A2 2 0 0 0 32 16.306v-.612a2 2 0 0 0-1.671-1.973z" />
          </motion.svg>
        ))}
      </div>
    ),
    // 4. Concentric dashed circles
    (
      <div className={`relative ${baseSize}`} key="concentricCircles">
        {[14, 9, 5].map((r, i) => (
          <motion.svg
            key={i}
            viewBox="0 0 32 32"
            {...withAnim()}
            initial={{ rotate: -90, scale: 1 - i * 0.15 }}
            className={`absolute inset-0 ${baseSize}`}
            style={{ translate: `${i === 0 ? -10 : i === 1 ? 0 : 10}px ${i === 0 ? -6 : i === 1 ? 6 : -6}px` }}
          >
            <circle cx="16" cy="16" r={r} strokeDasharray={i % 2 === 0 ? "2 3" : undefined} />
          </motion.svg>
        ))}
      </div>
    )
  ]

  return (
    <div className="relative mb-4 flex justify-center group">
      {visuals[index]}
      <span className="absolute inset-0 flex items-center justify-center text-zinc-200 text-base font-medium pointer-events-none">
        {number}
      </span>
    </div>
  )
}
