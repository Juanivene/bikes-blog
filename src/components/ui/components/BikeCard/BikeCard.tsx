'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { toast } from 'sonner';

export type Bikes = {
  id: string;
  title: string;
  cc: string;
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
  const router = useRouter();

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
    if (!favorite) {
      toast.success('Moto agregada a favoritos');
    } else {
      toast.info('Moto eliminada de favoritos');
    }
  };

  return (
    <article
      className="mx-4 my-4 max-w-sm rounded-lg border border-gray-200 bg-white shadow-md 
      transition-transform hover:scale-105 hover:shadow-lg sm:mx-0 lg:max-w-md"
    >
      <Image alt={bike.title} height={500} src={bike.image} width={350} />
      <div className="flex flex-col gap-4 space-y-2 p-4">
        <h3 className="text-lg font-bold text-gray-800">{bike.title}</h3>
        <p className="text-sm text-gray-600">
          <b>Cilindrada: </b>
          {bike.cc}
        </p>
        <div className="flex items-center gap-2">
          <button
            className={`rounded-full p-2 text-lg transition ${
              favorite
                ? 'bg-yellow-300 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
            type="button"
            onClick={() => void handleFavorite(bike.id, favorite)}
          >
            <Star />
          </button>
          <span className="text-sm font-medium text-gray-600">
            {favorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          </span>
        </div>
        <button
          className="mt-2 rounded-lg bg-yellow-400 px-6 py-3 text-sm font-semibold 
          text-gray-900 transition hover:bg-yellow-300 sm:text-base md:text-lg"
          type="button"
          onClick={() => router.push(`/detail/${bike.id}`)}
        >
          Ver detalles
        </button>
      </div>
    </article>
  );
};

export default BikeCard;
