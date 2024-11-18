'use client'

import React from 'react'
import { PropertyDetail } from '@/components/property-detail'
import { useParams } from 'next/navigation'

export default function PropertyPage() {
  const params = useParams()
  const id = params.id as string

  return <PropertyDetail id={id} />
}