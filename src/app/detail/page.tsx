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
  const [error, setError] = useState<string | null>(null);

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
        .catch((err) => setError(err));
    }
  }, [bikeId]);

  return (
    <div
      className={`h-[100vh] w-full bg-[url('/img/bikes/bike-bg/bikersBg.png')] bg-cover bg-center md:h-[90vh] ${poppins.className}`}
    >
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative mx-6 w-full max-w-3xl rounded-lg bg-gray-900 bg-opacity-30 text-white shadow-lg backdrop-blur-md sm:max-w-md md:max-w-2xl">
          <div className="border-b border-gray-700 p-4">
            <h2 className="text-lg font-semibold sm:text-xl md:text-2xl">
              Detalles de tu Moto
            </h2>
          </div>

          <div className="max-h-[70vh] space-y-4 overflow-y-auto p-6 text-sm md:text-base">
            {error && <p className="text-red-500">{error}</p>}
            {content ? (
              <div
                className="prose-invert prose list-inside list-disc space-y-2 pl-5"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ) : (
              <p>Cargando contenido...</p>
            )}
          </div>
          <div className="flex justify-end border-t border-gray-700 p-4">
            <Link
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm hover:bg-blue-700 md:text-base"
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
