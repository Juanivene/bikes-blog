import type { ButtonColorType } from '../../types/tailwind';
import type { DataTestId } from '@/interface/globalTypes';

export type IconButtonPropsType =
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    DataTestId & {
      className?: string;
      colorDark?: ButtonColorType['dark'];
      colorLight?: ButtonColorType['light'];
      disabled?: boolean;
      iconComponent: React.ReactNode;
      label?: string;
      unbordered?: boolean;
    };
