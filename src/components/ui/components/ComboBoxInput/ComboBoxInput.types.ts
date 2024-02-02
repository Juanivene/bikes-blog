import type { FormSchemas } from '@/forms';

import type { FormHandling } from '../../types';
import { DataTestId, ListOption } from '@/interface/globalTypes';

export interface ComboBoxInputProps<T extends FormSchemas>
  extends FormHandling<T>,
    DataTestId,
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'required' | 'name'> {
  label: string;
  className?: string;
  helperText?: string;
  hideLabel?: boolean;
  inputClassName?: string;
  options: ListOption[];
  placeholder?: string;
}
