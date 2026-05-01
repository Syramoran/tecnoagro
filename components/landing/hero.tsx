"use client"

import { motion } from "framer-motion"
import { MessageCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      aria-label="Sección principal"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80"
          alt="Campo agrícola con tractor trabajando"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6 text-balance">
              Tecnología agrícola al{" "}
              <span className="text-accent">alcance de todos</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
              Equipamos tu campo con la mejor tecnología. Atención directa y personalizada. Soluciones reales para siembra 
              y pulverización.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base px-8"
              >
                <a
                  href="https://wa.me/5493435077008?text=Hola%2C%20quiero%20más%20información%20sobre%20sus%20productos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Hablemos
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base px-8"
              >
                <a href="#producto">Ver piloto automático</a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-secondary-foreground/70">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">✓</span>
                </div>
                <span className="text-sm">Envíos a todo el país</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-foreground/70">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">✓</span>
                </div>
                <span className="text-sm">Soporte técnico</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Tech-style decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-accent/40 rounded-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary/30 rounded-xl" />
              
              {/* Stats card overlay */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 -left-8 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl z-10"
              >
                <div className="flex items-center gap-4">
                  <p className="text-5xl font-bold text-primary leading-none">+500</p>
                  <p className="text-sm font-medium text-muted-foreground leading-snug">Productores<br />equipados</p>
                </div>
              </motion.div>

              {/* Precision badge */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full px-4 py-2 shadow-lg z-10"
              >
                <span className="text-sm font-semibold">Piloto EAS301 Pro</span>
              </motion.div>

              <Image
                src="/foto-hero-tilted.png"
                alt="Sistema de navegación GPS para agricultura de precisión"
                width={550}
                height={450}
                className="relative rounded-2xl shadow-2xl object-cover border-4 border-white/20"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#nosotros"
          className="flex flex-col items-center text-secondary-foreground/60 hover:text-accent transition-colors"
          aria-label="Ir a la siguiente sección"
        >
          <span className="text-sm mb-2">Descubrí más</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
