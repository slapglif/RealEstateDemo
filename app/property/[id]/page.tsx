import { Suspense } from 'react'
import { PropertyDetail } from '@/components/property-detail'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { id } = await params
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PropertyDetail id={id} />
    </Suspense>
  )
}