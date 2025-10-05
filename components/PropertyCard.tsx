import React from "react";
import Image from "next/image";
import { PropertyCardsProps } from "@/interfaces";


const PropertyCard: React.FC<PropertyCardsProps> = ({ name, image, rating, price }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <Image src={image} alt={name} width={400} height={250} className="object-cover w-full h-48" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{price}</p>
        <p className="text-yellow-500">⭐ {rating}</p>
      </div>
    </div>
  );
};

export default PropertyCard;