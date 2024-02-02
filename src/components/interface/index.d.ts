import type { AnyProp } from '@/interface/globalTypes';

// ----------------------------------------------------------------------
// OTHER
// ----------------------------------------------------------------------

export interface ThemeTogglerButtonProps extends AnyProp {
  className?: string;
}

export interface LoadingBackdropProps extends AnyProp {
  open: boolean;
}
