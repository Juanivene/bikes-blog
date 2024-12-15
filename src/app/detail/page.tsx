'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { remark } from 'remark';
import gfm from 'remark-gfm';
import html from 'remark-html';

import poppins from '@/styles/poppinsFont';

const Detail = (): React.ReactElement => {
  const searchParams = useSearchParams();
  const bikeId = searchParams.get('moto');
  const [content, setContent] = useState<string>('');
  const [error, setError] = useState<boolean | null>(false);

  useEffect(() => {
    if (bikeId) {
      fetch(`/bikesMD/${bikeId}.md`)
        .then(async (res) => {
          if (!res.ok) throw new Error('No se pudo encontrar el archivo.');
          const text = await res.text();
          const processedContent = await remark()
            .use(gfm)
            .use(html)
            .process(text);
          setContent(processedContent.toString());
        })
        .catch(() => setError(true));
    }
  }, [bikeId]);

  return (
    <div
      className={`h-[100vh] w-full bg-[url('/img/bikes/bike-bg/bikersBg.png')] bg-cover bg-center md:h-[100vh] ${poppins.className}`}
    >
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative w-full max-w-3xl rounded-lg bg-gray-900 bg-opacity-30 text-white shadow-lg backdrop-blur-md sm:max-w-md md:max-w-4xl">
          <div className="border-b border-gray-700 p-4">
            <h2 className="text-lg font-semibold sm:text-xl md:text-2xl">
              Detalles de tu Moto
            </h2>
          </div>

          <div className="max-h-[70vh] space-y-4 overflow-y-auto p-6 text-sm md:text-base">
            {error && (
              <p className="text-red-500">
                Lamentablemente no pudimos acceder al detalle de tu moto.
              </p>
            )}
            {content && (
              <div
                className="prose-invert prose list-inside list-disc space-y-2 pl-5"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
            {!error && !content && <p>Cargando contenido...</p>}
          </div>

          <div className="flex justify-end border-t border-gray-700 p-4">
            <Link
              className="rounded-lg bg-yellow-suave px-4 py-2 text-sm text-gray-900 hover:bg-yellow-400 md:text-base"
              href="/"
            >
              Volver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
