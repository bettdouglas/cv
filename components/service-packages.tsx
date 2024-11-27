import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table"

const servicePackages = [
  {
    title: "Mobile App Development",
    scopes: ["Basic app (3-5 screens)", "Standard app (6-10 screens)", "Complex app (11+ screens)"],
    deliverables: ["Functional mobile app", "Source code", "App store submission"],
    timeline: "4-12 weeks",
    pricing: "Project-based or $100-150/hour",
    support: "30 days post-launch support included, maintenance packages available"
  },
  {
    title: "Geospatial Solutions",
    scopes: ["Data analysis", "Custom mapping", "Spatial database design"],
    deliverables: ["Analysis report", "Interactive maps", "Optimized database"],
    timeline: "2-8 weeks",
    pricing: "Project-based or $120-180/hour",
    support: "Data updates and system maintenance available"
  },
  {
    title: "Backend Development",
    scopes: ["API development", "Database design", "Server architecture"],
    deliverables: ["Functional API", "Database schema", "Deployment scripts"],
    timeline: "3-10 weeks",
    pricing: "Project-based or $110-160/hour",
    support: "Ongoing maintenance and scaling support available"
  },
  {
    title: "Technical Consulting",
    scopes: ["Architecture review", "Technology stack assessment", "Performance optimization"],
    deliverables: ["Detailed report", "Actionable recommendations", "Implementation plan"],
    timeline: "1-4 weeks",
    pricing: "$150-200/hour",
    support: "Follow-up consultations available"
  }
]

export function ServicePackages() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">Service Packages</h2>
      <div className="space-y-6">
        {servicePackages.map((pkg, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{pkg.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHead>Project Scopes</TableHead>
                    <TableCell>
                      <ul className="list-disc pl-4">
                        {pkg.scopes.map((scope, i) => (
                          <li key={i}>{scope}</li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>Deliverables</TableHead>
                    <TableCell>
                      <ul className="list-disc pl-4">
                        {pkg.deliverables.map((deliverable, i) => (
                          <li key={i}>{deliverable}</li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>Timeline</TableHead>
                    <TableCell>{pkg.timeline}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>Pricing</TableHead>
                    <TableCell>{pkg.pricing}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead>Support & Maintenance</TableHead>
                    <TableCell>{pkg.support}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

