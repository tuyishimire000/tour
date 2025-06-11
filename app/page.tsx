import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Camera,
  Mountain,
  Palmtree,
  Compass,
  Clock,
  Users,
  Shield,
  Heart,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Compass className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-green-800">Saudi Explorer</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#home" className="text-sm font-medium hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="#destinations" className="text-sm font-medium hover:text-green-600 transition-colors">
              Destinations
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-green-600 transition-colors">
              Services
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-green-600 transition-colors">
              Contact
            </Link>
            <Link href="/login">
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Login
              </Button>
            </Link>
          </nav>
          <Button className="bg-green-600 hover:bg-green-700">Book Now</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-700/20" />
          <div className="container relative px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">🇸🇦 Discover Saudi Arabia</Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-gray-900">
                  Explore the
                  <span className="text-green-600 block">Kingdom's Wonders</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl">
                  Experience the magic of Saudi Arabia with our expertly crafted tours. From ancient heritage sites to
                  modern marvels, discover the Kingdom like never before.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8">
                    Start Your Journey
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8"
                  >
                    View Packages
                  </Button>
                </div>
                <div className="flex items-center space-x-6 pt-4">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium">500+ Happy Travelers</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Saudi Arabia Tourism"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Safe & Secure</p>
                      <p className="text-xs text-gray-600">Licensed Tour Operator</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-green-100 text-green-800">About Us</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Your Gateway to Saudi Arabia
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are passionate about showcasing the beauty, culture, and heritage of Saudi Arabia. Our experienced
                team creates unforgettable experiences tailored to your interests.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-2 hover:border-green-200 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-green-100 p-3 rounded-full w-fit">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Passionate Guides</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Our local guides are passionate storytellers who bring Saudi Arabia's rich history and culture to
                    life.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-green-200 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-green-100 p-3 rounded-full w-fit">
                    <Clock className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Flexible Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    We work around your schedule to create the perfect itinerary that fits your timeline and
                    preferences.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-green-200 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-green-100 p-3 rounded-full w-fit">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Safe & Reliable</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Your safety is our priority. We're fully licensed and insured with excellent safety records.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Destinations Section */}
        <section id="destinations" className="py-20 bg-gradient-to-b from-green-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-green-100 text-green-800">Popular Destinations</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Discover Saudi's Hidden Gems
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From ancient archaeological sites to modern architectural marvels, explore the diverse landscapes and
                rich heritage of the Kingdom.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=200&width=400" alt="AlUla" fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-green-800">UNESCO Site</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mountain className="h-5 w-5 text-green-600" />
                    AlUla
                  </CardTitle>
                  <CardDescription>
                    Ancient Nabatean city with stunning rock formations and archaeological wonders.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=200&width=400" alt="Riyadh" fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-green-800">Capital City</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="h-5 w-5 text-green-600" />
                    Riyadh
                  </CardTitle>
                  <CardDescription>
                    Modern metropolis blending traditional culture with futuristic architecture.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=200&width=400" alt="Jeddah" fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-green-800">Historic City</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palmtree className="h-5 w-5 text-green-600" />
                    Jeddah
                  </CardTitle>
                  <CardDescription>
                    Gateway to Mecca with beautiful Red Sea coastline and historic old town.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-green-100 text-green-800">Our Services</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Tailored Experiences for Every Traveler
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center space-y-4 p-6 rounded-lg hover:bg-green-50 transition-colors">
                <div className="mx-auto bg-green-100 p-4 rounded-full w-fit">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Group Tours</h3>
                <p className="text-gray-600">Join fellow travelers on our carefully planned group adventures.</p>
              </div>

              <div className="text-center space-y-4 p-6 rounded-lg hover:bg-green-50 transition-colors">
                <div className="mx-auto bg-green-100 p-4 rounded-full w-fit">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Private Tours</h3>
                <p className="text-gray-600">Personalized experiences designed just for you and your loved ones.</p>
              </div>

              <div className="text-center space-y-4 p-6 rounded-lg hover:bg-green-50 transition-colors">
                <div className="mx-auto bg-green-100 p-4 rounded-full w-fit">
                  <Mountain className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Adventure Tours</h3>
                <p className="text-gray-600">Thrilling outdoor experiences in Saudi's diverse landscapes.</p>
              </div>

              <div className="text-center space-y-4 p-6 rounded-lg hover:bg-green-50 transition-colors">
                <div className="mx-auto bg-green-100 p-4 rounded-full w-fit">
                  <Camera className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Cultural Tours</h3>
                <p className="text-gray-600">Deep dive into Saudi Arabia's rich heritage and traditions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-b from-green-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-green-100 text-green-800">Get In Touch</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Ready to Start Your Adventure?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Contact us today to plan your perfect Saudi Arabian experience. We're here to help make your journey
                unforgettable.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <form className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tour-type">Tour Interest</Label>
                      <Input id="tour-type" placeholder="What type of tour interests you?" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your travel plans and preferences..."
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="p-6">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-xl">Contact Information</CardTitle>
                    <CardDescription>Reach out to us through any of these channels</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pb-0 space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-2 rounded-full">
                        <Phone className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Phone</h4>
                        <p className="text-gray-600">+966 XX XXX XXXX</p>
                        <p className="text-sm text-gray-500">Available 9 AM - 9 PM</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-2 rounded-full">
                        <Mail className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-gray-600">info@saudiexplorer.com</p>
                        <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-2 rounded-full">
                        <MapPin className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Office Address</h4>
                        <p className="text-gray-600">
                          [Your Address Here]
                          <br />
                          [City, Postal Code]
                          <br />
                          Saudi Arabia
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-green-50 border-green-200">
                  <CardContent className="px-0 pb-0">
                    <div className="text-center space-y-4">
                      <div className="bg-green-100 p-3 rounded-full w-fit mx-auto">
                        <Clock className="h-6 w-6 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-lg">Business Hours</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Sunday - Thursday:</span>
                          <span className="font-medium">9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Friday - Saturday:</span>
                          <span className="font-medium">10:00 AM - 4:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Compass className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold">Green Saudi Explorer</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted partner for exploring the wonders of Saudi Arabia. Creating unforgettable memories since
                day one.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link href="#home" className="block text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="#about" className="block text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="#destinations" className="block text-gray-400 hover:text-white transition-colors">
                  Destinations
                </Link>
                <Link href="#services" className="block text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Popular Tours</h4>
              <div className="space-y-2 text-sm">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  AlUla Heritage Tour
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Riyadh City Experience
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Red Sea Adventure
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Desert Safari
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>+966 XX XXX XXXX</p>
                <p>info@saudiexplorer.com</p>
                <p>Saudi Arabia</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Green Saudi Explorer. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-2 sm:mt-0">
              Website developed by <span className="text-green-400 font-semibold">Hilbert</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
