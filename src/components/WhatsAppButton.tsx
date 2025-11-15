"use client"
import Image from "next/image"

export default function WhatsAppButton() {
  const whatsappNumber = "18092999188"
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 transition-all duration-300 hover:scale-110"
      aria-label="Contact via WhatsApp"
      title="Contact: +1.809.299.9188"
    >
      <Image
        src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/capsulex/whattsapp2.png"
        alt="WhatsApp"
        width={56}
        height={56}
        className="!w-14 !h-14"
        style={{ objectFit: "contain" }}
        priority
      />
    </a>
  )
}

