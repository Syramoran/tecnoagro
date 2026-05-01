"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Send, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    localidad: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const text = `Hola! Soy ${formData.nombre} de ${formData.localidad}. ${formData.mensaje}`
    const encodedText = encodeURIComponent(text)
    const whatsappUrl = `https://wa.me/5493435077008?text=${encodedText}`
    
    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-20 bg-secondary" aria-labelledby="contacto-titulo">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 id="contacto-titulo" className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6 text-balance">
              Contactanos
            </h2>
            <p className="text-secondary-foreground/70 text-lg mb-8 text-pretty">
              Envíanos tu consulta por WhatsApp o completá el formulario. 
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-secondary-foreground font-medium">WhatsApp</p>
                  <a 
                    href="https://wa.me/5493435077008"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    +54 9 343 507-7008
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-secondary-foreground font-medium">Teléfono</p>
                  <p className="text-secondary-foreground/70">+54 9 343 507-7008</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-secondary-foreground font-medium">Cobertura</p>
                  <p className="text-secondary-foreground/70">Envíos a todo el país</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border"
            >
              <h3 className="text-xl font-bold text-card-foreground mb-6">
                Envianos tu consulta
              </h3>

              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="nombre">Nombre</FieldLabel>
                  <Input
                    id="nombre"
                    name="nombre"
                    placeholder="Tu nombre completo"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="localidad">Localidad</FieldLabel>
                  <Input
                    id="localidad"
                    name="localidad"
                    placeholder="¿De dónde sos?"
                    value={formData.localidad}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="mensaje">Mensaje</FieldLabel>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Contanos qué necesitás: ¿qué cultivo trabajás? ¿qué maquinaria tenés?"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-1 resize-none"
                  />
                </Field>
              </FieldGroup>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 mt-6"
              >
                <Send className="h-5 w-5" />
                Enviar por WhatsApp
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
