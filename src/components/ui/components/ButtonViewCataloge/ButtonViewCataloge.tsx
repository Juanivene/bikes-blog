'use client';

import React from 'react';

const ButtonViewCataloge = (): React.ReactElement => {
  const handleScroll = (): void => {
    const scrollHeight =
      window.innerWidth < 640 ? window.innerHeight * 0.5 : window.innerHeight;
    window.scrollBy({
      top: scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className="rounded-lg bg-yellow-suave px-6 py-3 text-sm font-bold text-gray-900 hover:bg-yellow-400 sm:text-base"
      type="button"
      onClick={handleScroll}
    >
      Ver modelos
    </button>
  );
};

export default ButtonViewCataloge;
