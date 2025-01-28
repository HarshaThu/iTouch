"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { useAutoScroll } from "@/lib/use-auto-scroll"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [api, setApi] = useState<CarouselApi>()

  useAutoScroll(api)

  const testimonials = [
    {
      name: "Sarah M.",
      testimonial: "The most relaxing experience I've ever had. The ambiance and service were perfect.",
      rating: 5
    },
    {
      name: "James K.",
      testimonial: "Professional service in a luxurious setting. Will definitely return!",
      rating: 5
    },
    {
      name: "Emily R.",
      testimonial: "Exactly what I needed after a long week. The therapists are highly skilled.",
      rating: 5
    },
    {
      name: "Michael L.",
      testimonial: "Outstanding service and attention to detail. A truly premium experience.",
      rating: 5
    },
    {
      name: "Lisa P.",
      testimonial: "The perfect blend of relaxation and rejuvenation. Highly recommended!",
      rating: 5
    }
  ]

  const features = [
    {
      title: "Professional Masseuses",
      description: "Our skilled therapists provide a truly relaxing experience"
    },
    {
      title: "Private Setting",
      description: "Discrete, comfortable, and elegant private rooms"
    },
    {
      title: "Personalized Service",
      description: "Each session is tailored to your comfort and preferences"
    },
    {
      title: "Quality Products",
      description: "Premium oils and lotions for the perfect experience"
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-36 bg-[url('/images/hero-image.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-josefin mb-6 font-bold text-white">Discover True Relaxation</h1>
            <p className="text-xl text-gray-200 mb-8">
              Experience the most <span className="font-bold">soothing and rejuvenating</span> massage treatments in a luxurious private setting.
            </p>
            <Button className="font-josefin text-lg" size="lg" asChild>
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-josefin text-center mb-12 font-bold">What Our Clients Say</h2>
          <Carousel 
            className="w-full max-w-5xl mx-auto" 
            opts={{ 
              align: "start",
              loop: true,
              skipSnaps: true,
              dragFree: true
            }}
            setApi={setApi}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-primary/5 border-primary/20 h-full">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <p className="text-muted-foreground italic">&quot;{testimonial.testimonial}&quot;</p>
                        <div className="font-josefin text-primary">{testimonial.name}</div>
                        <div className="flex gap-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <span key={i} className="text-primary">★</span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-josefin text-center mb-12">Why Choose iTouch?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center bg-background border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="font-josefin text-xl mb-3 font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-josefin mb-6 font-bold">Ready for Your Session?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Choose from our range of relaxing treatments <span className="font-bold">starting from $60</span>.
          </p>
          <Button className="font-josefin" size="lg" asChild>
            <Link href="/services">Book Now</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
