import type { ButtonColorType, TextColorType } from '../../types/tailwind';
import type { DataTestId } from '@/interface/globalTypes';

export type ButtonPropsType = React.ButtonHTMLAttributes<HTMLButtonElement> &
  DataTestId & {
    /**
     * @remarks either activeButton or outlineButton, not both.
     */
    activeButton?: boolean;
    ariaHidden?: boolean;
    ariaLabel?: string;
    children?: string | React.ReactNode;
    colorLight?: ButtonColorType['light'];
    colorDark?: ButtonColorType['dark'];
    endIcon?: React.ReactElement;
    glass?: boolean;
    ignoreDefaultColor?: boolean;
    loading?: boolean;
    lowerCase?: boolean;
    name?: string;
    /**
     * @remarks Use either activeButton or outlineButton, not both.
     */
    outlineButton?: boolean;
    size?: 'btn-xs' | 'btn-sm' | 'btn-md' | 'btn-lg';
    sizeText?:
      | 'text-xs'
      | 'text-sm'
      | 'text-base'
      | 'text-lg'
      | 'text-xl'
      | 'text-2xl'
      | 'text-3xl'
      | 'text-4xl'
      | 'text-5xl'
      | 'text-6xl'
      | 'text-7xl'
      | 'text-8xl'
      | `text-[${number}px]`;
    startIcon?: React.ReactElement;
    textColorDark?: TextColorType['dark'];
    textColorLight?: TextColorType['light'];
    type?: 'button' | 'reset' | 'submit';
    unbordered?: boolean;
    unstyled?: boolean;
    withoutAnimation?: boolean;
  } & (
    | {
        activeButton?: boolean;
        outlineButton?: never;
      }
    | {
        activeButton?: never;
        outlineButton?: boolean;
      }
  );
