import Link from "next/link"
import { ArrowLeft, MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-200 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 font-display">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-amber-200 font-light max-w-3xl mx-auto">
              We&apos;re here to help you discover the perfect cigar for your collection
            </p>
          </div>

          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-light text-amber-100 mb-6 font-display">Get in Touch</h2>
                <p className="text-amber-200 leading-relaxed mb-8">
                  Whether you have questions about our products, need assistance with an order,
                  or want to learn more about our heritage, our team is ready to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-amber-200" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1 font-display">Email</h3>
                    <p className="text-amber-200">info@donregelio.com</p>
                    <p className="text-sm text-amber-300">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-amber-200" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Phone</h3>
                    <p className="text-amber-200">+1 (555) 123-4567</p>
                    <p className="text-sm text-amber-300">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-amber-200" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Visit Us</h3>
                    <p className="text-amber-200">
                      123 Cigar Avenue<br />
                      Havana, Cuba 10400
                    </p>
                    <p className="text-sm text-amber-300">By appointment only</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/20 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-amber-200" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Business Hours</h3>
                    <div className="text-amber-200 text-sm space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-amber-400/30 p-8">
              <h2 className="text-2xl font-light text-white mb-6 font-display">Send us a Message</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-amber-200 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 bg-amber-500/20 border border-amber-400/30 rounded-lg text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300/50"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-amber-200 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 bg-amber-500/20 border border-amber-400/30 rounded-lg text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300/50"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-amber-200 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-amber-500/20 border border-amber-400/30 rounded-lg text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300/50"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-amber-200 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 bg-amber-500/20 border border-amber-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-300/50"
                  >
                    <option value="" className="text-gray-900">Select a subject</option>
                    <option value="orders" className="text-gray-900">Order Inquiry</option>
                    <option value="products" className="text-gray-900">Product Information</option>
                    <option value="shipping" className="text-gray-900">Shipping & Delivery</option>
                    <option value="wholesale" className="text-gray-900">Wholesale</option>
                    <option value="other" className="text-gray-900">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-amber-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-amber-500/20 border border-amber-400/30 rounded-lg text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300/50"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-400 text-blue-900 py-3 px-6 rounded-lg font-medium hover:bg-amber-300 transition-colors font-display"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 mb-16">
            <h2 className="text-3xl font-light text-white mb-6 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-amber-100 mb-2">Do you ship internationally?</h3>
                <p className="text-amber-200">Yes, we ship worldwide with reliable carriers and full tracking.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-amber-100 mb-2">What&apos;s your return policy?</h3>
                <p className="text-amber-200">We offer a 30-day return policy on unopened products in original condition.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-amber-100 mb-2">Do you offer wholesale pricing?</h3>
                <p className="text-amber-200">Yes, contact us for wholesale inquiries and special pricing.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-amber-100 mb-2">How should I store my cigars?</h3>
                <p className="text-amber-200">Store in a humidor at 65-70% humidity and 68-72°F temperature.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 bg-amber-400 text-blue-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-amber-300 transition-all duration-300 font-display"
            >
              <span>Browse Our Collection</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
