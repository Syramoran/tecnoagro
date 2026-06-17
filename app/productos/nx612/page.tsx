"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  Satellite, Monitor, Wifi, Layers, Camera, Gauge,
  MessageCircle, ChevronLeft, Sprout, Tractor,
  RotateCw, Signal, Navigation2, BarChart3, Download, Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { WhatsAppFAB } from "@/components/landing/whatsapp-fab"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const highlights = [
  {
    icon: Satellite,
    title: "Múltiples modos GNSS",
    description: "SPP, DGPS, RTK, E-PPP, H-PPP y corrección satelital SkyTrix sin necesidad de red.",
  },
  {
    icon: Gauge,
    title: "Precisión ±2.5 cm",
    description: "Rendimiento centimétrico constante desde 0.1 hasta 30 km/h de velocidad de trabajo.",
  },
  {
    icon: RotateCw,
    title: "5 modos de giro en U",
    description: "Patrones de guía adaptables a cualquier tipo de cultivo y operación de campo.",
  },
  {
    icon: Tractor,
    title: "Alta versatilidad",
    description: "Compatible con tractores, pulverizadoras, cosechadoras y trasplantadoras de arroz.",
  },
]

const advantages = [
  {
    number: "01",
    icon: Satellite,
    title: "Posicionamiento GNSS RTK y SkyTrix",
    description:
      "Opera con redes GNSS RTK convencionales y con SkyTrix, el servicio de corrección satelital de CHCNAV. Esto garantiza precisión centimétrica incluso en zonas remotas sin cobertura de internet ni infraestructura de red local.",
  },
  {
    number: "02",
    icon: Layers,
    title: "Compatible con ISOBUS",
    description:
      "Cumple los estándares ISOBUS UT, AUX-N, TC-BAS, TC-SC y TC-GEO, permitiendo la integración total con implementos modernos y simplificando la operación desde la cabina.",
  },
  {
    number: "03",
    icon: RotateCw,
    title: "Giro en U inteligente",
    description:
      "Cinco modos de giro en U configurables para adaptarse a los distintos requisitos operativos según el cultivo, el implemento y las dimensiones de la parcela.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Gestión agrícola con FarmMaster",
    description:
      "Integración opcional con la plataforma FarmMaster para gestión agrícola en línea: registro de actividades, mapas de campo, análisis de rendimiento y control remoto desde cualquier dispositivo.",
  },
  {
    number: "05",
    icon: Navigation2,
    title: "Guía de accesorios avanzada",
    description:
      "El sistema mantiene la precisión del implemento incluso en terrenos con pendiente, compensando automáticamente la desviación lateral para garantizar trazos exactos en toda la labor.",
  },
  {
    number: "06",
    icon: Camera,
    title: "Vista panorámica 360°",
    description:
      "Soporte para 1 a 4 cámaras externas para una visión completa del entorno de trabajo. Mejora la seguridad del operador y facilita las maniobras en espacios reducidos o condiciones de baja visibilidad.",
  },
]

const useCases = [
  {
    icon: Sprout,
    title: "Siembra de precisión",
    description: "Trazos exactos en cada pasada para maximizar el aprovechamiento del suelo y uniformidad del cultivo.",
  },
  {
    icon: Signal,
    title: "Cultivo de fajas",
    description: "Mantenimiento preciso de las líneas de cultivo para laboreos y tratamientos localizados.",
  },
  {
    icon: Wifi,
    title: "Pulverización de cultivos",
    description: "Cobertura uniforme y sin solapamientos para reducir el consumo de agroquímicos hasta un 15%.",
  },
  {
    icon: BarChart3,
    title: "Optimización de cosecha",
    description: "Pasadas paralelas exactas para aumentar la eficiencia y reducir pérdidas en la recolección.",
  },
]

const specs = [
  {
    group: "Posicionamiento", items: [
      { label: "Modos GNSS", value: "SPP, DGPS, RTK, E-PPP, H-PPP, SkyTrix" },
      { label: "Precisión máxima", value: "≤ 2.5 cm" },
      { label: "Rango de velocidad", value: "0.1 – 30 km/h" },
    ]
  },
  {
    group: "Hardware", items: [
      { label: "Pantalla", value: "12.1\" Android industrial" },
      { label: "Control de dirección", value: "Eléctrico" },
      { label: "Entrada de cámaras", value: "1 – 4 canales" },
    ]
  },
  {
    group: "Conectividad", items: [
      { label: "Inalámbrico", value: "Wi-Fi, Bluetooth" },
      { label: "Móvil", value: "4G LTE" },
      { label: "Módem", value: "410 – 470 MHz" },
      { label: "Puertos", value: "CAN, RS232" },
    ]
  },
  {
    group: "Compatibilidad", items: [
      { label: "Vehículos", value: "Tractores, pulverizadoras, cosechadoras, trasplantadoras" },
      { label: "Estándar", value: "ISOBUS UT / AUX-N / TC-BAS / TC-SC / TC-GEO" },
      { label: "Software", value: "FarmMaster (opcional)" },
    ]
  },
]

