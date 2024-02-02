import type { CheckboxColorType, TextColorType } from '../../types/tailwind';
import type { DataTestId } from '@/interface/globalTypes';

export interface RadioButtonProps extends DataTestId {
  ariaLabel: string;
  className?: string;
  colorDark?: CheckboxColorType['dark'];
  colorLight?: CheckboxColorType['light'];
  defaultChecked?: boolean;
  disabled?: boolean;
  id: string;
  label?: string;
  textColorDark?: TextColorType['dark'];
  textColorLight?: TextColorType['light'];
}
