'use client';

import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';

const BACKEND_URL = process.env.NEXT_PUBLIC_DB_HOST;

interface Bike {
  id: string;
  title: string;
  cc: string;
  isFavorite: boolean;
  image: string;
}

interface FormData {
  title: string;
}

const SearchForm: React.FC = (): React.ReactElement => {
  const { register, watch } = useForm<FormData>();
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [filteredResults, setFilteredResults] = useState<Bike[]>([]);
  const [error, setError] = useState(false);

  const searchValue: string = watch('title', '');

  const fetchBikes = useCallback(async (): Promise<void> => {
    try {
      const response = await fetch(`${BACKEND_URL}/bikes`);
      setBikes(await response.json());
    } catch {
      setError(true);
    }
  }, []);

  useEffect((): void => {
    fetchBikes();
  }, [fetchBikes]);

  useEffect((): void => {
    if (searchValue.length > 2) {
      // Filtrar las motos localmente basándonos en el valor de búsqueda
      const filtered = bikes.filter((bike) =>
        bike.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredResults(filtered);
    } else {
      setFilteredResults([]);
    }
  }, [searchValue, bikes]);

  return (
    <div className="relative flex flex-col items-center gap-4">
      {/* El formulario */}
      <form className="flex w-full max-w-lg flex-col items-center gap-4 rounded-lg bg-gray-800 p-6 shadow-lg sm:flex-row">
        <span className="sr-only">Buscar moto</span>

        <input
          aria-label="Campo de búsqueda"
          className="w-full rounded-md bg-gray-700 px-4 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          placeholder="Busca tu moto..."
          type="text"
          {...register('title')}
        />
      </form>

      {/* Lista de resultados */}
      <ul className="absolute left-0 top-full z-10 mt-2 max-h-72 w-full max-w-lg divide-y divide-gray-700 overflow-y-auto rounded-lg bg-gray-800 text-gray-300 shadow-md">
        {filteredResults.map((bike: Bike, index: number) => (
          <li
            className="flex items-center justify-between rounded-lg px-4 py-3 transition duration-300 ease-in-out hover:bg-gray-700"
            key={bike.id}
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-300">
                {index + 1}:
              </span>
              <p className="text-lg font-semibold text-gray-300">
                {bike.title}
              </p>
            </div>
            <div className="flex-shrink-0">
              <Image
                alt={bike.title}
                className="rounded-md border border-gray-500"
                height={20}
                src={bike.image}
                width={40}
              />
            </div>
          </li>
        ))}
        {filteredResults.length === 0 && searchValue.length > 2 && (
          <li className="px-4 py-2 text-gray-500">
            No se encontraron coincidencias.
          </li>
        )}
        {error && (
          <li className="px-4 py-2 text-gray-500">
            Ocurrio un error, intenta de nuevo más tarde
          </li>
        )}
      </ul>
    </div>
  );
};

export default SearchForm;
