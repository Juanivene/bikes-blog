import type { FormSchemas } from '@/forms';

import type { FormHandling } from '../../types';
import { DataTestId } from '@/interface/globalTypes';

export interface InputProps<T extends FormSchemas>
  extends FormHandling<T>,
    DataTestId,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'required' | 'name' | 'defaultValue'
    > {
  label: string;
  helperText?: string;
  className?: string;
  hideLabel?: boolean;
  defaultValue?: string | number | boolean | null;
}
