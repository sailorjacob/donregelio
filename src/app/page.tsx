import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white flex items-center justify-center">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full mb-8 overflow-hidden border-2 border-amber-600">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/losdgo.png"
                alt="Don Rogelio Logo"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6">
              Don Rogelio
            </h1>
          </div>

          {/* Product Showcase */}
          <div className="mt-12 mb-8 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-80">
            <div className="relative">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%20closed.png"
                alt="Robusto Cigar"
                width={150}
                height={90}
                className="object-contain drop-shadow-lg mx-auto"
              />
              <p className="text-xs text-blue-200 text-center mt-2">Robusto</p>
            </div>
            <div className="relative">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/toro.png"
                alt="Toro Cigar"
                width={150}
                height={90}
                className="object-contain drop-shadow-lg mx-auto"
              />
              <p className="text-xs text-blue-200 text-center mt-2">Toro</p>
            </div>
            <div className="relative">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/lancero.png"
                alt="Lancero Cigar"
                width={150}
                height={90}
                className="object-contain drop-shadow-lg mx-auto"
              />
              <p className="text-xs text-blue-200 text-center mt-2">Lancero</p>
            </div>
            <div className="relative">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/perfecto.png"
                alt="Perfecto Cigar"
                width={150}
                height={90}
                className="object-contain drop-shadow-lg mx-auto"
              />
              <p className="text-xs text-blue-200 text-center mt-2">Perfecto</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-8">
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-50 transition-all duration-300 group"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

          </div>
        </div>
      </div>
    </main>
  )
}
