import type { Metadata } from "next"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import "./globals.css"
import { Josefin_Slab } from "next/font/google"
import Image from "next/image"

const josefin = Josefin_Slab({ 
  subsets: ["latin"],
  variable: "--font-josefin",
})

export const metadata: Metadata = {
  title: "iTouch - Luxury Massage Services",
  description: "Experience the ultimate relaxation with our professional massage services.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${josefin.variable}`}>
        <header className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Image 
                src="/images/logo.jpeg" 
                alt="iTouch Logo" 
                width={100}
                height={50}
                className="object-contain"
                priority
              />
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="font-josefin font-bold px-4 py-2 hover:text-primary transition-colors"
                      href="/"
                    >
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="font-josefin font-bold px-4 py-2 hover:text-primary transition-colors"
                      href="/services"
                    >
                      Services
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="font-josefin font-bold px-4 py-2 hover:text-primary transition-colors"
                      href="/contact"
                    >
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </header>
        {children}
        <footer className="border-t mt-16">
          <div className="container mx-auto px-4 py-8">
            <p className="text-center text-muted-foreground">
              © {new Date().getFullYear()} iTouch. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
