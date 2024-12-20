import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import dayjs from 'dayjs';

const Footer = (): React.ReactElement => {
  const currentYear = dayjs().year();

  return (
    <footer className="bg-gray-950 py-10 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-8 text-center md:grid-cols-3">
        <div>
          <h4 className="mb-4 text-2xl font-bold text-yellow-500">BikeWorld</h4>
          <p className="leading-relaxed text-gray-400">
            Tu plataforma para encontrar la moto de tus sueños. Rápido, sencillo
            y 100% gratuito.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xl font-bold uppercase text-yellow-500">
            Explora BikeWorld
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                className="text-gray-400 transition-all duration-300 hover:text-yellow-400"
                href="/"
              >
                Ver todas las motos
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-400 transition-all duration-300 hover:text-yellow-400"
                href="/"
              >
                Nuestras marcas asociadas
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-400 transition-all duration-300 hover:text-yellow-400"
                href="/"
              >
                Preguntas frecuentes
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-400 transition-all duration-300 hover:text-yellow-400"
                href="/"
              >
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xl font-bold uppercase text-yellow-500">
            Síguenos
          </h4>
          <div className="flex justify-center space-x-6 text-2xl ">
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
        </div>
      </div>
      <div className="mt-8 border-t border-gray-800 text-center text-gray-950">
        .
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          &copy; {currentYear}{' '}
          <span className="font-bold text-yellow-500">BikeWorld</span>. Todos
          los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
