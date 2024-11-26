import { ModeToggle } from "@/components/mode-toggle"
import { PersonalInfo } from "@/components/personal-info"
import { Summary } from "@/components/summary"
import { Skills } from "@/components/skills"
import { WorkExperience } from "@/components/work-experience"
import { Education } from "@/components/education"
import { Projects } from "@/components/projects"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 dark:from-background dark:to-secondary/10">
      <header className="sticky top-0 z-10 backdrop-blur-sm bg-background/80 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Douglas David Bett</h1>
          <ModeToggle />
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 space-y-8">
        <PersonalInfo />
        <Summary />
        <Skills />
        <WorkExperience />
        <Education />
        <Projects />
      </main>
      <footer className="bg-secondary/20 dark:bg-secondary/10 py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Douglas David Bett. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
