'use client'

import React from 'react'
import { properties } from '@/app/properties/page'; // Correct import

interface PropertyDetailProps {
  id: string
}

export const PropertyDetail: React.FC<PropertyDetailProps> = ({ id }) => {
  const propertyId = parseInt(id);
  const property = properties.find((prop: typeof properties[0]) => prop.id === propertyId);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{property.title}</h2>
      <p>{property.location}</p>
      <p>Price: ${property.price}</p>
      <p>ROI: {property.roi}%</p>
      <img src={property.image} alt={property.title} />
    </div>
  );
} 