"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  Satellite, Monitor, Wifi, Shield, Gauge,
  MessageCircle, Sprout, Tractor,
  Signal, BarChart3, Zap, Check, ExternalLink,
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
    icon: Gauge,
    title: "Precisión GNSS+INS",
    description: "±2.5 cm con compensación del terreno, incluso en pendientes y condiciones difíciles.",
  },
  {
    icon: Zap,
    title: "Instalación rápida",
    description: "Diseño compacto aplicable a tractores nuevos y existentes con mínima inactividad.",
  },
  {
    icon: Signal,
    title: "Conectividad integrada",
    description: "H-PPP, 4G LTE, radio UHF, Wi-Fi y Bluetooth. Conmuta automáticamente entre RTK y PPP.",
  },
  {
    icon: Tractor,
    title: "Amplia compatibilidad",
    description: "Compatible con la mayoría de marcas y fabricantes de vehículos agrícolas.",
  },
]

const advantages = [
  {
    number: "01",
    icon: Gauge,
    title: "Precisión asequible",
    description:
      "Acceso a dirección automatizada de alta precisión (±2.5 cm) a un precio accesible. Ganancias reales de productividad desde la primera labor sin una inversión de alto nivel.",
  },
  {
    number: "02",
    icon: Satellite,
    title: "Dirección de alta precisión",
    description:
      "Tecnología GNSS+INS con compensación del terreno para múltiples operaciones. Mantiene la guía con precisión centimétrica incluso en pendientes pronunciadas y terrenos irregulares.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Instalación rápida y sencilla",
    description:
      "Diseño compacto pensado para aplicarse tanto a tractores nuevos como a equipos existentes. La mínima inactividad garantiza que el equipo vuelva al campo lo antes posible.",
  },
  {
    number: "04",
    icon: Monitor,
    title: "Interfaz de control intuitiva",
    description:
      "Software multilingüe AgNav en pantalla Android de 10.1\" con múltiples patrones de guía y visualización 3D del terreno. Fácil de operar sin curva de aprendizaje.",
  },
  {
    number: "05",
    icon: Wifi,
    title: "Conectividad mejorada",
    description:
      "Cambio automático entre RTK y PPP para minimizar tiempos de inactividad. Soporta H-PPP (Galileo E6-HAS), E-PPP, 4G LTE, radio UHF 410–470 MHz, Wi-Fi y Bluetooth.",
  },
  {
    number: "06",
    icon: Shield,
    title: "Durabilidad y fiabilidad",
    description:
      "Componentes resistentes al polvo y al agua con volante eléctrico de alto torque. Construido para aguantar las condiciones más exigentes del trabajo agrícola diario.",
  },
]

const useCases = [
  {
    icon: Sprout,
    title: "Siembra de precisión",
    description: "Trazos exactos en cada pasada para maximizar la uniformidad del cultivo y el aprovechamiento del suelo.",
  },
  {
    icon: Signal,
    title: "Cultivo de fajas",
    description: "Mantenimiento preciso de las líneas de cultivo para laboreos y tratamientos localizados.",
  },
  {
    icon: Wifi,
    title: "Pulverización de cultivos",
    description: "Cobertura uniforme sin solapamientos para reducir el consumo de agroquímicos y optimizar la aplicación.",
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
      { label: "Modos GNSS", value: "H-PPP, E-PPP, DRSmooth, SPP, DGPS, RTK" },
      { label: "Tecnología", value: "GNSS + INS con compensación del terreno" },
      { label: "Precisión máxima", value: "≤ 2.5 cm" },
      { label: "Velocidad máxima", value: "hasta 30 km/h" },
    ]
  },
  {
    group: "Hardware", items: [
      { label: "Pantalla", value: "10.1\" Android" },
      { label: "Control de dirección", value: "Eléctrico (alto torque)" },
      { label: "Cámara", value: "Sí" },
      { label: "Software", value: "AgNav (multilingüe)" },
    ]
  },
  {
    group: "Conectividad", items: [
      { label: "Inalámbrico", value: "Wi-Fi, Bluetooth" },
      { label: "Móvil", value: "4G LTE" },
      { label: "Módem UHF", value: "410 – 470 MHz" },
      { label: "Puertos", value: "CAN, RS232" },
    ]
  },
  {
    group: "Otros", items: [
      { label: "Compatibilidad", value: "Amplia gama de vehículos agrícolas" },
      { label: "Conmutación", value: "RTK / PPP automático" },
      { label: "Diseño", value: "Compacto, apto para reacondicionamiento" },
    ]
  },
]

