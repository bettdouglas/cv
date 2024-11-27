import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on the scope and complexity. A simple mobile app might take 4-6 weeks, while a complex geospatial solution could take 2-3 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer: "Yes, we offer various support and maintenance packages tailored to your needs. These can include bug fixes, feature updates, and performance optimizations."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer both project-based and hourly pricing models. The best option depends on your project's scope and requirements. We'll discuss pricing details during our consultation."
  },
  {
    question: "What geographic areas do you serve?",
    answer: "While we're based in Kenya, we offer our services globally. We've worked with clients across Africa, Europe, and North America."
  }
]

export function ContactInquiry() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Contact & Inquiries</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
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
              <Textarea placeholder="Your message" />
              <Button type="submit">Send Inquiry</Button>
            </form>
            <p className="mt-4 text-sm text-muted-foreground">We typically respond within 1-2 business days.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

