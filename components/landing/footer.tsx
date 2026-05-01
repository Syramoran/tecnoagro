"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, MessageCircle } from "lucide-react"

const footerLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#producto", label: "Producto" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
]

const socialLinks = [
  { href: "https://wa.me/5493435077008", icon: MessageCircle, label: "WhatsApp" },
  { href: "https://instagram.com/tecnoagro", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com/tecnoagro", icon: Facebook, label: "Facebook" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-secondary-foreground/10" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <Image
              src="/images/logo-para-fondos-oscuros.png"
              alt="Tecnoagro"
              width={150}
              height={40}
              className="h-10 w-auto mx-auto md:mx-0 mb-3"
            />
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-8 pt-8">
          <p className="text-center text-secondary-foreground/50 text-sm">
            © {currentYear} Tecnoagro. Todos los derechos reservados. Argentina.
          </p>
        </div>
      </div>
    </footer>
  )
}
