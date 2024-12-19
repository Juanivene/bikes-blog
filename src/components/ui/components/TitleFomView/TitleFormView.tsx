import Link from 'next/link';
import React from 'react';

import { Grid } from '@/components/ui';
import SearchForm from '@/components/ui/components/SearchForm/FormInfo';

import bangers from '@/styles/fontBanger';

const Title = (): React.ReactElement => (
  <section
    className={`w-full bg-[url('/img/bikes/bike-bg/bikebg.png')] bg-cover bg-center md:h-[100vh]  `}
  >
    <Grid container className="px-8" gap={4}>
      <Grid item className="flex items-center justify-center pt-16" xs={12}>
        <Grid container className={bangers.className} gap={4}>
          <Grid item xs={12}>
            <h2 className="text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              La moto que buscas, está aquí.
            </h2>
          </Grid>
          <Grid item className="flex items-center justify-center" xs={12}>
            <h3 className="text-center text-lg text-white sm:text-xl md:text-2xl">
              Encuéntrala fácilmente y conoce sus características.
            </h3>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        className=" mt-10 flex flex-wrap items-center justify-center space-x-2 sm:space-x-4 md:space-x-6 "
        xs={12}
      >
        <span className="mt-2 rounded-full bg-yellow-suave px-2 py-1 text-sm font-semibold text-gray-900 sm:mt-0 sm:px-6 sm:py-1 md:text-base">
          FÁCIL Y RÁPIDO
        </span>
        <span className="mt-2 rounded-full bg-yellow-suave px-2 py-1 text-sm font-semibold text-gray-900 sm:mt-0 sm:px-6 sm:py-1 md:text-base">
          100% GRATUITO
        </span>
        <span className="mt-2 rounded-full bg-yellow-suave px-2 py-1 text-sm font-semibold text-gray-900 sm:mt-0 sm:px-6 sm:py-1 md:text-base">
          INDEPENDIENTE
        </span>
      </Grid>
      <Grid item className="mt-10 flex items-center justify-center  " xs={12}>
        <SearchForm />
      </Grid>
      <Grid item className="mt-10 flex items-center justify-center" xs={12}>
        <h3 className="text-lg text-white sm:text-xl md:text-2xl">
          Descubre tu proxima moto
        </h3>
      </Grid>
      <Grid
        item
        className="mb-4 mt-10 flex items-center justify-center md:mb-0"
        xs={12}
      >
        <Link
          className="rounded-lg bg-yellow-suave px-6 py-3 text-sm font-bold text-gray-900 hover:bg-yellow-400 sm:text-base"
          href="/about"
        >
          ¿Quiénes somos?
        </Link>
      </Grid>
    </Grid>
  </section>
);

export default Title;
