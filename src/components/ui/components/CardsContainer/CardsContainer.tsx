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
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {bikes.map((bike) => (
        <BikeCard bike={bike} key={bike.id} />
      ))}
    </div>
  );
};

export default CardsContainer;
