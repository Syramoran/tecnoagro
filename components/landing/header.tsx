"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/#nosotros", label: "Empresa" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/#faq", label: "Preguntas frecuentes" },
]

const pilots = [
  { href: "/catalogo/chcnav-nx612", label: "CHCNAV NX612" },
  { href: "/catalogo/chcnav-nx610", label: "CHCNAV NX610" },
  { href: "/catalogo/chcnav-nx510-se", label: "CHCNAV NX510 SE" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPilotDropdownOpen, setIsPilotDropdownOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 py-3" aria-label="Navegación principal">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="Ir al inicio">
            <Image
              src="/images/logo-original.png"
              alt="Tecnoagro - Tecnología simple al alcance de todos"
              width={180}
              height={50}
              className="h-10 w-auto md:h-12"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
            <div className="relative group">
              <button className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium flex items-center gap-1">
                Piloto automático
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white border border-border rounded-lg shadow-lg py-2">
                  {pilots.map((pilot) => (
                    <Link
                      key={pilot.href}
                      href={pilot.href}
                      className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-accent/50 transition-colors"
                    >
                      {pilot.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            >
              <a
                href="https://wa.me/5493435077008?text=Hola%2C%20quiero%20más%20información%20sobre%20sus%20productos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
                Contactar
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div>
                  <div className="text-foreground/70 font-medium text-sm py-2 mb-2">
                    Piloto automático
                  </div>
                  <div className="flex flex-col gap-2 ml-4">
                    {pilots.map((pilot) => (
                      <Link
                        key={pilot.href}
                        href={pilot.href}
                        className="text-foreground/60 hover:text-primary transition-colors text-sm py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {pilot.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full"
                >
                  <a
                    href="https://wa.me/5493435077008?text=Hola%2C%20quiero%20más%20información%20sobre%20sus%20productos"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Contactar por WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
