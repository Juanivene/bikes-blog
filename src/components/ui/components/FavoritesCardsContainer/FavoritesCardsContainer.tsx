import Link from 'next/link';

import BikeCard from '../BikeCard/BikeCard';

import bangers from '@/styles/fontBanger';
import russoOne from '@/styles/fonts';

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
    <div className={`bg-gray-carbon pb-10 ${russoOne.className}`}>
      <h1
        className={`py-5 text-center text-2xl text-yellow-brillante sm:text-3xl md:text-4xl ${bangers.className}`}
      >
        Tus motos favoritas
      </h1>

      {favoritesBikes.length > 0 ? (
        <div className="xxs:grid-cols-2 grid grid-cols-1 gap-6 bg-gray-carbon px-4 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
          {favoritesBikes.map((bike) => (
            <BikeCard bike={bike} key={bike.id} />
          ))}
        </div>
      ) : (
        <div className="flex h-40 flex-col items-center justify-center">
          <p className="text-lg text-gray-300">
            Aun no marcaste ninguna moto como favorita.
          </p>
          <Link
            className="rounded-lg bg-yellow-suave px-6 py-3 text-sm font-bold text-gray-900 hover:bg-yellow-400 sm:text-base"
            href="/"
          >
            Ver motos
          </Link>
        </div>
      )}
    </div>
  );
};

export default FavoritesCardsContainer;
