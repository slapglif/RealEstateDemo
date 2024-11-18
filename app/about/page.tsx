'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import { Award, Building2, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-white">Our Story</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Founded in 2022 by a team of real estate veterans and blockchain innovators, 
            BlockEstate emerged from a simple yet powerful idea: make premium real estate 
            investment accessible to everyone.
          </p>
        </div>

        {/* Origin Story */}
        <div className="mb-16">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">The BlockEstate Origin</h2>
              <p className="text-gray-400 mb-4">
                It all started in a small coffee shop in San Francisco, where our founders - 
                Sarah Chen, a real estate investment expert, and Marcus Rodriguez, a blockchain 
                developer - had a chance meeting that would change the future of real estate investment.
              </p>
              <p className="text-gray-400 mb-4">
                Sarah had spent years watching talented investors being priced out of premium real estate 
                markets, while Marcus was exploring ways to use blockchain technology to democratize 
                traditional investment structures.
              </p>
              <p className="text-gray-400">
                Together, they envisioned a platform that would combine the security of traditional real 
                estate investment with the accessibility of blockchain technology. After months of 
                development and legal consultation, BlockEstate was born.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Building2,
              stat: "$50M+",
              label: "Property Value Tokenized"
            },
            {
              icon: Users,
              stat: "15,000+",
              label: "Active Investors"
            },
            {
              icon: Award,
              stat: "25+",
              label: "Premium Properties"
            }
          ].map((item, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6 text-center">
                <item.icon className="h-12 w-12 text-[#3B82F6] mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2 text-white">{item.stat}</div>
                <div className="text-gray-400">{item.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission */}
        <div className="mb-16">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
              <p className="text-gray-400">
                BlockEstate&apos;s mission is to democratize real estate investment by removing traditional 
                barriers to entry while maintaining the highest standards of security and transparency. 
                We believe that everyone should have the opportunity to invest in premium real estate, 
                regardless of their net worth or investment experience.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-white">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "CEO & Co-Founder",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              },
              {
                name: "Marcus Rodriguez",
                role: "CTO & Co-Founder",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              },
              {
                name: "Emily Zhang",
                role: "Head of Real Estate",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }
            ].map((member, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-1 text-white">{member.name}</h3>
                  <p className="text-gray-400 text-center">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 