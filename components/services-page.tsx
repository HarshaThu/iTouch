"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Sensual Relaxation",
    duration: "30 min",
    price: 60,
    currency: "AUD"
  },
  {
    title: "Sensual Relaxation",
    duration: "45 min",
    price: 75,
    currency: "AUD"
  },
  {
    title: "Sensual Relaxation",
    duration: "1 hr",
    price: 90,
    currency: "AUD"
  }
]

export function ServicesPageContent() {
  return (
    <section className="min-h-screen">
      <div className="bg-primary/5 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-josefin mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Choose the perfect duration for your relaxation journey
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="bg-primary/5 border-primary/20">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="font-josefin text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-lg font-medium">{service.duration}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <p className="text-4xl font-semibold text-primary">
                      ${service.price}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">AUD</p>
                  </div>
                  <Button className="w-full font-josefin" size="lg">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
