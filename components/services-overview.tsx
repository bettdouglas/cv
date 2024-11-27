import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Globe, Headphones, Server } from 'lucide-react'

const services = [
  {
    title: "Mobile Application Development (Flutter)",
    description: "Create cross-platform mobile apps with stunning UI and robust functionality.",
    icon: Code,
    value: "Rapid development, consistent user experience across platforms, and cost-effective solutions."
  },
  {
    title: "Geospatial Solutions",
    description: "Leverage location data to provide insights and enhance decision-making processes.",
    icon: Globe,
    value: "Improved resource allocation, enhanced logistics, and data-driven geographical insights."
  },
  {
    title: "Backend Development",
    description: "Build scalable and efficient server-side applications and APIs.",
    icon: Server,
    value: "Robust infrastructure, improved performance, and seamless integration capabilities."
  },
  {
    title: "Technical Consulting",
    description: "Expert advice on software architecture, technology stack, and best practices.",
    icon: Headphones,
    value: "Optimized development processes, reduced technical debt, and improved project outcomes."
  }
]

export function ServicesOverview() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <service.icon className="mr-2 h-6 w-6" />
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{service.description}</p>
              <p className="font-semibold">Business Value:</p>
              <p>{service.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

