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
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-300 group"
            >
              <span className="text-sm font-light tracking-wide">Explore Collection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scattered Document Papers */}
      <div className="fixed bottom-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Bottom Left Document - Peeking from left edge */}
        <div className="absolute -bottom-8 -left-6 transform -rotate-15 opacity-70 hover:opacity-90 transition-all duration-500 hover:-rotate-12">
          <div className="relative">
            <Image
              src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/infopack1.png"
              alt="Product Information Document"
              width={160}
              height={220}
              className="object-contain drop-shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 pointer-events-none" />
            {/* Paper edge effect */}
            <div className="absolute top-2 left-2 right-2 bottom-2 border border-white/20 rounded-sm pointer-events-none" />
          </div>
        </div>

        {/* Bottom Right Document - Peeking from right edge */}
        <div className="absolute -bottom-12 -right-8 transform rotate-8 opacity-70 hover:opacity-90 transition-all duration-500 hover:rotate-5">
          <div className="relative">
            <Image
              src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/infobackbackside.png"
              alt="Product Details Document"
              width={140}
              height={190}
              className="object-contain drop-shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-white/20 via-transparent to-black/10 pointer-events-none" />
            {/* Paper edge effect */}
            <div className="absolute top-2 left-2 right-2 bottom-2 border border-white/20 rounded-sm pointer-events-none" />
          </div>
        </div>
      </div>
    </main>
  )
}
