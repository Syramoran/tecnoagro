"use client"

import { motion } from "framer-motion"
import { Target, Heart, Lightbulb } from "lucide-react"
import Image from "next/image"

export function About() {
  return (
    <section id="nosotros" className="py-20 bg-background" aria-labelledby="nosotros-titulo">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              ¿Qué hacemos?
            </span>
            <h2 id="nosotros-titulo" className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              La empresa detrás de la tecnología
            </h2>
            <p className="text-muted-foreground text-lg mb-6 text-pretty">
              Somos <strong>Tecnoagro</strong>, una empresa argentina dedicada a acercar 
              los mejores equipos agrícolas importados a productores de todo el país. 
            </p>
            <p className="text-muted-foreground text-lg mb-8 text-pretty">
              Proveemos soluciones de calidad con el respaldo y la atención de personas que conocen cada producto a fondo y que entienden 
              tu actividad.
            </p>

            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-start gap-3 sm:block">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 sm:mb-3">
                  <Target className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Nuestra misión</h3>
                  <p className="text-sm text-muted-foreground">Democratizar el acceso a tecnología agrícola de calidad.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:block">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0 sm:mb-3">
                  <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Nuestros valores</h3>
                  <p className="text-sm text-muted-foreground">Honestidad, cercanía y compromiso real.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:block">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0 sm:mb-3">
                  <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Nuestra visión</h3>
                  <p className="text-sm text-muted-foreground">Ser referentes en tecnología agrícola en Argentina.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <Image
                src="/foto-testimonio-2.png"
                alt="Equipo técnico trabajando"
                width={300}
                height={400}
                className="rounded-2xl shadow-lg object-cover h-64 w-full"
              />
              <Image
                src="/foto-testimonio.png"
                alt="Campo agrícola tecnificado"
                width={300}
                height={400}
                className="rounded-2xl shadow-lg object-cover h-64 w-full mt-8"
              />
              <Image
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80"
                alt="Tecnología en el campo"
                width={300}
                height={400}
                className="rounded-2xl shadow-lg object-cover h-64 w-full -mt-8"
              />
              <Image
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&q=80"
                alt="Maquinaria agrícola moderna"
                width={300}
                height={400}
                className="rounded-2xl shadow-lg object-cover h-64 w-full"
              />
            </div>
            
            {/* Stats Badge */}
            <div className="absolute -bottom-6 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 bg-card shadow-xl rounded-2xl px-4 sm:px-10 py-4 border border-border">
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-primary">100K+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Hectáreas cubiertas</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-primary">+10 años</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">de experiencia</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
