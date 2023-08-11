'use client';

import { useRef } from 'react';

const SkipNavButton = () => {
  const element = useRef<HTMLAnchorElement>(null);

  const handleFocus = () => {
    if (element.current) element.current.style.opacity = '1';
  };

  const handleBlur = () => {
    if (element.current) element.current.style.opacity = '0';
  };

  return (
    <a
      ref={element}
      style={{
        opacity: 0,
        position: 'fixed',
        top: 0,
        left: 0,
        border: '1px solid #ccc',
        backgroundColor: '#333333',
        color: '#ccc',
        zIndex: '99999',
        padding: '0.5rem 1rem',
        pointerEvents: 'none',
      }}
      href="#main"
      aria-label="Saltar navegación"
      tabIndex={0}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      Saltar navegación
    </a>
  );
};

export default SkipNavButton;
