"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useCallback } from "react"
import {
  MessageCircle, Monitor, Gauge, Wifi, Satellite, Camera,
  Layers, ArrowRight, Shield, Zap, ChevronLeft, ChevronRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const models = [
  {
    name: "CHCNAV NX612",
    tier: "Gama Alta",
    tagline: "SkyTrix · Pantalla 12.1\" · ISOBUS completo",
    href: "/productos/nx612",
    image: "/chcnav-nx612/foto-producto-nx612.png",
    bg: "#14321f",
    tierClass: "bg-accent/25 text-accent",
    wa: "https://wa.me/5493435077008?text=Hola%2C%20quiero%20información%20sobre%20el%20piloto%20automático%20NX612",
    features: [
      { icon: Gauge, title: "Precisión centimétrica", description: "±2.5 cm. Opera desde 0.1 hasta 30 km/h." },
      { icon: Monitor, title: "Pantalla 12.1\" industrial", description: "Android, alta luminosidad, visible bajo el sol." },
      { icon: Satellite, title: "Multi-sistema GNSS", description: "RTK, E-PPP, H-PPP y corrección SkyTrix sin red." },
      { icon: Wifi, title: "Conectividad total", description: "Wi-Fi, Bluetooth y 4G LTE integrado." },
      { icon: Camera, title: "Vista panorámica 360°", description: "Soporte de 1 a 4 cámaras externas." },
      { icon: Layers, title: "Compatible ISOBUS", description: "UT, AUX-N, TC-BAS, TC-SC y TC-GEO." },
    ],
  },
  {
    name: "CHCNAV NX610",
    tier: "Gama Media",
    tagline: "PointSky · Pantalla 10.1\" · ISOBUS",
    href: "/productos/nx610",
    image: "/chcnav-610/foto-producto.png",
    bg: "#0f2233",
    tierClass: "bg-sky-400/20 text-sky-300",
    wa: "https://wa.me/5493435077008?text=Hola%2C%20quiero%20información%20sobre%20el%20piloto%20automático%20NX610",
    features: [
      { icon: Gauge, title: "Precisión centimétrica", description: "±2.5 cm. Opera desde 0.1 hasta 30 km/h." },
      { icon: Monitor, title: "Pantalla 10.1\" Android", description: "Interfaz 3D de calidad industrial." },
      { icon: Satellite, title: "Multi-sistema GNSS", description: "RTK, E-PPP, H-PPP y corrección PointSky sin red." },
      { icon: Wifi, title: "Conectividad total", description: "Wi-Fi, Bluetooth y 4G LTE integrado." },
      { icon: Camera, title: "Vista panorámica 360°", description: "Soporte de 1 a 4 cámaras externas." },
      { icon: Layers, title: "Compatible ISOBUS", description: "UT, TC-BAS, TC-SC y TC-GEO." },
    ],
  },
  {
    name: "CHCNAV NX510 SE",
    tier: "Acceso",
    tagline: "GNSS+INS · Instalación rápida · Precio accesible",
    href: "/productos/nx510-se",
    image: "/chcnav-nx510-se/foto-producto.png",
    bg: "#252210",
    tierClass: "bg-white/20 text-white/80",
    wa: "https://wa.me/5493435077008?text=Hola%2C%20quiero%20información%20sobre%20el%20piloto%20automático%20NX510%20SE",
    features: [
      { icon: Gauge, title: "Precisión GNSS+INS", description: "±2.5 cm con compensación del terreno." },
      { icon: Monitor, title: "Pantalla 10.1\" Android", description: "Software AgNav con guía visual 3D." },
      { icon: Satellite, title: "Multi-modo GNSS", description: "H-PPP, E-PPP, DRSmooth y RTK." },
      { icon: Wifi, title: "Conectividad total", description: "4G LTE, radio UHF, Wi-Fi y Bluetooth." },
      { icon: Zap, title: "Instalación rápida", description: "Diseño compacto para tractores nuevos y existentes." },
      { icon: Shield, title: "Alta durabilidad", description: "Resistente al polvo, agua y vibración extrema." },
    ],
  },
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
    <section
      id="producto"
      aria-labelledby="producto-titulo"
      style={{ backgroundColor: models[current].bg, transition: "background-color 0.5s ease" }}
      className="py-20"
    >
      <div className="container mx-auto px-4">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            Agrotecnología
          </span>
          <h2 id="producto-titulo" className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            Línea de pilotos automáticos
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto text-pretty">
            Sistema de dirección automática que transforma la conducción manual en operación semiautomática. Permite sembrar, fumigar y cosechar con precisión, aumentando el rendimiento y reduciendo el uso de agroquímicos.
          </p>
        </motion.div>

        {/* ── Model tabs ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {models.map((model, i) => (
            <button
              key={model.name}
              onClick={() => api?.scrollTo(i)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${i === current
                ? "bg-white text-gray-900 shadow-md"
                : "text-white/55 border border-white/20 hover:text-white hover:border-white/50"
                }`}
            >
              {model.name}
            </button>
          ))}
        </div>

        {/* ── Carousel with side arrows ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Left arrow */}
          <button
            onClick={() => api?.scrollPrev()}
            aria-label="Modelo anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1 text-white/35 hover:text-white transition-colors hidden sm:block"
          >
            <ChevronLeft className="h-10 w-10" strokeWidth={1.25} />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => api?.scrollNext()}
            aria-label="Modelo siguiente"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1 text-white/35 hover:text-white transition-colors hidden sm:block"
          >
            <ChevronRight className="h-10 w-10" strokeWidth={1.25} />
          </button>

          <div className="sm:px-12">
            <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-2xl" />
            <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
              <CarouselContent>

                {models.map((model) => (
                  <CarouselItem key={model.name}>

                    <div className="grid lg:grid-cols-2 gap-10 items-center">

                      {/* ── Image ── */}
                      <div className="relative">

                        <div className="relative">
                          {/* <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full mb-3 ${model.tierClass}`}>
                            {model.tier}
                          </span> */}
                          <div className="bg-white/10 rounded-2xl overflow-hidden shadow-xl inline-flex">
                            <Image
                              src={model.image}
                              alt={model.name}
                              width={600}
                              height={450}
                              className="object-contain"
                              priority
                            />
                          </div>
                        </div>
                      </div>

                      {/* ── Features + buttons ── */}
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {model.name}
                        </h3>
                        <p className="text-sm text-white/45 mb-6">
                          {model.tagline}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-3 mb-8">
                          {model.features.map((feature) => (
                            <div
                              key={feature.title}
                              className="flex gap-3 p-3 bg-white/10 rounded-xl hover:bg-white/15 transition-colors"
                            >
                              <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                                <feature.icon className="h-4 w-4 text-white" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-white text-sm leading-tight">
                                  {feature.title}
                                </h4>
                                <p className="text-white/50 text-xs mt-0.5">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button
                            asChild
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                          >
                            <a href={model.wa} target="_blank" rel="noopener noreferrer">
                              <MessageCircle className="h-5 w-5" />
                              Consultar precio
                            </a>
                          </Button>
                          <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="gap-2 border-white/30 text-primary hover:bg-white/10 hover:text-white hover:border-white/50"
                          >
                            <Link href={model.href}>
                              Conocer más
                              <ArrowRight className="h-5 w-5" />
                            </Link>
                          </Button>
                        </div>
                      </div>

                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </motion.div>

        {/* ── Dots + counter ── */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="flex gap-2">
            {models.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current
                  ? "w-6 bg-white"
                  : "w-2 bg-white/25 hover:bg-white/50"
                  }`}
                aria-label={`Ver modelo ${i + 1}`}
              />
            ))}
          </div>
          <span className="text-xs text-white/35 tabular-nums">
            {current + 1} / {models.length}
          </span>
        </div>

      </div>
    </section>
  )
}
