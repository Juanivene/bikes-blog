import { Clock, Trophy, Users, Wrench } from 'lucide-react';
import Image from 'next/image';

const AboutContainer = (): React.ReactElement => (
  <div className="bg-[#0f1729] py-16 text-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold text-[#ffc107]">
          Sobre Nosotros
        </h2>
        <p className="mx-auto max-w-3xl text-xl text-gray-300">
          BikeWorld es tu plataforma definitiva para encontrar la moto perfecta.
          Con años de experiencia en el mercado, nos dedicamos a hacer el
          proceso de búsqueda de motos más fácil y eficiente.
        </p>
      </div>

      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-[#1a2438] p-6 text-center transition-all duration-300 hover:bg-[#232f4a]">
          <div className="mb-4 flex justify-center">
            <Users className="h-10 w-10 text-[#ffc107]" />
          </div>
          <h3 className="mb-2 text-2xl font-bold">+10,000</h3>
          <p className="text-gray-400">Usuarios Activos</p>
        </div>

        <div className="rounded-lg bg-[#1a2438] p-6 text-center transition-all duration-300 hover:bg-[#232f4a]">
          <div className="mb-4 flex justify-center">
            <Wrench className="h-10 w-10 text-[#ffc107]" />
          </div>
          <h3 className="mb-2 text-2xl font-bold">+1,000</h3>
          <p className="text-gray-400">Motos Disponibles</p>
        </div>

        <div className="rounded-lg bg-[#1a2438] p-6 text-center transition-all duration-300 hover:bg-[#232f4a]">
          <div className="mb-4 flex justify-center">
            <Trophy className="h-10 w-10 text-[#ffc107]" />
          </div>
          <h3 className="mb-2 text-2xl font-bold">95%</h3>
          <p className="text-gray-400">Satisfacción</p>
        </div>

        <div className="rounded-lg bg-[#1a2438] p-6 text-center transition-all duration-300 hover:bg-[#232f4a]">
          <div className="mb-4 flex justify-center">
            <Clock className="h-10 w-10 text-[#ffc107]" />
          </div>
          <h3 className="mb-2 text-2xl font-bold">24/7</h3>
          <p className="text-gray-400">Soporte</p>
        </div>
      </div>

      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h3 className="mb-4 text-3xl font-bold text-[#ffc107]">
            Nuestra Misión
          </h3>
          <p className="text-gray-300">
            En BikeWorld, nos apasiona conectar a los amantes de las motos con
            su vehículo ideal. Nuestra plataforma está diseñada para hacer el
            proceso de búsqueda lo más sencillo y eficiente posible, ofreciendo
            información detallada y comparativas precisas.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-[#ffc107]" />
              <span>Amplia selección de motos de todas las marcas</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-[#ffc107]" />
              <span>Información detallada y especificaciones técnicas</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-[#ffc107]" />
              <span>Comparativas y reseñas objetivas</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-[#ffc107]" />
              <span>Asesoramiento personalizado</span>
            </li>
          </ul>
        </div>
        <div className="relative">
          <Image
            alt="Taller de motos"
            className="rounded-lg shadow-xl"
            height={500}
            src="/img/bikes/bike-bg/aboutBike.png"
            width={500}
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-[#0f1729] via-transparent to-transparent" />
        </div>
      </div>
    </div>
  </div>
);

export default AboutContainer;
