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
