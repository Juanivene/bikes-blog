import type { FormSchemas } from 'form-schemas';

import type { DataTestId, FormHandling, ListOption } from '../../types';

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
