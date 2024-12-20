import { FormSchemas } from '@/forms';

import type { InputProps as TextInputProps } from '../TextInput/TextInput.types';

export interface InputProps<T extends FormSchemas> extends TextInputProps<T> {
  labelSide?: 'left' | 'right';
}
