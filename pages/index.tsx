import Image from "next/image";
import { HERO_IMAGE } from "@/constants";
import Pill from "@/components/Pill";
import { FILTERS } from "@/constants";
import { useState } from "react";

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState<string>(FILTERS[0]);

  return(
    <div>
      <section className="relative w-full h-[500px] bg-cover bg-center">
        <Image
          src={HERO_IMAGE}
          alt="Hero Background"
          fill
          objectFit="cover"
          priority
        />
        <div className="flex flex-col justify-center absolute inset-0 text-white text-center bg-black/40">
          <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
          <p className="mt-4 text-lg">The best prices for over 2 million properties worldwide.”</p>

        </div>            
      </section>

      <section className="px-6 py-8 flex flex-wrap gap-4 justify-center">
        {FILTERS.map((filter) => (
          <Pill 
            key={filter} 
            label={filter} 
            active={activeFilter === filter} 
            onClick={() => setActiveFilter(filter)}
          />
        ))}
      </section>
    </div>
  );
}