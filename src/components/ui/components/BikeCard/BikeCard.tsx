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
    <article className=" max-w-sm rounded-lg border border-gray-200 bg-white shadow-lg transition  hover:shadow-xl">
      <Image alt={bike.title} height={500} src={bike.image} width={350} />

      <div className="flex flex-col gap-3 p-4">
        <h3 className="text-xl font-bold text-gray-800">{bike.title}</h3>
        <p className="text-gray-600">{bike.description}</p>
        <div className="flex items-center">
          <span
            className={`text-sm font-medium ${favorite ? 'bg-green-500' : ''}`}
          >
            <button
              type="button"
              onClick={() => {
                void handleFavorite(bike.id, favorite);
              }}
            >
              ⭐
            </button>
          </span>
        </div>
        <button
          className="mt-3 rounded-lg bg-yellow-400 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-300"
          type="button"
        >
          Ver detalles
        </button>
      </div>
    </article>
  );
};

export default BikeCard;