const faqs = [
  {
    question: "¿Qué hace al NX510 SE una solución asequible?",
    answer:
      "El NX510 SE ofrece la misma precisión de ±2.5 cm que los modelos superiores pero a un precio más accesible. Es la opción ideal para productores que buscan incorporar dirección automática de calidad sin una inversión de alto nivel.",
  },
  {
    question: "¿Con qué vehículos es compatible?",
    answer:
      "Es compatible con la amplia mayoría de marcas y fabricantes de vehículos agrícolas: tractores de tracción delantera y trasera, articulados, y maquinaria diversa. Consultanos con los datos de tu equipo para confirmar compatibilidad.",
  },
  {
    question: "¿Qué es GNSS+INS y por qué es importante?",
    answer:
      "GNSS+INS combina la señal satelital (GNSS) con una unidad de medición inercial (INS) para compensar la inclinación del terreno. Esto garantiza precisión centimétrica incluso en campos con pendiente o terrenos irregulares donde solo el GNSS podría derivar.",
  },
  {
    question: "¿Cuánto tiempo tarda la instalación?",
    answer:
      "El NX510 SE fue diseñado para una instalación rápida y sencilla en tractores nuevos o existentes. Su formato compacto reduce la inactividad al mínimo para que el equipo vuelva al campo lo antes posible.",
  },
  {
    question: "¿Funciona sin internet en el campo?",
    answer:
      "Sí. Soporta H-PPP (Galileo E6-HAS) y E-PPP que no requieren red local, además de radio UHF integrada. El sistema conmuta automáticamente entre RTK y PPP para minimizar interrupciones en zonas con cobertura variable.",
  },
  {
    question: "¿Cómo puedo obtener el precio y más información?",
    answer:
      "Escribinos por WhatsApp y te enviamos una cotización personalizada con asesoramiento técnico. También podemos enviarte la ficha técnica oficial o coordinar una demostración con tu maquinaria.",
  },
]

const WA_LINK = "https://wa.me/5493435077008?text=Hola%2C%20quiero%20información%20sobre%20el%20piloto%20automático%20NX510%20SE"
const CHCNAV_LINK = "https://agriculture.chcnav.com/es/products/chcnav-NX510-SE"

export default function NX510SEPage() {
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
              <span className="text-foreground font-medium">CHCNAV NX510 SE</span>
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
                  CHCNAV NX510 SE
                </h1>
                <p className="text-xl text-primary font-semibold mb-4">
                  Sistema integrado de dirección automática
                </p>
                <p className="text-muted-foreground text-lg mb-8 text-pretty">
                  Solución de reacondicionamiento asequible, compacta y completa para una amplia gama de vehículos agrícolas. Precisión de ±2.5 cm con tecnología GNSS+INS y conmutación automática entre RTK y PPP para nunca perder la guía.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {["±2.5 cm de precisión", "GNSS+INS", "Instalación rápida", "4G + Wi-Fi"].map((tag) => (
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
                    <a href={CHCNAV_LINK} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" />
                      Ver ficha técnica
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
                    src="/nx510-se.png"
                    alt="Sistema CHCNAV NX510 SE"
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
                Precisión profesional a precio accesible
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
                Ventajas del NX510 SE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Por qué elegir el NX510 SE
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
                Ficha técnica del NX510 SE
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
                <a href={CHCNAV_LINK} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Ver ficha técnica completa en CHCNAV
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
                Contactanos hoy y recibí una cotización personalizada del NX510 SE con asesoramiento técnico incluido.
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
