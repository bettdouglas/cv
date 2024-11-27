import { Education } from "@/components/education"
import { PersonalInfo } from "@/components/personal-info"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Summary } from "@/components/summary"
import { WorkExperience } from "@/components/work-experience"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <PersonalInfo />
      <Summary />
      <Skills />
      <WorkExperience />
      <Education />
      <Projects />
    </div>
  )
}

