import type { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';

import type { DataTestId, ListOption } from '../../types';
import type {
  BgColorProp,
  HeightType,
  TextColorProp,
  WidthType,
} from '../../types/tailwind';

export type ComboBoxProps<T extends FieldValues> = DataTestId & {
  className?: string;
  controller: ControllerRenderProps<T, Path<T>>;
  disabled?: boolean;
  error?: boolean;
  inputClassName?: string;
  msgError?: string;
  name: string;
  options: ListOption[];
  placeholder: string;
  positionedColorOption?: {
    bgColor: BgColorProp['color'];
    textColor: TextColorProp['textColor'];
  };
  selectedColorOption?: BgColorProp['color'];
  sizing?: {
    height?: HeightType;
    width?: WidthType;
  };
};
