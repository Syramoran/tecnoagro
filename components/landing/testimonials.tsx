"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Carlos Méndez",
    location: "Córdoba",
    role: "Productor agrícola",
    content: "Lo que más me convenció de Tecnoagro fue poder hablar directo con los dueños. Me explicaron todo y me respondieron en el día.",
    image: "https://images.unsplash.com/photo-1714916125313-eb6867106b48?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Roberto Fernández",
    location: "Santiago del Estero",
    role: "Contratista rural",
    content: "Pensé que desde el interior iba a ser difícil acceder a esta tecnología. Me lo mandaron rápido, la instalación fue simple y el equipo funciona perfecto.",
    image: "https://images.unsplash.com/photo-1625646417784-753323a514f0?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Martín Acosta",
    location: "La Pampa",
    role: "Empresario agropecuario",
    content: "Ya tenía experiencia con otros pilotos automáticos. Este tiene una precisión impresionante, recomiendo el eas310.",
    image: "https://images.unsplash.com/photo-1624307123800-04b08005245f?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/30" aria-labelledby="testimonios-titulo">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="testimonios-titulo" className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Lo que dicen los productores
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Personas de todo el país confían en Tecnoagro para equipar sus campos 
            con la mejor tecnología.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border relative flex flex-col"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 text-pretty flex-1">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <Image
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name}`}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
