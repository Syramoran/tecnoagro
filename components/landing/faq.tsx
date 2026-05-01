"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Hacen envíos a todo el país?",
    answer: "Sí, enviamos a todas las provincias de Argentina. Trabajamos con empresas de logística confiables para que tu equipo llegue en perfectas condiciones, estés donde estés. Desde La Pampa hasta Salta, llegamos a todo el territorio nacional.",
  },
  {
    question: "¿Qué garantía tienen los equipos?",
    answer: "Todos nuestros equipos cuentan con garantía oficial del fabricante. Además, ofrecemos soporte técnico directo post-venta. Si algo falla, vas a tener a alguien con nombre y apellido que te responde y te ayuda a resolverlo rápidamente.",
  },
  {
    question: "¿Cómo es la instalación del piloto automático?",
    answer: "La instalación es muy sencilla y se realiza en aproximadamente 15 minutos. No requiere modificar el circuito hidráulico de tu maquinaria. Además, te brindamos asistencia remota durante todo el proceso y material explicativo detallado.",
  },
  {
    question: "¿Qué medios de pago aceptan?",
    answer: "Aceptamos transferencia bancaria, depósito y podemos trabajar con distintas opciones de financiación según el caso. Contactanos por WhatsApp y te armamos una propuesta adaptada a tus necesidades.",
  },
  {
    question: "¿El piloto automático funciona con mi tractor?",
    answer: "Nuestro sistema es de compatibilidad universal. Funciona con tractores, trasplantadoras, pulverizadoras y cosechadoras de distintas marcas y modelos. Contactanos con los datos de tu maquinaria y te confirmamos la compatibilidad.",
  },
  {
    question: "¿Necesito señal de internet en el campo?",
    answer: "El sistema funciona con múltiples opciones de conectividad: GSM, Radio, Wi-Fi y Bluetooth. Además, cuenta con RTK aid que mantiene la precisión por 600 segundos si se pierde la señal de corrección, para que nunca te quedes sin guiado.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-muted/30" aria-labelledby="faq-titulo">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="faq-titulo" className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Preguntas frecuentes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Si tenés alguna otra consulta, no dudes en contactarnos.
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
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
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
  )
}
