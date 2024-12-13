import React from 'react';

const SearchForm = (): React.ReactElement => (
  <form className="flex items-center space-x-4 rounded-lg bg-gray-800 p-4 shadow-md">
    <input
      className="input input-bordered w-full max-w-xs rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      placeholder="Busca tu moto..."
      type="text"
    />
    <button
      className="btn rounded-md bg-yellow-500 px-6 py-2 font-semibold hover:bg-yellow-300"
      type="submit"
    >
      Buscar
    </button>
  </form>
);

export default SearchForm;
