import type { Control, UseFormSetValue } from 'react-hook-form';

import type { FormSchemas } from '@/forms';

export type FormHandling<
  T extends FormSchemas,
  TisFile extends boolean = false,
> = {
  control: Control<T>;
  name: keyof T;
} & (TisFile extends true
  ? {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- any until types are fixed
      setValue: UseFormSetValue<any>;
    }
  : {
      setValue?: never;
    });
