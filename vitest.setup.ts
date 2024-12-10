// import { expect } from 'vitest'; // Asegúrate de que 'expect' esté disponible
import '@testing-library/jest-dom';

// Extiende 'expect' con matchers de jest-dom

// mediaQuery
globalThis.matchMedia =
  globalThis.matchMedia ||
  function () {
    return {
      matches: false,
      addEventListener: () => {},
      removeEventListener: () => {},
    };
  };
