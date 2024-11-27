import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Education() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Education</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold">Technical University of Kenya</h3>
        <p className="text-sm text-muted-foreground">Bachelors of Applied Science GeoInformatics (2014-2019)</p>
        <p className="text-sm text-muted-foreground">Nairobi, Kenya</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li className="text-sm">Learned about the collection, preparation, storage and analysis of geographic data to extract insights which add business value.</li>
          <li className="text-sm">Learned how to make web maps.</li>
        </ul>
      </CardContent>
    </Card>
  )
}

