import BikeCard from '@/components/ui/components/BikeCard/BikeCard';

type Bikes = {
  id: number;
  title: string;
  description: string;
  isFavorite: boolean;
};

const BikesList = async (): Promise<React.ReactElement> => {
  const response = await fetch('http://localhost:4000/bikes');
  const bikes = (await response.json()) as Bikes[];

  return (
    <div>
      <h1>Lista de Motos</h1>
      <ul>
        {bikes.map((bike) => (
          <BikeCard
            isFavorite
            description={bike.description}
            key={bike.id}
            title={bike.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default BikesList;
