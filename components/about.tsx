import { Card } from "@/components/ui/card"
import { Code2, Rocket, Users } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Por Que Trabalhar Comigo?</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Mais do que apenas código, entrego soluções que fazem a diferença para o seu negócio
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center space-y-3 border-2 hover:border-cyan-500/50 transition-colors">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mx-auto">
              <Code2 className="h-6 w-6 text-cyan-500" />
            </div>
            <h3 className="font-semibold text-lg">Código Limpo & Escalável</h3>
            <p className="text-sm text-muted-foreground">Arquitetura sólida e manutenível que cresce com seu negócio</p>
          </Card>

          <Card className="p-6 text-center space-y-3 border-2 hover:border-cyan-500/50 transition-colors">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mx-auto">
              <Rocket className="h-6 w-6 text-cyan-500" />
            </div>
            <h3 className="font-semibold text-lg">Entrega Rápida</h3>
            <p className="text-sm text-muted-foreground">
              Do MVP ao produto final, com iterações ágeis e feedback contínuo
            </p>
          </Card>

          <Card className="p-6 text-center space-y-3 border-2 hover:border-cyan-500/50 transition-colors">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mx-auto">
              <Users className="h-6 w-6 text-cyan-500" />
            </div>
            <h3 className="font-semibold text-lg">Comunicação Clara</h3>
            <p className="text-sm text-muted-foreground">Transparência total em cada etapa do desenvolvimento</p>
          </Card>
        </div>

        <Card className="p-8 lg:p-12">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg font-medium text-foreground">
              Transformo desafios técnicos complexos em soluções elegantes e funcionais.
            </p>

            <p>
              Com experiência em <strong className="text-foreground">sistemas financeiros de alta criticidade</strong>,
              trabalho com tecnologias modernas como <strong className="text-foreground">React</strong>,
              <strong className="text-foreground"> Next.js</strong>,{" "}
              <strong className="text-foreground">TypeScript</strong>,
              <strong className="text-foreground"> Node.js</strong> e{" "}
              <strong className="text-foreground">PHP/Laravel</strong>
              para criar aplicações que não apenas funcionam, mas encantam usuários.
            </p>

            <p>
              Atualmente trabalho em uma <strong className="text-foreground">fintech BaaS</strong>, onde construo
              produtos financeiros robustos e escaláveis. Como freelancer, ajudo empresas e startups a tirarem suas
              ideias do papel e transformá-las em produtos digitais de sucesso.
            </p>

            <p className="text-foreground font-medium">
              Minha missão: entregar não apenas código, mas resultados mensuráveis que impulsionam seu negócio.
            </p>

            <div className="pt-6 border-t border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Formação Acadêmica</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-foreground">Análise de Sistemas de Computação</p>
                  <p className="text-sm">Instituto Federal de São Paulo (IFSP) • 2022 - 2025</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
