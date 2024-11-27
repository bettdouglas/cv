import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"

export function ConsultationBooking() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Book a Consultation</h2>
      <Card>
        <CardHeader>
          <CardTitle>Project Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mobile">Mobile App Development</SelectItem>
                <SelectItem value="geospatial">Geospatial Solutions</SelectItem>
                <SelectItem value="backend">Backend Development</SelectItem>
                <SelectItem value="consulting">Technical Consulting</SelectItem>
              </SelectContent>
            </Select>
            <Textarea placeholder="Briefly describe your project" />
            <div>
              <h3 className="font-semibold mb-2">Select a date for your consultation:</h3>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>
            <Button type="submit">Book Consultation</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

