'use client';

import { useRef } from 'react';

const SkipNavButton = (): JSX.Element => {
  const element = useRef<HTMLAnchorElement>(null);

  const handleFocus = (): void => {
    if (element.current) element.current.style.opacity = '1';
  };

  const handleBlur = (): void => {
    if (element.current) element.current.style.opacity = '0';
  };

  return (
    <a
      aria-label="Saltar navegación"
      className="skip-nav-button"
      href="#main"
      ref={element}
      tabIndex={0}
      onBlur={handleBlur}
      onFocus={handleFocus}
    >
      Saltar navegación
    </a>
  );
};

export default SkipNavButton;
