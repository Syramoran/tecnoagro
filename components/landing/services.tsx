"use client"

import { motion } from "framer-motion"
import { Cpu, Wrench, Truck, Users, ArrowRight } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Cpu,
    title: "Tecnología Importada",
    description: "Equipos de última generación traídos directamente para maximizar el rendimiento de tu campo.",
    color: "bg-primary",
  },
  {
    icon: Users,
    title: "Asesoramiento Directo",
    description: "Hablás directamente con los dueños. Sin intermediarios, sin call centers.",
    color: "bg-accent",
  },
  {
    icon: Wrench,
    title: "Servicio Técnico",
    description: "Soporte real post-venta. Tenés a alguien con nombre y apellido del otro lado.",
    color: "bg-destructive",
  },
  {
    icon: Truck,
    title: "Envíos Nacionales",
    description: "Desde La Pampa hasta Salta. Llegamos a donde estés con la mejor tecnología.",
    color: "bg-primary",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-secondary" aria-labelledby="servicios-titulo">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Nuestros Servicios
            </span>
            <h2 id="servicios-titulo" className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6 text-balance">
              ¿Qué Hacemos en{" "}
              <span className="text-accent">Tecnoagro</span>?
            </h2>
            <p className="text-secondary-foreground/70 text-lg mb-10 text-pretty max-w-lg">
              Proveemos tecnología agrícola de calidad con el respaldo y la atención que 
              solo una empresa familiar puede ofrecer.
            </p>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-secondary-foreground/5 hover:bg-secondary-foreground/10 transition-colors cursor-default"
                >
                  <div className={`w-10 h-10 rounded-lg ${service.color} flex items-center justify-center shrink-0`}>
                    <service.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-foreground mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-secondary-foreground/60 text-pretty">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contacto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 mt-8 text-accent hover:text-accent/80 font-medium transition-colors group"
            >
              Conocé más sobre nosotros
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3" />
              
              {/* Main image */}
              <Image
                src="https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?w=700&q=80"
                alt="Equipo técnico de Tecnoagro trabajando"
                width={600}
                height={500}
                className="relative rounded-2xl object-cover shadow-2xl"
              />

              {/* Floating stats card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">10+</p>
                    <p className="text-xs text-muted-foreground">Años de experiencia</p>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="text-center">
                    <p className="text-3xl font-bold text-destructive">24hs</p>
                    <p className="text-xs text-muted-foreground">Respuesta garantizada</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
