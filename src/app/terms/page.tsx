"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import Footer from "@/components/Footer"
import { ArrowLeft } from "lucide-react"

export default function TermsOfUse() {
  const { language, t } = useLanguage()

  const content = {
    en: {
      title: "Terms of Use",
      lastUpdated: "November 5, 2025",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: `By accessing and using the Don Rogelio website ("Website"), you accept and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use this Website.

These Terms of Use may be updated from time to time. Your continued use of the Website after any changes indicates your acceptance of the new terms.`
        },
        {
          title: "2. Age Verification and Restrictions",
          content: `You must be at least 21 years of age or the legal smoking age in your jurisdiction, whichever is higher, to access and use this Website.

By entering this Website, you certify that:
• You are of legal smoking age in your jurisdiction
• You will comply with all applicable laws regarding tobacco products
• You will not allow minors to access tobacco products purchased through this Website

We reserve the right to verify your age at any time and may refuse service or cancel orders if we cannot verify your age.`
        },
        {
          title: "3. Product Information and Availability",
          content: `We strive to provide accurate product descriptions, images, and pricing. However:

• Product information may contain errors or inaccuracies
• Product availability is subject to change without notice
• We reserve the right to limit quantities or refuse orders
• Prices are subject to change without notice
• Product images are for illustration purposes and actual products may vary

We reserve the right to discontinue any product at any time.`
        },
        {
          title: "4. Orders and Payment",
          content: `By placing an order, you make an offer to purchase products subject to these Terms of Use.

• All orders are subject to acceptance and availability
• We reserve the right to refuse or cancel any order
• Payment must be received before shipment
• You are responsible for providing accurate shipping and billing information
• You are responsible for all charges including shipping, handling, and applicable taxes

Orders may be cancelled if we suspect fraud or unauthorized transactions.`
        },
        {
          title: "5. Shipping and Delivery",
          content: `Shipping policies and delivery times vary by location:

• We only ship to locations where it is legal to do so
• Delivery times are estimates and not guaranteed
• Risk of loss passes to you upon delivery to the carrier
• You must be of legal age to receive tobacco product deliveries
• Signature confirmation may be required for delivery

We are not responsible for delays caused by shipping carriers or customs.`
        },
        {
          title: "6. Returns and Refunds",
          content: `Due to the nature of tobacco products:

• Tobacco products cannot be returned once received
• Damaged or defective products must be reported within 48 hours of delivery
• Refunds or replacements are at our sole discretion
• You may be required to provide photographic evidence of damage
• Return shipping costs are the responsibility of the customer unless the product is defective

All refund requests must be submitted in writing to info@donrogelio.com.`
        },
        {
          title: "7. Intellectual Property",
          content: `All content on this Website, including text, graphics, logos, images, and software, is the property of Don Rogelio or its licensors and is protected by intellectual property laws.

You may not:
• Copy, reproduce, or distribute any content without permission
• Use our trademarks or branding without authorization
• Modify or create derivative works from our content
• Use automated systems to access or collect data from the Website

Any unauthorized use may violate copyright, trademark, and other laws.`
        },
        {
          title: "8. User Conduct",
          content: `You agree not to:

• Use the Website for any illegal purpose
• Attempt to gain unauthorized access to any portion of the Website
• Interfere with or disrupt the Website or servers
• Transmit viruses, malware, or other harmful code
• Impersonate any person or entity
• Harass, threaten, or defame others
• Violate any applicable laws or regulations

We reserve the right to terminate your access to the Website for violations of these terms.`
        },
        {
          title: "9. Health Warnings",
          content: `SURGEON GENERAL WARNING: Cigar smoking can cause cancers of the mouth and throat, even if you do not inhale.

Additional risks associated with cigar smoking include:
• Heart disease and stroke
• Lung cancer and respiratory diseases
• Harmful effects on pregnant women and unborn children

By using this Website and purchasing our products, you acknowledge these health risks. Don Rogelio is not responsible for any health issues resulting from tobacco use.`
        },
        {
          title: "10. Disclaimer of Warranties",
          content: `THIS WEBSITE AND ALL PRODUCTS ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.

We disclaim all warranties, express or implied, including:
• Warranties of merchantability and fitness for a particular purpose
• Warranties regarding accuracy, reliability, or completeness of content
• Warranties that the Website will be uninterrupted or error-free

You use this Website at your own risk.`
        },
        {
          title: "11. Limitation of Liability",
          content: `To the maximum extent permitted by law:

• Don Rogelio shall not be liable for any indirect, incidental, special, or consequential damages
• Our total liability shall not exceed the amount paid by you for products purchased
• We are not responsible for damages resulting from use of tobacco products
• We are not liable for unauthorized access to your personal information

Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you.`
        },
        {
          title: "12. Indemnification",
          content: `You agree to indemnify and hold harmless Don Rogelio, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from:

• Your use of the Website
• Your violation of these Terms of Use
• Your violation of any rights of third parties
• Your purchase or use of tobacco products

This indemnification obligation will survive termination of these Terms of Use.`
        },
        {
          title: "13. Governing Law and Dispute Resolution",
          content: `These Terms of Use shall be governed by and construed in accordance with the laws of the Dominican Republic, without regard to conflict of law principles.

Any disputes arising from these Terms of Use or your use of the Website shall be resolved through:
1. Good faith negotiation
2. Binding arbitration if negotiation fails
3. Jurisdiction in the courts of the Dominican Republic

You waive any right to participate in class action lawsuits.`
        },
        {
          title: "14. Severability",
          content: `If any provision of these Terms of Use is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.`
        },
        {
          title: "15. Contact Information",
          content: `For questions about these Terms of Use, please contact us:

Don Rogelio
Email: info@donrogelio.com
Phone: +1 (809) 555-1234
Address: Dominican Republic

We will respond to your inquiry within a reasonable timeframe.`
        }
      ]
    },
    es: {
      title: "Términos de Uso",
      lastUpdated: "5 de noviembre de 2025",
      sections: [
        {
          title: "1. Aceptación de los Términos",
          content: `Al acceder y usar el sitio web de Don Rogelio ("Sitio Web"), usted acepta y se compromete a estar sujeto a estos Términos de Uso y nuestra Política de Privacidad. Si no está de acuerdo con estos términos, por favor no use este Sitio Web.

Estos Términos de Uso pueden actualizarse de vez en cuando. Su uso continuo del Sitio Web después de cualquier cambio indica su aceptación de los nuevos términos.`
        },
        {
          title: "2. Verificación y Restricciones de Edad",
          content: `Debe tener al menos 21 años de edad o la edad legal para fumar en su jurisdicción, lo que sea mayor, para acceder y usar este Sitio Web.

Al ingresar a este Sitio Web, usted certifica que:
• Tiene la edad legal para fumar en su jurisdicción
• Cumplirá con todas las leyes aplicables con respecto a los productos de tabaco
• No permitirá que menores accedan a productos de tabaco comprados a través de este Sitio Web

Nos reservamos el derecho de verificar su edad en cualquier momento y podemos rechazar el servicio o cancelar pedidos si no podemos verificar su edad.`
        },
        {
          title: "3. Información y Disponibilidad de Productos",
          content: `Nos esforzamos por proporcionar descripciones, imágenes y precios precisos de los productos. Sin embargo:

• La información del producto puede contener errores o inexactitudes
• La disponibilidad del producto está sujeta a cambios sin previo aviso
• Nos reservamos el derecho de limitar cantidades o rechazar pedidos
• Los precios están sujetos a cambios sin previo aviso
• Las imágenes de los productos son para fines ilustrativos y los productos reales pueden variar

Nos reservamos el derecho de discontinuar cualquier producto en cualquier momento.`
        },
        {
          title: "4. Pedidos y Pago",
          content: `Al realizar un pedido, usted hace una oferta para comprar productos sujetos a estos Términos de Uso.

• Todos los pedidos están sujetos a aceptación y disponibilidad
• Nos reservamos el derecho de rechazar o cancelar cualquier pedido
• El pago debe recibirse antes del envío
• Usted es responsable de proporcionar información de envío y facturación precisa
• Usted es responsable de todos los cargos, incluidos envío, manejo e impuestos aplicables

Los pedidos pueden cancelarse si sospechamos fraude o transacciones no autorizadas.`
        },
        {
          title: "5. Envío y Entrega",
          content: `Las políticas de envío y los tiempos de entrega varían según la ubicación:

• Solo enviamos a ubicaciones donde es legal hacerlo
• Los tiempos de entrega son estimaciones y no están garantizados
• El riesgo de pérdida pasa a usted al momento de la entrega al transportista
• Debe tener la edad legal para recibir entregas de productos de tabaco
• Se puede requerir confirmación de firma para la entrega

No somos responsables de retrasos causados por transportistas o aduanas.`
        },
        {
          title: "6. Devoluciones y Reembolsos",
          content: `Debido a la naturaleza de los productos de tabaco:

• Los productos de tabaco no se pueden devolver una vez recibidos
• Los productos dañados o defectuosos deben reportarse dentro de las 48 horas posteriores a la entrega
• Los reembolsos o reemplazos son a nuestra entera discreción
• Se le puede solicitar que proporcione evidencia fotográfica del daño
• Los costos de envío de devolución son responsabilidad del cliente a menos que el producto esté defectuoso

Todas las solicitudes de reembolso deben enviarse por escrito a info@donrogelio.com.`
        },
        {
          title: "7. Propiedad Intelectual",
          content: `Todo el contenido de este Sitio Web, incluidos texto, gráficos, logotipos, imágenes y software, es propiedad de Don Rogelio o sus licenciantes y está protegido por las leyes de propiedad intelectual.

No puede:
• Copiar, reproducir o distribuir ningún contenido sin permiso
• Usar nuestras marcas comerciales o marca sin autorización
• Modificar o crear obras derivadas de nuestro contenido
• Usar sistemas automatizados para acceder o recopilar datos del Sitio Web

Cualquier uso no autorizado puede violar leyes de derechos de autor, marcas comerciales y otras leyes.`
        },
        {
          title: "8. Conducta del Usuario",
          content: `Usted acepta no:

• Usar el Sitio Web para ningún propósito ilegal
• Intentar obtener acceso no autorizado a ninguna parte del Sitio Web
• Interferir o interrumpir el Sitio Web o los servidores
• Transmitir virus, malware u otro código dañino
• Hacerse pasar por cualquier persona o entidad
• Acosar, amenazar o difamar a otros
• Violar cualquier ley o regulación aplicable

Nos reservamos el derecho de terminar su acceso al Sitio Web por violaciones de estos términos.`
        },
        {
          title: "9. Advertencias de Salud",
          content: `ADVERTENCIA DEL CIRUJANO GENERAL: Fumar cigarros puede causar cáncer de boca y garganta, incluso si no inhalas.

Los riesgos adicionales asociados con fumar cigarros incluyen:
• Enfermedades cardíacas y accidentes cerebrovasculares
• Cáncer de pulmón y enfermedades respiratorias
• Efectos nocivos en mujeres embarazadas y niños no nacidos

Al usar este Sitio Web y comprar nuestros productos, usted reconoce estos riesgos para la salud. Don Rogelio no es responsable de ningún problema de salud resultante del uso de tabaco.`
        },
        {
          title: "10. Renuncia de Garantías",
          content: `ESTE SITIO WEB Y TODOS LOS PRODUCTOS SE PROPORCIONAN "TAL CUAL" SIN GARANTÍAS DE NINGÚN TIPO.

Renunciamos a todas las garantías, expresas o implícitas, incluyendo:
• Garantías de comerciabilidad e idoneidad para un propósito particular
• Garantías con respecto a la precisión, confiabilidad o integridad del contenido
• Garantías de que el Sitio Web estará ininterrumpido o libre de errores

Usted usa este Sitio Web bajo su propio riesgo.`
        },
        {
          title: "11. Limitación de Responsabilidad",
          content: `En la medida máxima permitida por la ley:

• Don Rogelio no será responsable de ningún daño indirecto, incidental, especial o consecuente
• Nuestra responsabilidad total no excederá la cantidad pagada por usted por los productos comprados
• No somos responsables de los daños resultantes del uso de productos de tabaco
• No somos responsables del acceso no autorizado a su información personal

Algunas jurisdicciones no permiten la limitación de responsabilidad, por lo que estas limitaciones pueden no aplicarse a usted.`
        },
        {
          title: "12. Indemnización",
          content: `Usted acepta indemnizar y mantener indemne a Don Rogelio, sus funcionarios, directores, empleados y agentes de cualquier reclamo, daño, pérdida o gasto que surja de:

• Su uso del Sitio Web
• Su violación de estos Términos de Uso
• Su violación de los derechos de terceros
• Su compra o uso de productos de tabaco

Esta obligación de indemnización sobrevivirá a la terminación de estos Términos de Uso.`
        },
        {
          title: "13. Ley Aplicable y Resolución de Disputas",
          content: `Estos Términos de Uso se regirán e interpretarán de acuerdo con las leyes de la República Dominicana, sin tener en cuenta los principios de conflicto de leyes.

Cualquier disputa que surja de estos Términos de Uso o su uso del Sitio Web se resolverá a través de:
1. Negociación de buena fe
2. Arbitraje vinculante si la negociación falla
3. Jurisdicción en los tribunales de la República Dominicana

Usted renuncia a cualquier derecho de participar en demandas colectivas.`
        },
        {
          title: "14. Divisibilidad",
          content: `Si alguna disposición de estos Términos de Uso se considera inválida o inaplicable, las disposiciones restantes permanecerán en pleno vigor y efecto. La disposición inválida se modificará en la medida mínima necesaria para hacerla válida y aplicable.`
        },
        {
          title: "15. Información de Contacto",
          content: `Para preguntas sobre estos Términos de Uso, contáctenos:

Don Rogelio
Correo electrónico: info@donrogelio.com
Teléfono: +1 (809) 555-1234
Dirección: República Dominicana

Responderemos a su consulta dentro de un plazo razonable.`
        }
      ]
    }
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-blue-700 bg-blue-900/80">
        <div className="container mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-light">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentContent.title}</h1>
            <p className="text-blue-200 text-sm">
              {t("termsLastUpdated")}: {currentContent.lastUpdated}
            </p>
          </div>

          <div className="space-y-6">
            {currentContent.sections.map((section, index) => (
              <div
                key={index}
                className="border-l-2 border-blue-400 pl-6"
              >
                <h2 className="text-xl md:text-2xl font-semibold mb-3 text-white">
                  {section.title}
                </h2>
                <div className="text-blue-200 leading-relaxed whitespace-pre-line text-sm">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

