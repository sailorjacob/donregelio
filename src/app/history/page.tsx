import Link from "next/link"
import Image from "next/image"

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Simple Header */}
      <header className="border-b border-blue-700 bg-blue-900/80 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-blue-300">
                <Image
                  src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/losdgo.png"
                  alt="Don Rogelio"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <Link href="/shop" className="text-sm font-light text-blue-200 hover:text-white transition-colors duration-300">
              Cigars
            </Link>
          </nav>
        </div>
      </header>

      {/* Letter Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Back Navigation */}
        <Link
          href="/"
          className="inline-block text-blue-200 hover:text-white mb-6 text-sm font-light transition-colors duration-300"
        >
          ← Back to Home
        </Link>

        {/* Letter Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-light tracking-tight text-white mb-4">
            Our History
          </h1>
          <div className="w-16 h-px bg-blue-400 mb-4"></div>
          <p className="text-lg text-blue-100 font-light leading-tight">
            A legacy of craftsmanship, tradition, and excellence
          </p>
        </header>

        {/* Letter Body */}
        <div className="space-y-8 leading-tight">
          {/* The Beginning */}
          <section>
            <h2 className="text-2xl font-light text-white mb-4">The Beginning</h2>
            <div className="space-y-3 text-blue-100 leading-relaxed">
              <p className="text-base">
                Don Rogelio Cigars emerged in 2014, a year after the death of the father of Founder Thomas Martinez,
                as a tribute and a faithful reminder of his memory to all his family and especially their grandchildren.
              </p>
              <p className="text-base">
                What began as a tribute, has turned into an ambitious project, presented cigars with an exquisite smoke
                and of excellent quality. It is no secret for no one that currently, the Dominican Republic has a
                position important in the tobacco market at the level world.
              </p>
            </div>
          </section>

          {/* Rogelio Martinez */}
          <section>
            <h2 className="text-2xl font-light text-white mb-4">Rogelio Martínez</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              <div className="lg:col-span-2 space-y-3 text-blue-100 leading-relaxed">
                <p className="text-base">
                  Rogelio Martinez was born in 1924 in Puerto Plata, Dominican Republic, in a small town of approximately 1,500 inhabitants called Rio Grande. In his villages and neighboring villages, he was a young man well known for his courtesy, the horses he owned, his love of music and, of course, his exquisite rolled cigarettes.
                </p>
                <p className="text-base">
                  Dressed in fine suits and a skillful horseman, it&apos;s no rumor that he&apos;s also a charmer. In search of a better life, Rogelio left Rio Grande to the great city of Santo Domingo and never returned. In 1940 he had joined the army and in the 1960s he remarried for the fourth and last time to Thelma Fernández, with whom he had 2 children; his youngest of five children.
                </p>
                <p className="text-base">
                  When the 80s hit, they went to New York, where he retired. He and Thelma later moved with their children, who were married by then, to South Florida. After a life full of adventure, love and joy, he passed away in 2013, he was 89 years old at the moment.
                </p>
              </div>
              <div className="flex items-start justify-center">
                <div className="relative">
                  <Image
                    src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/HistoryDonRogelio.jpg"
                    alt="Rogelio Martínez"
                    width={250}
                    height={350}
                    className="rounded-lg shadow-xl object-cover border border-blue-300/30"
                    style={{ aspectRatio: '3/4' }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Quality and Global Presence - Combined */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-light text-white mb-4">Quality & Prestige</h2>
                <p className="text-base text-blue-100 leading-relaxed mb-4">
                  Our products are selected carefully by hand with a long-term cultivation process.
                </p>
                <div className="border border-blue-300 p-4 text-center">
                  <h3 className="text-lg font-light text-white mb-1 tracking-wide">WWW.DONROGELIO.COM</h3>
                  <p className="text-xs text-blue-200">
                    Visit our official website
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-light text-white mb-4">Global Presence</h2>
                <p className="text-base text-blue-100 leading-relaxed mb-4">
                  We started with the United States, Italy and Hong Kong. Right now, we have a cigar export capacity of 50,000 handcrafted units monthly.
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center p-3 border border-blue-300">
                    <p className="text-lg font-light text-white">50K</p>
                    <p className="text-xs text-blue-200 uppercase tracking-wide">Monthly</p>
                  </div>
                  <div className="text-center p-3 border border-blue-300">
                    <p className="text-lg font-light text-white">2014</p>
                    <p className="text-xs text-blue-200 uppercase tracking-wide">Founded</p>
                  </div>
                  <div className="text-center p-3 border border-blue-300">
                    <p className="text-lg font-light text-white">Global</p>
                    <p className="text-xs text-blue-200 uppercase tracking-wide">Markets</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-light text-white mb-4">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-medium text-white mb-2 uppercase tracking-wide">Address</h3>
                <p className="text-blue-100 leading-relaxed text-sm">
                  C. Arzobispo Meriño 217, piso 2<br />
                  Santo Domingo 10210<br />
                  República Dominicana
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-white mb-2 uppercase tracking-wide">Phone</h3>
                <p className="text-blue-100 text-sm">
                  +1 718 675-2636<br />
                  +1 829 648-6430
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-white mb-2 uppercase tracking-wide">Email</h3>
                <p className="text-blue-100 mb-3 text-sm">
                  Cigarsdonrogelio@gmail.com
                </p>
                <button className="bg-blue-700 text-white px-3 py-2 text-xs font-light hover:bg-blue-600 transition-colors rounded">
                  Watch Our Story
                </button>
              </div>
            </div>
          </section>

          {/* Closing Quote */}
          <section className="pt-6 border-t border-blue-700">
            <blockquote className="text-base font-light italic text-blue-100 text-center">
              &ldquo;Every cigar tells a story of dedication, tradition, and the pursuit of perfection.&rdquo;
            </blockquote>
            <p className="text-blue-300 mt-2 text-center text-xs">— The Don Rogelio Legacy</p>
          </section>
        </div>
      </div>
    </main>
  )
}
