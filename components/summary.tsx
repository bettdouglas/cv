import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Summary() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Professional Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-lg">
          Senior Software Developer with over 5 years of experience crafting innovative solutions across multiple domains:
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className="text-sm">Geospatial Applications</Badge>
          <Badge variant="secondary" className="text-sm">Mobile Development</Badge>
          <Badge variant="secondary" className="text-sm">Web Servers</Badge>
        </div>
        <ul className="list-disc list-inside space-y-2">
          <li>Expert in developing geospatial applications, leveraging GIS technologies for data collection, analysis, and visualization.</li>
          <li>Proficient in creating cross-platform mobile applications using Flutter, ensuring seamless user experiences on both Android and iOS.</li>
          <li>Skilled in building robust and scalable web servers using various frameworks and technologies, including gRPC, Django, and FastAPI.</li>
          <li>Committed to delivering high-quality, future-proof solutions that address complex business challenges and drive innovation.</li>
        </ul>
      </CardContent>
    </Card>
  )
}
