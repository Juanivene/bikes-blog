import Image from 'next/image';
import Link from 'next/link';

import 'github-markdown-css';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import bangers from '@/styles/fontBanger';
import '@/styles/markdown.css';
import poppins from '@/styles/poppinsFont';

const baseUrl = process.env.NEXT_PUBLIC_DB_HOST;

const Detail = async ({
  params,
}: {
  params: Promise<{ [key: string]: string }>;
}): Promise<React.ReactElement> => {
  const { moto: bikeId } = await params;
  let error = false;
  let content = '';

  try {
    const res = await fetch(`${baseUrl}/bikesMD/${bikeId}.md`);
    if (!res.ok) {
      throw new Error('No se pudo encontrar el archivo.');
    }
    content = await res.text();
  } catch (err) {
    error = true;
  }

  return (
    <div
      className={`h-full w-full bg-[url('/img/bikes/bike-bg/bikersBg.png')] bg-cover bg-center sm:px-2 ${poppins.className}`}
    >
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative w-11/12 rounded-lg bg-gray-900 bg-opacity-30 text-white shadow-lg backdrop-blur-md md:max-w-4xl ">
          <div className="border-b border-gray-700 p-4">
            <h2 className="text-lg font-semibold sm:text-xl md:text-2xl">
              Detalles de tu Moto
            </h2>
            <p
              className={`absolute right-4 top-4 block text-3xl font-semibold text-yellow-500 md:hidden ${bangers.className}`}
            >
              BikeWorld
            </p>
          </div>

          <div className="max-h-[70vh] space-y-4 overflow-y-auto p-6">
            {error && (
              <p className="text-red-500">
                Lamentablemente no pudimos acceder al detalle de tu moto.
              </p>
            )}
            {!error && content && (
              <div className="markdown-body">
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  remarkPlugins={[remarkGfm]}
                >
                  {content}
                </ReactMarkdown>
              </div>
            )}
            {!error && !content && <p>Cargando contenido...</p>}
          </div>

          <div className="flex justify-between border-t border-gray-700 p-4">
            <p
              className={`hidden text-3xl font-semibold text-yellow-500 md:block ${bangers.className}`}
            >
              BikeWorld
            </p>
            <div className="flex justify-center space-x-1 text-2xl md:space-x-6">
              <Link
                className="transition-all duration-300 hover:scale-110"
                href="https://facebook.com"
                target="_blank"
              >
                <Image
                  alt="Facebook Logo"
                  className="hover:opacity-75"
                  height={40}
                  src="/img/socialNetworks/facebook.png"
                  width={40}
                />
              </Link>
              <Link
                className="transition-all duration-300 hover:scale-110"
                href="https://instagram.com"
                target="_blank"
              >
                <Image
                  alt="Instagram Logo"
                  className="hover:opacity-75"
                  height={40}
                  src="/img/socialNetworks/instagram.png"
                  width={40}
                />
              </Link>
              <Link
                className="transition-all duration-300 hover:scale-110"
                href="https://x.com"
                target="_blank"
              >
                <Image
                  alt="X Logo"
                  className="hover:opacity-75"
                  height={40}
                  src="/img/socialNetworks/x.png"
                  width={40}
                />
              </Link>
              <Link
                className="transition-all duration-300 hover:scale-110"
                href="https://youtube.com"
                target="_blank"
              >
                <Image
                  alt="YouTube Logo"
                  className="hover:opacity-75"
                  height={40}
                  src="/img/socialNetworks/youtube.png"
                  width={40}
                />
              </Link>
            </div>
            <Link
              className="rounded-lg bg-yellow-suave px-4 py-2 text-base text-gray-900 hover:bg-yellow-400 sm:px-4 sm:py-2 sm:text-sm md:px-4 md:py-2 md:text-base"
              href="/"
            >
              Inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
