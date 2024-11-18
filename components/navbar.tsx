'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { SignInModal } from './auth/sign-in-modal'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-white/5 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white text-xl font-bold">
              BlockEstate
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link 
              href="/properties" 
              className={`text-gray-200 hover:text-white font-medium transition-colors ${isActive('/properties') ? 'text-white' : ''}`}
            >
              Properties
            </Link>
            <Link 
              href="/how-it-works" 
              className={`text-gray-200 hover:text-white font-medium transition-colors ${isActive('/how-it-works') ? 'text-white' : ''}`}
            >
              How it Works
            </Link>
            <Link 
              href="/about" 
              className={`text-gray-200 hover:text-white font-medium transition-colors ${isActive('/about') ? 'text-white' : ''}`}
            >
              About
            </Link>
            <Button 
              variant="outline" 
              className="bg-white/10 border-white/20 hover:bg-white/20 text-white font-medium"
              onClick={() => setIsSignInOpen(true)}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>

      <SignInModal 
        isOpen={isSignInOpen} 
        onClose={() => setIsSignInOpen(false)} 
      />
    </nav>
  )
} 