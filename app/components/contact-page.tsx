"use client"

import { Card, CardContent } from "@/components/ui/card"

const locations = [
  {
    address: "16 James St",
    city: "Clayton South",
    state: "VIC",
    postcode: "3169",
    country: "Australia",
    phone: "+61 481 781 580"
  },
  {
    address: "488 Nepean Hwy",
    city: "Chelsea",
    state: "VIC",
    postcode: "3196",
    country: "Australia",
    phone: "+61 421 181 587"
  }
]

export function ContactPageContent() {
  return (
    <section className="min-h-screen">
      <div className="bg-primary/5 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-josefin mb-6 font-bold">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Visit us at any of our <span className="font-bold">convenient locations</span>
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {locations.map((location, index) => (
              <Card key={index} className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="font-josefin text-2xl font-bold">{location.city}</h3>
                    <div className="space-y-4">
                      <div className="text-lg text-muted-foreground">
                        <p className="font-bold">{location.address}</p>
                        <p>{location.city} {location.state} {location.postcode}</p>
                        <p>{location.country}</p>
                        <p className="mt-2 font-medium text-primary">{location.phone}</p>
                      </div>
                      <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                        <iframe
                          src={`https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(
                            location.city === "Clayton South" 
                              ? "145.1151,-37.9482,145.1251,-37.9382" // Clayton South coordinates
                              : "145.1151,-38.0534,145.1251,-38.0434" // Chelsea coordinates
                          )}&layer=mapnik`}
                          className="absolute inset-0 w-full h-full border-0"
                          allowFullScreen
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
