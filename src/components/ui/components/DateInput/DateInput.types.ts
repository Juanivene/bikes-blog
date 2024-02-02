import type { FormSchemas } from '@/forms';

import { FormHandling } from '../../types';
import type { DataTestId } from '@/interface/globalTypes';

export interface InputProps<T extends FormSchemas>
  extends FormHandling<T>,
    DataTestId,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'required' | 'name'> {
  label: string;
  className?: string;
  hideLabel?: boolean;
  helperText?: string;
}
