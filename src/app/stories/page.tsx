import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"

const stories = [
  {
    id: 1,
    title: "The Art of Cigar Rolling",
    excerpt: "Discover the centuries-old techniques that go into creating each Don Regelio cigar, passed down through generations of master rollers.",
    date: "March 15, 2024",
    author: "Maria Rodriguez",
    image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/toro.png"
  },
  {
    id: 2,
    title: "Tobacco Regions of Excellence",
    excerpt: "Explore the world's most prestigious tobacco growing regions and learn how terroir influences the flavor profiles of our premium blends.",
    date: "February 28, 2024",
    author: "Carlos Mendez",
    image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/lancero.png"
  },
  {
    id: 3,
    title: "The Perfect Pairing",
    excerpt: "From aged rums to single malt whiskies, discover the art of pairing cigars with the world's finest spirits for an elevated experience.",
    date: "February 10, 2024",
    author: "Elena Santos",
    image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/perfecto.png"
  }
]

export default function StoriesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
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
              Stories
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 font-light max-w-3xl mx-auto">
              Tales from the world of premium cigars, craftsmanship, and tradition
            </p>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {stories.map((story) => (
              <article key={story.id} className="group cursor-pointer">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300">
                  {/* Story Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Story Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-blue-200 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {story.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {story.author}
                      </div>
                    </div>

                    <h2 className="text-xl font-light text-white mb-3 group-hover:text-blue-200 transition-colors">
                      {story.title}
                    </h2>

                    <p className="text-blue-200 leading-relaxed text-sm">
                      {story.excerpt}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 text-center">
            <h2 className="text-3xl font-light text-white mb-4">
              Stay Connected
            </h2>
            <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive stories, new releases, and insights
              into the world of premium cigars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-3 bg-white text-blue-900 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-50 transition-all duration-300"
            >
              <span>Shop Our Collection</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
