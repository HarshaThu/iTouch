import { ServiceImage } from "../components/service-image"
import { ServiceCards } from "../components/service-cards"

export default function ServicesPage() {
  return (
    <section className="min-h-screen">
      <div className="bg-primary/5 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-josefin mb-6 font-bold">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Choose the <span className="font-bold">perfect duration</span> for your relaxation journey
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto">
            <ServiceImage />
            <ServiceCards />
          </div>
        </div>
      </div>
    </section>
  )
}
