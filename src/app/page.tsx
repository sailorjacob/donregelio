import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, Clock, Globe, ChevronDown, Star } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-amber-600/10"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              {/* Logo */}
              <div className="mb-8 flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-amber-400 shadow-2xl">
                    <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/losdgo.png"
                alt="Don Regelio Logo"
                      width={96}
                      height={96}
                className="w-full h-full object-cover"
              />
            </div>
                  <div className="absolute -top-2 -right-2 bg-amber-500 text-amber-900 rounded-full p-2">
                    <Award className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Main Heading */}
              <div className="mb-8">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-white mb-4 leading-none">
              Don Regelio
            </h1>
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-amber-200 text-lg font-light">Premium Collection</span>
                </div>
                <p className="text-2xl md:text-3xl text-amber-100 font-light leading-relaxed max-w-2xl">
                  Masterfully crafted cigars from the heart of tradition
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Link
                  href="/shop"
                  className="group inline-flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/about"
                  className="group inline-flex items-center justify-center gap-3 border-2 border-amber-400 text-amber-100 hover:bg-amber-400 hover:text-amber-900 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
                >
                  <span>Our Heritage</span>
                </Link>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0">
                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-amber-900" />
                  </div>
                  <div className="text-lg font-medium text-white mb-1">Premium</div>
                  <div className="text-sm text-amber-200">Handcrafted Excellence</div>
                </div>
                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-amber-900" />
                  </div>
                  <div className="text-lg font-medium text-white mb-1">Heritage</div>
                  <div className="text-sm text-amber-200">Time-Honored Tradition</div>
                </div>
                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-amber-900" />
                  </div>
                  <div className="text-lg font-medium text-white mb-1">Global</div>
                  <div className="text-sm text-amber-200">Worldwide Delivery</div>
                </div>
              </div>
            </div>

            {/* Right Column - Featured Product */}
            <div className="relative">
              <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="relative bg-gradient-to-br from-amber-700 to-amber-900 rounded-2xl p-8 shadow-2xl">
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 bg-amber-600 rounded-full flex items-center justify-center">
                      <span className="text-4xl">🚬</span>
                    </div>
                    <h3 className="text-2xl font-light text-white mb-2">Signature Blend</h3>
                    <p className="text-amber-100 mb-4">Our most celebrated creation</p>
                    <div className="text-3xl font-bold text-amber-300 mb-4">$25.00</div>
                    <button className="bg-white text-amber-900 px-6 py-2 rounded-full font-medium hover:bg-amber-50 transition-colors">
                      Quick View
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-amber-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-amber-300 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-amber-500 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-amber-300" />
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gradient-to-b from-amber-900/50 to-amber-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
              Signature Collection
            </h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Discover our most sought-after cigars, each one a masterpiece of Cuban tradition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Double Toro", price: "$12.50", rating: 5, image: "🚬" },
              { name: "Lancero", price: "$15.00", rating: 5, image: "🟤" },
              { name: "Perfecto", price: "$14.00", rating: 5, image: "🤎" }
            ].map((product, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-amber-700 rounded-full flex items-center justify-center text-3xl">
                    {product.image}
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">{product.name}</h3>
                  <div className="flex justify-center mb-3">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-amber-300 mb-4">{product.price}</div>
                  <button className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2 rounded-full font-medium transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-r from-amber-900/20 to-amber-800/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
                The Art of
                <span className="text-amber-400"> Cigar Making</span>
              </h2>
              <p className="text-xl text-amber-100 leading-relaxed mb-8">
                For generations, our family has perfected the delicate balance of tobacco, tradition, and time.
                Each cigar tells a story of dedication, passion, and uncompromising quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-3 border-2 border-amber-400 text-amber-100 hover:bg-amber-400 hover:text-amber-900 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
                >
                  <span>Discover Our Story</span>
                </Link>
                <Link
                  href="/stories"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
                >
                  <span>Read Our Stories</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-700 to-amber-900 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-300 mb-2">50+</div>
                    <div className="text-amber-100">Years of Excellence</div>
                  </div>
              <div className="text-center">
                    <div className="text-4xl font-bold text-amber-300 mb-2">25</div>
                    <div className="text-amber-100">Unique Blends</div>
              </div>
              <div className="text-center">
                    <div className="text-4xl font-bold text-amber-300 mb-2">100K+</div>
                    <div className="text-amber-100">Happy Customers</div>
              </div>
              <div className="text-center">
                    <div className="text-4xl font-bold text-amber-300 mb-2">15</div>
                    <div className="text-amber-100">Countries Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            Ready to Experience
            <span className="text-amber-400"> Excellence?</span>
          </h2>
          <p className="text-xl text-amber-100 mb-12 max-w-3xl mx-auto">
            Join thousands of cigar enthusiasts who have discovered the Don Regelio difference.
            Premium quality, exceptional flavor, and unmatched craftsmanship await.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-500 text-white px-10 py-5 rounded-full text-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 border-2 border-amber-400 text-amber-100 hover:bg-amber-400 hover:text-amber-900 px-10 py-5 rounded-full text-xl font-medium transition-all duration-300"
            >
              <span>Get in Touch</span>
            </Link>
        </div>
      </div>
      </section>
    </main>
  )
}
