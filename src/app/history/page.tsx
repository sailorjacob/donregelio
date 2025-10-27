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
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Back Navigation */}
        <Link
          href="/"
          className="inline-block text-blue-200 hover:text-white mb-8 text-sm font-light transition-colors duration-300"
        >
          ← Back to Home
        </Link>

        {/* Letter Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-light tracking-tight text-white mb-4">
            Our History
          </h1>
          <div className="w-16 h-px bg-blue-400 mb-6"></div>
          <p className="text-lg text-blue-100 font-light leading-tight">
            A legacy of craftsmanship, tradition, and excellence
          </p>
        </header>

        {/* Letter Body */}
        <div className="space-y-12 leading-tight">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-3 text-blue-100 leading-relaxed">
                <p className="text-base">
                  Rogelio Martínez was born in 1924 in Puerto Plata, Dominican Republic, in a small town of about
                  1,500 inhabitants called Rio Grande. He was a young man well known for his courtesy, the horses
                  he owned, his love for music and of course, their exquisite rolled cigars.
                </p>
                <p className="text-base">
                  Dressed in elegant suits and a skillful equestrian, it is not a rumor that it was also quite charming.
                  After a life full of adventures, love and joy, he passed away in 2013, at the age of 89.
                </p>
              </div>
              <div className="flex items-center justify-center pt-4">
                <div className="w-32 h-32 rounded-full border border-blue-300 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border border-blue-400"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Quality and Prestige */}
          <section>
            <h2 className="text-2xl font-light text-white mb-4">Quality and Prestige</h2>
            <div className="space-y-4">
              <p className="text-base text-blue-100 leading-relaxed">
                Our products are selected carefully by hand with a long-term cultivation process.
              </p>
              <div className="border border-blue-300 p-6 text-center">
                <h3 className="text-xl font-light text-white mb-2 tracking-wide">WWW.DONROGELIO.COM</h3>
                <p className="text-sm text-blue-200">
                  Visit our official website for the complete experience
                </p>
              </div>
            </div>
          </section>

          {/* Global Presence */}
          <section>
            <h2 className="text-2xl font-light text-white mb-4">Global Presence</h2>
            <div className="space-y-4">
              <p className="text-base text-blue-100 leading-relaxed">
                The main objective is to insert our cigar in international markets. We started with the United States,
                Italy and Hong Kong. Right now, we have a Cigar export capacity handcrafted from 50,000 units monthly.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 border border-blue-300">
                  <p className="text-xl font-light text-white">50,000</p>
                  <p className="text-xs text-blue-200 uppercase tracking-wide">Units Monthly</p>
                </div>
                <div className="text-center p-4 border border-blue-300">
                  <p className="text-xl font-light text-white">2014</p>
                  <p className="text-xs text-blue-200 uppercase tracking-wide">Founded</p>
                </div>
                <div className="text-center p-4 border border-blue-300">
                  <p className="text-xl font-light text-white">Global</p>
                  <p className="text-xs text-blue-200 uppercase tracking-wide">Markets</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-light text-white mb-4">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-white mb-1 uppercase tracking-wide">Address</h3>
                  <p className="text-blue-100 leading-relaxed">
                    C. Arzobispo Meriño 217, piso 2<br />
                    Santo Domingo 10210<br />
                    República Dominicana
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white mb-1 uppercase tracking-wide">Phone</h3>
                  <p className="text-blue-100">
                    +1 718 675-2636<br />
                    +1 829 648-6430
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-white mb-1 uppercase tracking-wide">Email</h3>
                <p className="text-blue-100 mb-4">
                  Cigarsdonrogelio@gmail.com
                </p>
                <button className="bg-blue-700 text-white px-4 py-2 text-sm font-light hover:bg-blue-600 transition-colors">
                  Watch Our Story
                </button>
              </div>
            </div>
          </section>

          {/* Closing Quote */}
          <section className="pt-8 border-t border-blue-700">
            <blockquote className="text-lg font-light italic text-blue-100 text-center">
              &ldquo;Every cigar tells a story of dedication, tradition, and the pursuit of perfection.&rdquo;
            </blockquote>
            <p className="text-blue-300 mt-2 text-center text-sm">— The Don Rogelio Legacy</p>
          </section>
        </div>
      </div>
    </main>
  )
}
