"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Check } from "lucide-react"
import { Playfair_Display } from "next/font/google"
import WhatsAppButton from "@/components/WhatsAppButton"

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"]
})

export default function CoffeePage() {
  return (
    <main className={`min-h-screen bg-white text-gray-900 ${playfair.className}`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="w-full px-4 sm:px-6 py-3">
          <nav className="flex items-center justify-between max-w-6xl mx-auto">
            <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-light">Back</span>
            </Link>
            
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/losdgo.png"
                  alt="Don Rogelio"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>

            <Link href="/shop" className="text-sm font-light text-gray-600 hover:text-black transition-colors">
              Shop
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-4">
              Café Don Rogelio
            </h1>
            <p className="text-sm text-gray-600 font-light tracking-widest uppercase">
              100% Dominicano Arábica
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Image (placeholder - waiting for your image) */}
      <section className="px-4 sm:px-6 mb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden border border-gray-200"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-400 text-sm">Coffee Product Image</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 sm:px-6 mb-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-light tracking-tight mb-8 text-center">
              Una Tradición con Mucha Historia
            </h2>
            
            <div className="space-y-4 text-sm leading-relaxed text-gray-600 font-light">
              <p>
                El café Don Rogelio surge de la tradición y dedicación de Eugenia Martínez Acosta (mi abuela) quien se levantaba cada mañana a poner al sol las semillas y a colar a su esposo Eligio Martínez (mi abuelo) el café en reservas. Siendo cultivadores de café y cacao el capataz de la finca le traía lo mejor de la cosecha.
              </p>
              
              <p>
                La producción de café se había convertido en una tradición familiar, así que desde muy pequeña la señora Eugenia se vio relacionada con la producción de café, ya que los conocimientos y habilidades que ella había adquirido se debía a sabidurías que habían sido pasadas a través de sus familiares y herencia de colonizadores españoles de la región.
              </p>
              
              <p>
                Hoy día la tradición se ha mantenido y ha sido heredada y pasada a una compañía productora con la receta secreta familiar, donde se le aplica las diferentes técnicas utilizadas por la señora Eugenia al café tostado y molido, esto incluye los diferentes sabores y mezclas especiales que ella había creado, dejando en evidencia su método original y especial.
              </p>
              
              <p>
                De esta manera nace un proyecto de tradición familiar que heredo una preocupación por el cuidado del cultivo, el proceso de beneficio del grano, la calidad física del grano, el tiempo y cuidado durante el almacenamiento del café en grano y adquiriendo increíbles técnicas de preparación de la bebida.
              </p>
              
              <p>
                El delicioso aroma se cuela en una gran mayoría de los hogares, es una tradición, pero con el tiempo, así como han evolucionado los consumidores, lo ha hecho el mercado de producción dominicano, así como el café Don Rogelio.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="px-4 sm:px-6 mb-20 bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-light tracking-tight mb-3">
              Calidad y Tradición
            </h2>
            <p className="text-sm text-gray-600 font-light">
              Un café bien conservado tendrá un aroma y cuerpo justo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Quality Standards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-light mb-3">Estándares de Calidad</h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Cumple con las más rigorosas normas de calidad para garantizar y satisfacer los nuevos gustos y exigencias, no solo locales sino también internacionales.
              </p>
            </motion.div>

            {/* Quality Control */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-light mb-3">Control de Calidad</h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Utilizamos técnicas operativas y actividades que permiten verificar el cumplimiento de los requisitos establecidos en los reglamentos de la norma de calidad.
              </p>
            </motion.div>

            {/* Cultivation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-light mb-3">Cultivo</h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Se cultiva en las mejores tierras de Barahona, Cibao y Ocoa, República Dominicana, a una altura de 1200 a 1300 metro, lo que determina su calidad sobresaliente.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packaging Section */}
      <section className="px-4 sm:px-6 mb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-light tracking-tight mb-8 text-center">
              Un Empaque para Productos de Calidad
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Conservation */}
              <div className="space-y-4">
                <h3 className="text-lg font-light">Conservación</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Su empaque está diseñado con los estándares mundiales de calidad del producto de café, utilizando tecnologías de empacado en bolsas con válvulas unidireccionales para café tostado y molido, el cual permite conservar su aroma, cuerpo y propiedades.
                </p>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Estas válvulas permiten que los gases al interior de la bolsa puedan salir e impide que el oxígeno entre y comience una oxidación del café. De esta manera se garantiza la calidad óptima del producto y puedas disfrutar del olor del café sin destapar.
                </p>
              </div>

              {/* Harvest */}
              <div className="space-y-4">
                <h3 className="text-lg font-light">Cosecha</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  La cosecha de este café es completamente manual, seleccionando uno a uno cada grano, con el objetivo de garantizar la calidad y que este sea digno de aprecio.
                </p>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Su empaque reusable o zipper resellable hace que sea mucho más fácil el almacenamiento del café. Su diseño ergonómico tardó 2 años preparándose, el cual hace un bolso de 1 Lb (454g) Don Rogelio un regalo perfecto.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recognition */}
      <section className="px-4 sm:px-6 mb-20 bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              El café de estas regiones es reconocido por su fama en los mercados internacionales, sobretodo en varios países europeos y Japón, entre otros. Como resultado tenemos un café sumamente apto para su exportación.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 sm:px-6 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-gray-600 font-light mb-6">
              Interesado en nuestro café?
            </p>
            <a
              href="https://wa.me/18092999188?text=Hola!%20Me%20interesa%20el%20Café%20Don%20Rogelio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors border-b border-gray-900 pb-1"
            >
              <span className="text-sm font-light tracking-wider uppercase">Contactar por WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="px-4 sm:px-6 pb-12">
        <div className="max-w-3xl mx-auto text-center border-t border-gray-200 pt-8">
          <p className="text-xs text-gray-500 font-light">
            Avenida George Washington No 500, Malecón Center Suite 202B<br />
            Zona Universitaria, Santo Domingo, Rep. Dom. 10103
          </p>
          <p className="text-xs text-gray-500 font-light mt-2">
            Tel: (829) 419-7725 | (809) 566-3921
          </p>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  )
}
