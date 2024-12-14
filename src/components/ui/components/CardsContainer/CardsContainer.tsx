import BikeCard from '@/components/ui/components/BikeCard/BikeCard';

type Bikes = {
  id: string;
  title: string;
  description: string;
  isFavorite: boolean;
  image: string;
};

const BACKEND_URL = process.env.NEXT_PUBLIC_DB_HOST;

const CardsContainer = async (): Promise<React.ReactElement> => {
  const response = await fetch(`${BACKEND_URL}/bikes`);
  const bikes = (await response.json()) as Bikes[];
  return (
    <div className="bg-gray-carbon">
      <h1 className="mb-6 py-5 text-center text-2xl text-yellow-brillante sm:text-3xl md:text-4xl">
        Motos del momento
      </h1>
      <div className="grid grid-cols-1 gap-6 bg-gray-carbon px-4 xxs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-8">
        {bikes.map((bike) => (
          <BikeCard bike={bike} key={bike.id} />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
