"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

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

const locations = [
  {
    city: "Clayton South",
    phone: "+61 481 781 580"
  },
  {
    city: "Chelsea",
    phone: "+61 421 181 587"
  }
]

export function ServiceCards() {
  return (
    <div className="md:w-3/5 space-y-6">
      {services.map((service, index) => (
        <Card key={index} className="bg-primary/5 border-primary/20">
          <CardHeader className="text-center pb-4">
            <CardTitle className="font-josefin text-2xl">{service.title}</CardTitle>
            <CardDescription className="text-lg font-bold">{service.duration}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">
                ${service.price}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{service.currency}</p>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button className="w-full font-josefin" size="lg">
                  Book Now
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <h4 className="font-josefin text-lg font-bold text-center mb-2">Call to Book</h4>
                  {locations.map((location, idx) => (
                    <div key={idx} className="space-y-1">
                      <p className="font-medium text-primary">{location.city}</p>
                      <p className="text-lg font-bold">{location.phone}</p>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
