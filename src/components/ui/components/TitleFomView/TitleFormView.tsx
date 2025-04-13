import Link from 'next/link';
import React from 'react';

import { Grid } from '@/components/ui';
import SearchForm from '@/components/ui/components/SearchForm/FormInfo';

import bangers from '@/styles/fontBanger';

const Title = (): React.ReactElement => (
  <section className="relative w-full md:min-h-screen">
    <div className="absolute inset-0 bg-[url('https://img1.wallspic.com/crops/6/8/5/3/3/133586/133586-motociclismo-deporte_extremo-truco-el_off_road-cascos_de_moto-3840x2160.jpg')] bg-cover bg-center " />

    <Grid container className="relative z-10 px-8" gap={4}>
      <Grid item className="flex items-center justify-center pt-16" xs={12}>
        <Grid container gap={4}>
          <Grid item xs={12}>
            <h1
              className={`${bangers.className} bg-gradient-to-r from-yellow-suave to-orange-500 bg-clip-text text-center text-4xl font-bold text-transparent sm:text-4xl md:text-6xl lg:text-7xl`}
            >
              La moto que buscas, está aquí.
            </h1>
          </Grid>
          <Grid item className="flex items-center justify-center" xs={12}>
            <h3 className="text-center text-lg text-white sm:text-xl md:text-2xl lg:text-3xl">
              Encuéntrala fácilmente y conoce sus características.
            </h3>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        className="mt-10 flex flex-wrap items-center justify-center space-x-2 sm:space-x-4 md:space-x-6"
        xs={12}
      >
        {['FÁCIL Y RÁPIDO', '100% GRATUITO', 'INDEPENDIENTE'].map((feature) => (
          <span
            className="mt-2 transform rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 px-2 py-1 text-xs font-semibold text-gray-900 transition-transform hover:scale-105 sm:mt-0 sm:px-6 sm:py-1 md:text-lg"
            key={feature}
          >
            {feature}
          </span>
        ))}
      </Grid>

      <Grid item className="mt-10 flex items-center justify-center" xs={12}>
        <h3 className="text-lg text-white sm:text-xl md:text-2xl">
          Descubre tu proxima moto
        </h3>
      </Grid>

      <Grid item className="mt-4 flex items-center justify-center" xs={12}>
        <SearchForm />
      </Grid>

      <Grid
        item
        className="mb-4 mt-10 flex items-center justify-center md:mb-0"
        xs={12}
      >
        <Link
          className="group relative overflow-hidden rounded-lg bg-yellow-suave px-6 py-3 text-sm font-bold text-gray-900 transition-all hover:bg-yellow-400 sm:text-base"
          href="/about"
        >
          <span className="relative z-10">¿Quiénes somos?</span>
        </Link>
      </Grid>
    </Grid>
  </section>
);

export default Title;
