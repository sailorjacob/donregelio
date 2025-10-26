import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
              Our Heritage
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 font-light max-w-3xl mx-auto">
              For generations, the art of cigar making has been passed down through our family
            </p>
          </div>

          {/* Heritage Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-light mb-4 text-blue-100">The Legacy</h2>
                <p className="text-blue-200 leading-relaxed">
                  Don Rogelio was founded on the principles of traditional cigar craftsmanship.
                  Our master rollers have dedicated their lives to perfecting the art of cigar making,
                  ensuring every piece that leaves our workshop meets the highest standards of quality.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-light mb-4 text-blue-100">The Process</h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-blue-400 pl-4">
                    <h3 className="text-lg font-medium text-blue-100 mb-2">Selection</h3>
                    <p className="text-blue-200">Carefully selected premium tobacco leaves from the finest regions</p>
                  </div>
                  <div className="border-l-2 border-blue-400 pl-4">
                    <h3 className="text-lg font-medium text-blue-100 mb-2">Crafting</h3>
                    <p className="text-blue-200">Master artisans hand-roll each cigar using traditional techniques</p>
                  </div>
                  <div className="border-l-2 border-blue-400 pl-4">
                    <h3 className="text-lg font-medium text-blue-100 mb-2">Aging</h3>
                    <p className="text-blue-200">Cigars are aged in cedar rooms to develop complex flavors</p>
                  </div>
                  <div className="border-l-2 border-blue-400 pl-4">
                    <h3 className="text-lg font-medium text-blue-100 mb-2">Quality</h3>
                    <p className="text-blue-200">Each cigar undergoes rigorous inspection to ensure perfection</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-light mb-4 text-blue-100">Our Philosophy</h2>
                <p className="text-blue-200 leading-relaxed mb-6">
                  We believe that a great cigar is more than just tobacco—it&apos;s a moment of reflection,
                  a celebration of craftsmanship, and a connection to tradition. Every cigar we create
                  tells a story of dedication and passion for the art form.
                </p>
                <blockquote className="text-2xl font-light italic text-blue-100 border-l-4 border-blue-400 pl-6">
                  &ldquo;A cigar is not just smoked, it is experienced.&rdquo;
                </blockquote>
              </div>

              <div>
                <h2 className="text-3xl font-light mb-4 text-blue-100">Premium Quality</h2>
                <p className="text-blue-200 leading-relaxed">
                  Our commitment to excellence means we use only the finest wrapper, filler, and binder
                  leaves, sourced from the most renowned tobacco regions. Each blend is carefully
                  developed to provide a unique and memorable smoking experience.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-50 transition-all duration-300"
            >
              <span>Explore Our Collection</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
