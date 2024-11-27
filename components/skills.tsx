import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const skillCategories = [
  {
    name: "Languages",
    skills: ["Dart", "Python", "Go", "JavaScript", "Bash"],
    summary: "Proficient in multiple programming languages, enabling versatile development across various platforms and technologies."
  },
  {
    name: "Tools",
    skills: ["Android Studio", "XCode", "VSCode", "GitHub", "Figma", "AdobeXD"],
    summary: "Experienced with industry-standard development tools for mobile and web application development, version control, and design collaboration."
  },
  {
    name: "Concepts",
    skills: ["Domain Driven Design", "Clean Architecture", "SOLID", "Automated Testing"],
    summary: "Strong foundation in software design principles and methodologies, ensuring scalable, maintainable, and robust code."
  },
  {
    name: "Frameworks",
    skills: ["Flutter", "gRPC", "Django", "FastAPI", "Flask"],
    summary: "Proficient in various frameworks for mobile and web development, with a focus on efficient and performant applications."
  },
  {
    name: "Mobile CI/CD DevOps",
    skills: ["Github Actions", "CodeMagic for Flutter CI/CD"],
    summary: "Experienced in implementing continuous integration and deployment pipelines for mobile applications, ensuring rapid and reliable releases."
  },
  {
    name: "Databases",
    skills: ["Firebase", "SQLite", "PostgreSQL", "ArangoDB", "MongoDB"],
    summary: "Skilled in working with various database systems, both relational and non-relational, to store and manage application data effectively."
  },
  {
    name: "Location Data Analysis",
    skills: ["Geographic data collection", "mapping", "analysis", "Visualization"],
    summary: "Specialized in collecting, analyzing, and visualizing geographic data, adding valuable insights to location-based applications and services."
  },
  {
    name: "DevOps",
    skills: ["Docker", "Docker Swarm"],
    summary: "Proficient in containerization technologies for efficient application deployment and scaling."
  },
  {
    name: "Cloud Technologies",
    skills: ["Google Cloud", "DigitalOcean"],
    summary: "Experienced in deploying and managing applications on cloud platforms, leveraging cloud services for scalable and reliable solutions."
  },
]

export function Skills() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {skillCategories.map((category, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{category.name}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{category.summary}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

