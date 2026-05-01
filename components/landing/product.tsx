"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useCallback } from "react"
import { Check, MessageCircle, Monitor, Gauge, Wifi, Shield, Zap, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image"

const features = [
  {
    icon: Gauge,
    title: "Precisión centimétrica",
    description: "±2.5 cm. Funciona desde 0.2 km/h.",
  },
  {
    icon: Zap,
    title: "Motor de alto torque",
    description: "EW2 ofrece una fuerza excepcional de 26.5 N·m",
  },
  {
    icon: Clock,
    title: "Instalación rápida",
    description: "15 minutos sin modificar el circuito hidráulico",
  },
  {
    icon: Monitor,
    title: "Pantalla premium",
    description: "LCD 10.1\" de alto brillo (750 nits), visible bajo el sol",
  },
  {
    icon: Wifi,
    title: "Conectividad total",
    description: "Celulares, GSM, Radio, Wi-Fi, Bluetooth y RTCM3.X",
  },
  {
    icon: Shield,
    title: "Máxima Resistencia",
    description: "IP67 resistente al agua, polvo y vibraciones extremas",
  },
]

const highlights = [
  "Trabajo 24/7 día y noche",
  "RTK aid: 600 seg sin señal",
  "Compatible con tractores, pulverizadoras y cosechadoras",
  "Motor de alto torque (26.5 N·m)",
  "Gestión desde smartphone o tablet",
  "Sistema Android 10.0",
]

const carouselImages = [
  { src: "/eas301.png", alt: "Sistema EAS301 Pro eSurvey" },
  { src: "/placeholder.svg", alt: "Tractor con piloto automático en campo" },
  { src: "/placeholder.svg", alt: "Vista del sistema instalado" },
  { src: "/placeholder.svg", alt: "Detalle del panel de control" },
  { src: "/placeholder.svg", alt: "Conectividad y antena RTK" },
]

export function Product() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const onSelect = useCallback(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
  }, [api])

  useEffect(() => {
    if (!api) return
    onSelect()
    api.on("select", onSelect)
    return () => { api.off("select", onSelect) }
  }, [api, onSelect])
  return (
    <section id="producto" className="py-20 bg-secondary" aria-labelledby="producto-titulo">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            Agrotecnología
          </span>
          <h2 id="producto-titulo" className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4 text-balance">
            Piloto automático de precisión
          </h2>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto text-pretty">
            Sistema de dirección automática basado en rueda eléctrica que transforma la conducción manual en operación semiautomática, reduciendo la fatiga del operador. Su algoritmo de planificación de rutas permite sembrar, fumigar y cosechar con precisión, aumentando el rendimiento y reduciendo el uso de agroquímicos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
            <div className="relative">
              <div className="absolute -top-6 -left-2 z-10 bg-accent text-accent-foreground px-6 py-3 rounded-xl shadow-lg">
                <p className="font-bold text-lg">Modelo EAS301 Pro eSurvey</p>
              </div>
              <Carousel
                setApi={setApi}
                opts={{ loop: true }}
                className="w-full"
              >
                <CarouselContent>
                  {carouselImages.map((img, i) => (
                    <CarouselItem key={i}>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={600}
                        height={450}
                        className="rounded-2xl shadow-xl object-cover w-full aspect-[4/3]"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-white/70 hover:bg-white/90 border-0 shadow-sm text-secondary-foreground size-8 opacity-70 hover:opacity-100 transition-opacity" />
                <CarouselNext className="right-2 bg-white/70 hover:bg-white/90 border-0 shadow-sm text-secondary-foreground size-8 opacity-70 hover:opacity-100 transition-opacity" />
              </Carousel>
              <div className="flex justify-center gap-2 mt-4">
                {carouselImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => api?.scrollTo(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-5 bg-gray-500"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Ir a imagen ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-secondary-foreground mb-6">
              Características
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-4 bg-secondary-foreground/5 rounded-xl hover:bg-secondary-foreground/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-foreground text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-secondary-foreground/60 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full sm:w-auto"
            >
              <a
                href="https://wa.me/5493435077008?text=Hola%2C%20quiero%20información%20sobre%20el%20piloto%20automático"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Consultar precio y disponibilidad
              </a>
            </Button>
          </motion.div>
        </div>


      </div>
    </section>
  )
}
