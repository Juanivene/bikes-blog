import type { CheckboxColorType, TextColorType } from '../../types/tailwind';
import type { DataTestId } from '@/interface/globalTypes';

export interface CheckboxProps {
  dti: DataTestId;
  ariaLabel: string;
  className?: string;
  id: string;
  label?: string;
  colorDark?: CheckboxColorType['dark'];
  colorLight?: CheckboxColorType['light'];
  textColorDark?: TextColorType['dark'];
  textColorLight?: TextColorType['light'];
  disabled?: boolean;
}
