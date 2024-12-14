import React from 'react';

const SearchForm = (): React.ReactElement => (
  <form className="flex w-full max-w-lg flex-col items-center gap-4 rounded-lg bg-gray-800 p-6 shadow-lg sm:flex-row">
    <span className="sr-only">Buscar moto</span>

    <input
      aria-label="Campo de búsqueda"
      className="w-full rounded-md bg-gray-700 px-4 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
      placeholder="Busca tu moto..."
      type="text"
    />

    <select
      aria-label="Filtrar por categoría"
      className="w-full rounded-md bg-gray-700 px-4 py-2 text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 sm:w-auto"
      id="categoryFilter"
    >
      <option value="all">Todas las categorías</option>
      <option value="sport">Deportivas</option>
      <option value="cruiser">Cruiser</option>
      <option value="touring">Touring</option>
      <option value="naked">Naked</option>
      <option value="off-road">Off-Road</option>
      <option value="scooter">Scooters</option>
    </select>

    <button
      aria-label="Buscar moto"
      className="text- rounded-md bg-yellow-suave px-6 py-2 text-sm font-semibold text-gray-900 transition hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-100"
      type="submit"
    >
      Buscar
    </button>
  </form>
);

export default SearchForm;
