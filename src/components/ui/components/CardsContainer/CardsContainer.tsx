import { Bike } from 'lucide-react';

import BikeCard from '@/components/ui/components/BikeCard/BikeCard';

import bangers from '@/styles/fontBanger';

type Bikes = {
  id: string;
  title: string;
  cc: string;
  isFavorite: boolean;
  image: string;
};

const BACKEND_URL = process.env.NEXT_PUBLIC_DB_HOST;

const CardsContainer = async (): Promise<React.ReactElement> => {
  const response = await fetch(`${BACKEND_URL}/bikes`);
  const bikes = (await response.json()) as Bikes[];
  return (
    <div className="min-h-screen bg-[#1a1a1a] pb-16">
      <div className="container mx-auto px-4">
        <header className="relative py-8 text-center">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
            <Bike className="h-32 w-32 text-[#FFD700]" />
          </div>
          <h1
            className={`relative transform text-4xl font-bold text-[#FFD700] transition-all
          duration-300 hover:scale-105 sm:text-5xl md:text-6xl ${bangers.className}`}
          >
            Motos del momento
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 large:grid-cols-4">
          {bikes.map((bike) => (
            <BikeCard bike={bike} key={bike.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
