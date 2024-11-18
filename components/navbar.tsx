'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Building2, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-gray-800/50 backdrop-blur-lg border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Building2 className="h-8 w-8 text-[#3B82F6]" />
                <span className="ml-2 text-xl font-bold text-white">BlockEstate</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link 
                href="/" 
                className={`${pathname === '/' ? 'border-[#3B82F6] text-white' : 'border-transparent text-gray-300 hover:border-gray-300 hover:text-white'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Home
              </Link>
              <Link 
                href="/properties" 
                className={`${pathname === '/properties' ? 'border-[#3B82F6] text-white' : 'border-transparent text-gray-300 hover:border-gray-300 hover:text-white'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Properties
              </Link>
              <Link 
                href="#" 
                className="border-transparent text-gray-300 hover:border-gray-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                How It Works
              </Link>
              <Link 
                href="#" 
                className="border-transparent text-gray-300 hover:border-gray-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
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

      <div className={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link 
            href="/" 
            className={`${pathname === '/' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} block px-3 py-2 rounded-md text-base font-medium`}
          >
            Home
          </Link>
          <Link 
            href="/properties" 
            className={`${pathname === '/properties' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} block px-3 py-2 rounded-md text-base font-medium`}
          >
            Properties
          </Link>
          <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            How It Works
          </Link>
          <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
} 