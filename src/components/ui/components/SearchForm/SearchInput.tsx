import { UseFormRegister } from 'react-hook-form';

interface SearchInputProps {
  register: UseFormRegister<{ title: string }>;
}

const SearchInput = ({ register }: SearchInputProps): React.ReactElement => (
  <input
    aria-label="Campo de búsqueda"
    className="w-full rounded-lg bg-gray-700/50 px-12 py-3 text-base 
          text-gray-100 placeholder-gray-400 backdrop-blur-sm transition-all
          duration-300 focus:outline-none focus:ring-2 
          focus:ring-yellow-400/50"
    placeholder="Busca tu moto"
    type="text"
    {...register('title')}
  />
);

export default SearchInput;
