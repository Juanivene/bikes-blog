'use client';

import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';
import { FaSun } from 'react-icons/fa';
import { IoMoon } from 'react-icons/io5';

import { Button, Icon } from '@/components/ui';

import { cn } from '@/utilities';

import { DTI, DTI_LIST } from '@/dti';

import type { ThemeTogglerButtonProps } from '@/components/interface/common';

const ThemeTogglerButton = (props: ThemeTogglerButtonProps): JSX.Element => {
  const { className, size = '1rem', ...buttonProps } = props;

  const [isClient, setIsClient] = useState(false);
  const { theme, setTheme } = useTheme();

  const icon =
    theme === 'light' ? <IoMoon size={size} /> : <FaSun size={size} />;

  const handleClick = (): void => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient)
    return (
      <div
        className={cn(
          'flex h-[36px] w-[36px] items-center justify-center',
          className
        )}
      >
        <span className="loading loading-spinner" />
      </div>
    );

  return (
    <Button
      unbordered
      className={cn(
        'theme-controller !flex h-[36px] min-h-0 w-[36px] content-center items-center justify-center p-0 font-light leading-[1.25rem] ',
        className
      )}
      colorLight="btn-ghost"
      data-tip="Cambiar tema"
      dti={DTI(DTI_LIST.ACTIONS.TOGGLE_THEME)}
      textColorDark="dark:text-gray-400"
      onClick={handleClick}
      {...buttonProps}
    >
      <Icon iconComponent={icon} title="Cambiar tema" />
    </Button>
  );
};

export default ThemeTogglerButton;
