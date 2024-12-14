import BikeCard from '@/components/ui/components/BikeCard/BikeCard';

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

const CardsContainer = async (): Promise<React.ReactElement> => {
  const response = await fetch(`${BACKEND_URL}/bikes`);
  const bikes = (await response.json()) as Bikes[];
  return (
    <div className={`bg-gray-carbon ${russoOne.className} `}>
      <h1
        className={`py-5 text-center text-2xl text-yellow-brillante sm:text-3xl md:text-4xl ${bangers.className}`}
      >
        Motos del momento
      </h1>
      <div className="grid grid-cols-1 gap-6 bg-gray-carbon px-4 xxs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
        {bikes.map((bike) => (
          <BikeCard bike={bike} key={bike.id} />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
