import { Card } from "@/components/ui/card"
import { Code, Database, Wrench, Cloud } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "SASS", "Bootstrap", "HTML/CSS"],
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "PHP", "Laravel", "Yii2", "MySQL", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    title: "Ferramentas & Práticas",
    icon: Wrench,
    skills: ["Git", "CI/CD", "Bitbucket", "NPM", "Yarn", "Jest", "Clean Code", "Clean Architecture"],
  },
  {
    title: "Outros",
    icon: Cloud,
    skills: ["C Language", "AutoCAD", "Test Automation", "Fintech", "BaaS", "Agile/Scrum"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Habilidades & Tecnologias</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <IconComponent className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary/10 text-secondary text-sm rounded-md hover:bg-secondary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
