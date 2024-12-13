import React from 'react';

import { Grid } from '@/components/ui';
import SearchForm from '@/components/ui/components/SearchForm/FormInfo';

const Title = (): React.ReactElement => (
  <Grid
    container
    className="bg-[url('/img/bikes/bike-bg/bikebg.png')] bg-cover bg-center p-6 text-gray-100"
    gap={4}
  >
    <Grid item className="flex items-center justify-center" xs={12}>
      <Grid container gap={4}>
        <Grid item xs={12}>
          <h1 className="text-center text-3xl font-bold text-yellow-500 sm:text-4xl md:text-5xl lg:text-6xl">
            La moto que buscas, está aquí.
          </h1>
        </Grid>
        <Grid item className="flex items-center justify-center" xs={12}>
          <h3 className="text-lg text-gray-400 sm:text-xl md:text-2xl">
            Encuéntrala fácilmente y conoce sus características.
          </h3>
        </Grid>
        <Grid
          item
          className="flex flex-wrap items-center justify-center space-x-2 sm:space-x-4 md:space-x-6"
          xs={12}
        >
          <span className="mt-2 rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-gray-900 sm:mt-0 sm:px-6 sm:py-3 md:text-base">
            FÁCIL Y RÁPIDO
          </span>
          <span className="mt-2 rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-gray-900 sm:mt-0 sm:px-6 sm:py-3 md:text-base">
            100% GRATUITO
          </span>
          <span className="mt-2 rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-gray-900 sm:mt-0 sm:px-6 sm:py-3 md:text-base">
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
      className="mt-6 flex flex-col items-center justify-center space-y-3 sm:space-y-4"
      xs={12}
    >
      <h3 className="text-lg sm:text-xl md:text-2xl">
        Descubre todos los modelos
      </h3>
      <button
        className="rounded-lg bg-yellow-500 px-6 py-3 text-sm font-bold text-gray-900 hover:bg-yellow-400 sm:text-base"
        type="button"
      >
        Ver catálogo completo
      </button>
    </Grid>
  </Grid>
);

export default Title;
