import { Bike } from 'lucide-react';
import React from 'react';

import BikeCard from '../BikeCard/BikeCard';

type Bikes = {
  id: string;
  title: string;
  cc: string;
  isFavorite: boolean;
  image: string;
  isHighlighted: boolean;
};

const BACKEND_URL = process.env.NEXT_PUBLIC_DB_HOST;

const AllBikes = async (): Promise<React.ReactElement> => {
  const response = await fetch(`${BACKEND_URL}/bikes`);
  const bikes = (await response.json()) as Bikes[];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pb-16">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />

      <div className="container relative mx-auto px-4">
        <header className="relative py-8 text-center">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
            <Bike className="h-32 w-32 text-[#FFD700]" />
          </div>
          <h2 className="bg-gradient-to-r from-yellow-suave to-orange-500 bg-clip-text text-center text-4xl font-bold text-transparent sm:text-4xl md:text-6xl lg:text-7xl">
            Motos del momento
          </h2>
          <p className="mt-4 text-lg  sm:text-xl md:text-2xl">
            Descubre nuestra variada colección de motos para todos los gustos
          </p>
        </header>
        <div className="relative">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 large:grid-cols-4">
            {bikes.map((bike) => (
              <BikeCard bike={bike} key={bike.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBikes;
