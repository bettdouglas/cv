import { ServicesOverview } from "@/components/services-overview"
import { ServicePackages } from "@/components/service-packages"

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <ServicesOverview />
      <ServicePackages />
    </div>
  )
}

