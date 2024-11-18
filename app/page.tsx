'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, ChevronRight, Coins, Home, LineChart, Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0B1120] text-gray-100">
      {/* Navigation */}
      <nav className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Building2 className="h-8 w-8 text-[#3B82F6]" />
                <span className="ml-2 text-xl font-bold text-white">BlockEstate</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link href="/" className="border-[#3B82F6] text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Home
                </Link>
                <Link href="/properties" className="border-transparent text-gray-300 hover:border-gray-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Properties
                </Link>
                <Link href="#" className="border-transparent text-gray-300 hover:border-gray-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  How It Works
                </Link>
                <Link href="#" className="border-transparent text-gray-300 hover:border-gray-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  About
                </Link>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Button variant="outline" className="mr-2 text-white border-white hover:bg-gray-700">Sign In</Button>
              <Button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white">Get Started</Button>
            </div>
            <div className="flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/properties" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Properties</Link>
            <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">How It Works</Link>
            <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-[#0B1120]">
        <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Invest in Real Estate</span>
              <span className="block text-[#3B82F6]">with Blockchain</span>
            </h1>
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              BlockEstate revolutionizes property investment through fractional ownership. 
              Invest in premium real estate with cryptocurrency, starting from just $100.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Button size="lg" className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white">
                  Start Investing
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Button variant="outline" size="lg" className="w-full bg-white text-gray-900 border-white hover:bg-gray-100">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="bg-gray-800/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">Featured Properties</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {[
              {
                id: 1,
                title: "Luxury Apartment in Downtown",
                location: "New York City, NY",
                price: 250000,
                roi: 8.5,
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              },
              {
                id: 2,
                title: "Beachfront Villa",
                location: "Miami, FL",
                price: 500000,
                roi: 7.2,
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              },
              {
                id: 3,
                title: "Modern Office Building",
                location: "San Francisco, CA",
                price: 750000,
                roi: 9.1,
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              },
            ].map((property) => (
              <Card key={property.id} className="overflow-hidden bg-gray-700/50 border-gray-600">
                <Image
                  src={property.image}
                  alt={property.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-white">{property.title}</h3>
                  <p className="text-sm text-gray-300 mt-1">{property.location}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-[#3B82F6] font-bold">${property.price.toLocaleString()}</span>
                    <span className="text-[#10B981]">Expected ROI: {property.roi}%</span>
                  </div>
                  <Link href={`/property/${property.id}`}>
                    <Button className="w-full mt-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works section */}
      <div className="bg-[#0B1120] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white text-center">How It Works</h2>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Home, title: "Choose a Property", description: "Browse our curated selection of premium real estate opportunities." },
                { icon: Coins, title: "Invest with Crypto", description: "Use cryptocurrency to purchase fractional ownership in properties." },
                { icon: LineChart, title: "Track Performance", description: "Monitor your investments and returns in real-time through our dashboard." },
                { icon: Building2, title: "Grow Your Portfolio", description: "Diversify your investments across multiple properties and locations." },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#3B82F6] text-white mx-auto">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-white">{step.title}</h3>
                  <p className="mt-2 text-base text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800/50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><Link href="#" className="text-base text-gray-300 hover:text-white">About</Link></li>
                <li><Link href="#" className="text-base text-gray-300 hover:text-white">Careers</Link></li>
                <li><Link href="#" className="text-base text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
              <ul className="mt-4 space-y-4">
                <li><Link href="#" className="text-base text-gray-300 hover:text-white">Blog</Link></li>
                <li><Link href="#" className="text-base text-gray-300 hover:text-white">Whitepaper</Link></li>
                <li><Link href="#" className="text-base text-gray-300 hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><Link href="#" className="text-base text-gray-300 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="#" className="text-base text-gray-300 hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect</h3>
              <ul className="mt-4 space-y-4">
                <li><Link href="#" className="text-base text-gray-300 hover:text-white">Twitter</Link></li>
                <li><Link href="#" className="text-base text-gray-300 hover:text-white">LinkedIn</Link></li>
                <li><Link href="#" className="text-base text-gray-300 hover:text-white">Telegram</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2024 BlockEstate. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}