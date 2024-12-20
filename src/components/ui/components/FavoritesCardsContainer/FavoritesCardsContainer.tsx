import { Bike, Heart } from 'lucide-react';
import Link from 'next/link';

import BikeCard from '../BikeCard/BikeCard';

type Bikes = {
  id: string;
  title: string;
  cc: string;
  isFavorite: boolean;
  image: string;
};

const BACKEND_URL = process.env.NEXT_PUBLIC_DB_HOST;

const FavoritesCardsContainer = async (): Promise<React.ReactElement> => {
  const response = await fetch(`${BACKEND_URL}/bikes`);
  const bikes = (await response.json()) as Bikes[];
  const favoritesBikes = bikes.filter((bike) => bike.isFavorite);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="relative h-80 bg-[url('https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center  bg-no-repeat">
          <div className="flex h-full flex-col items-center justify-center px-4 text-center">
            <div className="mb-2 flex items-center space-x-2">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Motos favoritas
              </h1>
              <Heart
                className="h-8 w-8 text-yellow-suave"
                fill="currentColor"
              />
            </div>
            <p className="mt-2 text-lg text-gray-200">Tu coleccion de motos</p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {favoritesBikes.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 large:grid-cols-4">
            {favoritesBikes.map((bike) => (
              <BikeCard bike={bike} key={bike.id} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-gray-800/50 p-12">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-6 rounded-full bg-gray-700/50 p-6">
                <Bike className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                No seleccionaste ninguna moto como favorita
              </h3>
              <p className="mb-8 text-gray-400">
                Empieza a explorar y marca las motos de tus sueños como
                favoritas para crear tu colección
              </p>
              <Link
                className="group relative inline-flex items-center overflow-hidden rounded-full bg-yellow-suave px-8 py-3 text-white transition hover:bg-yellow-500"
                href="/"
              >
                <span className="absolute -end-full transition-all group-hover:end-4">
                  <Bike className="h-5 w-5" />
                </span>
                <span className="transition-all group-hover:me-4">
                  Ver motos
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesCardsContainer;
