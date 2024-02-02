import type { FormSchemas } from 'form-schemas';

import type { FormHandling } from '../../types/index';

export interface FileInputProps<T extends FormSchemas>
  extends FormHandling<T, true> {
  label: string;
  className?: string;
  disabled?: boolean;
  hideLabel?: boolean;
  inputClassName?: string;
}
