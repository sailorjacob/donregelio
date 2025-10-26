import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingBag, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black flex items-center justify-center">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Logo/Brand */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-zinc-900 dark:bg-zinc-100 rounded-full mb-6">
              <ShoppingBag className="w-8 h-8 text-zinc-100 dark:text-zinc-900" />
            </div>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
              Your Store
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light">
              Beautiful products, modern design
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-300 group"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-light text-zinc-900 dark:text-zinc-100 mb-2">Premium</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Quality products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-zinc-900 dark:text-zinc-100 mb-2">Modern</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Contemporary design</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-zinc-900 dark:text-zinc-100 mb-2">Global</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Worldwide shipping</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
