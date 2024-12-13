import React from 'react';

import { Grid } from '@/components/ui';
import BikeCard from '@/components/ui/components/BikeCard/BikeCard';
import SearchForm from '@/components/ui/components/SearchForm/FormInfo';

type Bikes = {
  id: string;
  title: string;
  description: string;
  isFavorite: boolean;
  image: string;
};

const Home = async (): Promise<React.ReactElement> => {
  const response = await fetch('http://localhost:4000/bikes');
  const bikes = (await response.json()) as Bikes[];

  return (
    <Grid container className="p-6" gap={2}>
      <Grid item className="flex items-center justify-center" xs={12}>
        <Grid container gap={2}>
          <Grid item xs={12}>
            <h1 className="text-center text-5xl font-bold text-yellow-400">
              La moto que buscas, está aquí.
            </h1>
          </Grid>
          <Grid item className="flex items-center justify-center" xs={12}>
            <h3 className="text-2xl text-gray-300">Búscala y conócela</h3>
          </Grid>
          <Grid
            item
            className="flex items-center justify-center space-x-6"
            xs={12}
          >
            <span className="rounded-lg bg-yellow-500 px-4 py-2 font-semibold">
              FÁCIL Y RÁPIDO
            </span>
            <span className="rounded-lg bg-yellow-500 px-4 py-2 font-semibold">
              100% GRATUITO
            </span>
            <span className="rounded-lg bg-yellow-500 px-4 py-2 font-semibold">
              INDEPENDIENTE
            </span>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="mt-10 flex items-center justify-center" xs={12}>
        <SearchForm />
      </Grid>
      <Grid
        item
        className="mt-6 flex flex-col items-center justify-center space-y-4"
        xs={12}
      >
        <h3 className="text-xl text-gray-300">Mira todos los modelos</h3>
        <button
          className="rounded-lg bg-yellow-500 px-6 py-2 font-bold hover:bg-yellow-300"
          type="button"
        >
          Ver catálogo completo
        </button>
      </Grid>
      <Grid
        item
        className="mt-8 grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        xs={12}
      >
        {bikes.map((bike) => (
          <BikeCard bike={bike} key={bike.id} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Home;
