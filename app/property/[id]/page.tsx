import { Suspense } from 'react'
import { PropertyDetailClient } from '@/components/property-detail-client'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function PropertyDetail({ params }: PageProps) {
  const { id } = await params
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PropertyDetailClient id={id} />
    </Suspense>
  )
}