const faqs = [
  {
    question: "¿Cuáles son las características clave del NX612?",
    answer:
      "El NX612 destaca por su precisión de ±2.5 cm, pantalla Android de 12.1\" de calidad industrial, 5 modos de giro en U, compatibilidad ISOBUS completa, corrección satelital SkyTrix (sin necesidad de red), y soporte para hasta 4 cámaras panorámicas. Es una solución integral para la dirección automática de precisión.",
  },
  {
    question: "¿Con qué vehículos es compatible?",
    answer:
      "Es compatible con tractores de tracción delantera y trasera, vehículos articulados, trasplantadoras de arroz y pulverizadores autopropulsados de cualquier marca. Contactanos con los datos de tu maquinaria y te confirmamos la compatibilidad.",
  },
  {
    question: "¿Qué es SkyTrix y por qué es importante?",
    answer:
      "SkyTrix es el servicio de corrección satelital de CHCNAV que permite obtener precisión centimétrica sin depender de una red RTK local ni de cobertura de internet. Es ideal para zonas rurales remotas donde la conectividad es limitada o inexistente.",
  },
  {
    question: "¿Cuántos modos de guía tiene y para qué sirven?",
    answer:
      "El NX612 cuenta con 5 modos de giro en U configurables para adaptarse a distintos cultivos y operaciones: siembra, cultivo en fajas, pulverización y cosecha. Cada modo optimiza el patrón de trabajo para minimizar solapamientos y pérdidas de tiempo en cabeceras.",
  },
  {
    question: "¿Funciona sin señal de internet en el campo?",
    answer:
      "Sí. Gracias al modo SkyTrix y al soporte de múltiples constelaciones GNSS (GPS, GLONASS, Galileo, BeiDou), el NX612 opera con precisión centimétrica incluso en zonas sin cobertura de red celular. Para conexión convencional, también soporta 4G LTE, Wi-Fi y Bluetooth.",
  },
  {
    question: "¿Cómo puedo obtener el precio y más información?",
    answer:
      "Escribinos por WhatsApp y te enviamos una cotización personalizada. También podemos enviarte la ficha técnica oficial en español o coordinar una demostración con tu maquinaria.",
  },
]

const WA_LINK = "https://wa.me/5493435077008?text=Hola%2C%20quiero%20información%20sobre%20el%20piloto%20automático%20NX612"
const PDF_LINK = "https://agriculture.chcnav.com/dam/jcr:b28a3002-19a9-4e7f-9e83-feb82cc6e02e/NX612_DS_ES.pdf"

export default function NX612Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">

        {/* ── Hero ── */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <nav aria-label="Ruta de navegación" className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
              <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
              <span>/</span>
              <Link href="/#producto" className="hover:text-primary transition-colors">Piloto automático</Link>
              <span>/</span>
              <span className="text-foreground font-medium">CHCNAV NX612</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Piloto automático agrícola
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance leading-tight">
                  CHCNAV NX612
                </h1>
                <p className="text-xl text-primary font-semibold mb-4">
                  Sistema de dirección automática de precisión
                </p>
                <p className="text-muted-foreground text-lg mb-8 text-pretty">
                  Dirección automática con rendimiento fiable en cualquier paisaje agrícola. Precisión de ±2.5 cm con corrección satelital SkyTrix, pantalla Android de 12.1&quot; y compatibilidad con todos los tipos de maquinaria.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {["±2.5 cm de precisión", "Pantalla 12.1\"", "SkyTrix sin red", "ISOBUS"].map((tag) => (
                    <span key={tag} className="flex items-center gap-1.5 bg-primary/10 text-primary text-sm font-medium px-3 py-1.5 rounded-full">
                      <Check className="h-3.5 w-3.5 shrink-0" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" />
                      Consultar precio
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="gap-2">
                    <a href={PDF_LINK} target="_blank" rel="noopener noreferrer">
                      <Download className="h-5 w-5" />
                      Ficha técnica (ES)
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
                <div className="relative bg-muted rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
                  <Image
                    src="/nx612.png"
                    alt="Sistema CHCNAV NX612"
                    width={600}
                    height={450}
                    className="object-contain w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 4 Highlights ── */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground text-balance">
                Tecnología diseñada para el campo real
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6 Ventajas ── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Ventajas del NX612
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Por qué elegir el NX612
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((item, i) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl font-black text-primary/20 leading-none tabular-nums">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Casos de uso ── */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
                Aplicaciones
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground text-balance">
                Casos de uso en el campo
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border text-center hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Especificaciones ── */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Especificaciones
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Ficha técnica del NX612
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {specs.map((group, i) => (
                <motion.div
                  key={group.group}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden"
                >
                  <div className="bg-primary/8 border-b border-border px-5 py-3">
                    <h3 className="font-bold text-foreground text-sm uppercase tracking-wide">{group.group}</h3>
                  </div>
                  <div className="divide-y divide-border">
                    {group.items.map((item) => (
                      <div key={item.label} className="flex justify-between gap-4 px-5 py-3">
                        <span className="text-sm text-muted-foreground shrink-0">{item.label}</span>
                        <span className="text-sm font-medium text-foreground text-right">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center mt-8"
            >
              <Button asChild variant="outline" className="gap-2">
                <a href={PDF_LINK} target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" />
                  Descargar ficha técnica completa (PDF)
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Preguntas frecuentes
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto text-pretty">
                ¿Tenés más dudas? Escribinos por WhatsApp y te respondemos al instante.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-left font-semibold text-card-foreground hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 text-pretty">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* ── CTA Final ── */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
                ¿Listo para llevar la precisión a tu campo?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto text-pretty">
                Contactanos hoy y recibí una cotización personalizada del NX612 con asesoramiento técnico incluido.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="gap-2 font-semibold">
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Consultar por WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-primary-foreground/30 text-primary hover:bg-primary-foreground/10">
                  <Link href="/catalogo">
                    Ver catálogo completo
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
