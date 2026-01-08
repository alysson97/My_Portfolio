import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden"
      style={{ backgroundColor: "#0a0333" }}
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: "url(/images/computer-first.jpg)",
            backgroundPosition: "center right",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0333]/50 to-[#0a0333]" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-balance text-white">
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Alysson Victoria
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-cyan-300 font-medium">Full-Stack Software Engineer</p>
        </div>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
          Especializado em criar aplicações web escaláveis que impulsionam negócios. Do conceito ao deploy, entrego
          soluções completas que combinam design excepcional com engenharia sólida.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button size="lg" asChild className="bg-cyan-500 hover:bg-cyan-600 text-white">
            <a href="#projects">Ver Projetos</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 bg-transparent"
          >
            <a href="#contact">Entrar em Contato</a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <a
            href="https://github.com/alysson97"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/alysson-victoria-510a60162/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:contato@alyssonvictoria.dev" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <div className="pt-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
          <a href="#about" className="inline-block animate-bounce">
            <ArrowDown className="h-6 w-6 text-cyan-400" />
            <span className="sr-only">Scroll para baixo</span>
          </a>
        </div>
      </div>
    </section>
  )
}
