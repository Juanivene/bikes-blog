'use client';

import Image from 'next/image';
import { useState } from 'react';

export type Bikes = {
  id: string;
  title: string;
  description: string;
  image: string;
  isFavorite: boolean;
};

type Props = {
  bike: Bikes;
};

const BACKEND_URL = process.env.NEXT_PUBLIC_DB_HOST;
const BikeCard = (props: Props): React.ReactElement => {
  const { bike } = props;
  const [favorite, setFavorite] = useState(bike.isFavorite);

  const handleFavorite = async (
    id: string,
    isFavorite: boolean
  ): Promise<void> => {
    const response = await fetch(`${BACKEND_URL}/bikes/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isFavorite: !isFavorite }),
    });

    if (!response.ok) {
      throw new Error('Error al actualizar favorito');
    }

    setFavorite(!isFavorite);
  };

  return (
    <article className="my-4 max-w-sm rounded-lg border border-gray-200 bg-white shadow-md transition-transform hover:scale-105 hover:shadow-lg">
      <Image
        alt={bike.title}
        className="rounded-t-lg object-cover"
        height={500}
        src={bike.image}
        width={350}
      />
      <div className="flex flex-col gap-4 p-4">
        <h3 className="text-lg font-bold text-gray-800">{bike.title}</h3>
        <p className="text-sm text-gray-600">{bike.description}</p>
        <div className="flex items-center gap-2">
          <button
            className={`rounded-full p-2 transition ${
              favorite ? 'bg-green-300 text-white' : 'bg-gray-200 text-gray-600'
            }`}
            type="button"
            onClick={() => {
              void handleFavorite(bike.id, favorite);
            }}
          >
            ⭐
          </button>
          <span className="text-sm font-medium text-gray-600">
            {favorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          </span>
        </div>
        <button
          className="mt-2 rounded-lg bg-yellow-400 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-yellow-300"
          type="button"
        >
          Ver detalles
        </button>
      </div>
    </article>
  );
};

export default BikeCard;
