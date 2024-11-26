import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    name: "Community Watch",
    url: "https://communitywatch.pages.dev/",
    description: "An app to enable community members to crowd source which issues they're facing as a community. It uses geolocation to group issues by region. This enables leaders at various geographic regions e.g county, constituency & ward to see what issues their people are facing and prioritize to fix them.",
    tags: ["Geolocation", "Community", "Issue Tracking"],
  },
  {
    name: "gRPC Dart Docs",
    url: "https://grpc-dart-docs.pages.dev/",
    description: "A set of guides to enable developers to learn quickly how they can use gRPC and Dart to create web servers with ease.",
    tags: ["gRPC", "Dart", "Documentation"],
  },
]

export function Projects() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
              <h3 className="font-semibold text-lg">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {project.name}
                </a>
              </h3>
              <p className="text-sm mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
