"use client"

import type React from "react"

import { Mail, MapPin, Linkedin, Github } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implementar lógica de envio de email
    const mailtoLink = `mailto:contato@alyssonvictoria.dev?subject=Contato de ${formData.name}&body=${formData.message}%0D%0A%0D%0AEmail: ${formData.email}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Vamos Conversar</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Entre em Contato</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte da sua
                visão. Sinta-se à vontade para entrar em contato!
              </p>
            </div>

            <div className="space-y-4">
              <Card className="p-4 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:contato@alyssonvictoria.dev"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    contato@alyssonvictoria.dev
                  </a>
                </div>
              </Card>

              <Card className="p-4 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Localização</p>
                  <p className="text-sm text-muted-foreground">São Paulo, Brasil</p>
                </div>
              </Card>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/alysson97"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card hover:bg-accent/10 transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/alysson-victoria-510a60162/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card hover:bg-accent/10 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Sua mensagem..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full gap-2">
                <Mail className="h-4 w-4" />
                Enviar Mensagem
              </Button>
            </form>
          </Card>
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Alysson Victoria. Todos os direitos reservados.</p>
        </div>
      </div>
    </section>
  )
}
