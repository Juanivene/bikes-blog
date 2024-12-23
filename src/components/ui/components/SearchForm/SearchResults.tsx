import Image from 'next/image';
import Link from 'next/link';

import { Bikes } from '../BikeCard/BikeCard';
import { motion } from 'framer-motion';

interface SearchResultsProps {
  filteredResults: Bikes[];
  searchValue: string;
  error?: boolean;
}

const SearchResults = ({
  filteredResults,
  searchValue,
  error,
}: SearchResultsProps): React.ReactElement => (
  <motion.ul
    className="absolute left-0 top-full z-50 max-h-80 w-full max-w-xl 
        divide-y divide-gray-700/50 overflow-y-auto rounded-xl rounded-t-none 
        bg-gray-900/95 text-gray-100 shadow-xl ring-1 ring-gray-700/50 backdrop-blur-sm"
  >
    {filteredResults.map((bike: Bikes, index: number) => (
      <Link
        className="group z-50 flex items-center justify-between gap-4 px-6 py-4 
            transition duration-300 hover:bg-gray-800"
        href={`/detail?moto=${bike.id}`}
        key={bike.id}
      >
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-yellow-400">
            {index + 1}
          </span>
          <p className="text-lg font-medium text-gray-100 group-hover:text-yellow-400">
            {bike.title}
          </p>
        </div>
        <div className="flex-shrink-0 overflow-hidden rounded-lg">
          <Image
            alt={bike.title}
            className="h-16 w-24 object-cover transition duration-300 
                group-hover:scale-110"
            height={64}
            src={bike.image}
            width={96}
          />
        </div>
      </Link>
    ))}

    {filteredResults.length === 0 && searchValue.length > 2 && (
      <li className="px-6 py-4 text-center text-gray-400">
        No se encontraron coincidencias 🏍️
      </li>
    )}

    {error && (
      <li className="px-6 py-4 text-center text-red-400">
        Ocurrió un error. Por favor, intenta de nuevo más tarde 🔧
      </li>
    )}
  </motion.ul>
);
export default SearchResults;
