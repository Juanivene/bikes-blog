'use client';

// import Image from 'next/image';
// import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import { useForm } from 'react-hook-form';

const BACKEND_URL = process.env.NEXT_PUBLIC_DB_HOST;

interface Bike {
  id: string;
  title: string;
  cc: string;
  isFavorite: boolean;
  image: string;
}

interface FormData {
  title: string;
}

const SearchForm: React.FC = (): React.ReactElement => {
  const { register, watch } = useForm<FormData>();
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [filteredResults, setFilteredResults] = useState<Bike[]>([]);
  const [error, setError] = useState(false);
  const [isListVisible, setIsListVisible] = useState<boolean>(false);
  const formRef = useRef<HTMLDivElement>(null);

  const searchValue: string = watch('title', '');

  const fetchBikes = useCallback(async (): Promise<void> => {
    try {
      const response = await fetch(`${BACKEND_URL}/bikes`);
      setBikes(await response.json());
    } catch {
      setError(true);
    }
  }, []);

  useEffect((): void => {
    fetchBikes();
  }, [fetchBikes]);

  useEffect((): void => {
    if (searchValue.length > 2) {
      const filtered = bikes.filter((bike) =>
        bike.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredResults(filtered);
      setIsListVisible(true);
    } else {
      setFilteredResults([]);
      setIsListVisible(false);
    }
  }, [searchValue, bikes]);

  const handleClickOutside = (event: MouseEvent): void => {
    if (formRef.current && !formRef.current.contains(event.target as Node)) {
      setIsListVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center gap-4" ref={formRef}>
      <form
        className={`w-full max-w-md rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 p-6 shadow-xl sm:max-w-sm sm:p-4 ${isListVisible ? 'rounded-b-none' : ''}`}
        onSubmit={(event) => event.preventDefault()}
      >
        <SearchInput register={register} />
      </form>

      {isListVisible && (
        <SearchResults
          error={error}
          filteredResults={filteredResults}
          searchValue={searchValue}
        />
      )}
    </div>
  );
};

export default SearchForm;
