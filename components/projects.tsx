import { ExternalLink, Github } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "My Portfolio",
    description:
      "Portfolio pessoal desenvolvido com Next.js, React e Tailwind CSS. Design moderno e responsivo com animações suaves e foco em experiência do usuário.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SASS"],
    github: "https://github.com/alysson97/My_Portfolio",
    demo: "https://my-portfolio-red-alpha.vercel.app",
    date: "Set 2023",
  },
  {
    title: "Site de Fotografia",
    description:
      "Website moderno para fotógrafo profissional, construído com Next.js. Galeria interativa com carregamento otimizado de imagens e design elegante.",
    technologies: ["Next.js", "React", "CSS Modules", "Vercel"],
    date: "Ago 2023",
  },
  {
    title: "Sistema Financeiro BaaS",
    description:
      "Desenvolvimento e manutenção de sistema financeiro white-label para banco digital. Implementação de features complexas e integração com serviços bancários.",
    technologies: ["PHP", "Yii2", "React", "Node.js", "MySQL", "CI/CD"],
    date: "2024 - 2025",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Projetos em Destaque</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">{project.date}</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>

              {(project.github || project.demo) && (
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  {project.github && (
                    <Button asChild variant="outline" size="sm" className="gap-2 bg-transparent">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Código
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button asChild size="sm" className="gap-2">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
            <a href="https://github.com/alysson97" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              Ver Mais no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
