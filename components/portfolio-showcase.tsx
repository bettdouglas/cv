import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const portfolioItems = [
  {
    title: "Crop Nutrition Labs Mobile App",
    description: "Developed a Flutter-based mobile application for managing laboratory services and data collection.",
    metrics: ["3000+ active users", "50% reduction in data entry time"],
    testimonial: "The app has revolutionized our field operations and data management processes.",
    technologies: ["Flutter", "Firebase", "Google Cloud"]
  },
  {
    title: "Avocado Society of Kenya Registration System",
    description: "Built a mobile and web-based system for registering and managing avocado growers across Kenya.",
    metrics: ["10,000+ members registered", "200% increase in membership engagement"],
    testimonial: "This system has significantly improved our ability to support and connect with our members.",
    technologies: ["Flutter", "Python", "Docker", "Google Cloud"]
  },
  {
    title: "Geospatial Analysis Tool for Urban Planning",
    description: "Developed a custom GIS tool for analyzing urban development patterns and infrastructure needs.",
    metrics: ["30% improvement in resource allocation", "Identified 5 high-priority development areas"],
    testimonial: "The insights provided by this tool have been invaluable for our city's planning processes.",
    technologies: ["Python", "GeoPandas", "PostGIS", "Leaflet"]
  }
]

export function PortfolioShowcase() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Portfolio Showcase</h2>
      <div className="space-y-6">
        {portfolioItems.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{item.description}</p>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Success Metrics:</h3>
                <ul className="list-disc pl-4">
                  {item.metrics.map((metric, i) => (
                    <li key={i}>{metric}</li>
                  ))}
                </ul>
              </div>
              <blockquote className="border-l-4 pl-4 italic mb-4">
                "{item.testimonial}"
              </blockquote>
              <div>
                <h3 className="font-semibold mb-2">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

