import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute right-0 top-1/4 w-[600px] h-[600px] opacity-10">
          <img src="/images/ampulheta.png" alt="" className="w-full h-full object-contain animate-pulse" />
        </div>
      </div>

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
