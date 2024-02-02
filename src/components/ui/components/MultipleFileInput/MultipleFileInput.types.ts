import type { FormSchemas } from '@/forms';

import type { FormHandling } from '../../types/index';

export interface MultipleFileInputProps<T extends FormSchemas>
  extends FormHandling<T, true> {
  className?: string;
  disabled?: boolean;
  maxFiles?: number;
  maxSize?: number;
}
