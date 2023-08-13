import {
  Control,
  ControllerFieldState,
  ControllerRenderProps,
  Path,
  UseFormStateReturn,
} from 'react-hook-form';

import { FormSchemas } from '@/forms';

import { BasicList, DataTestId } from '@/interface/globalTypes';

// ----------------------------------------------------------------------
// FORMS
// ----------------------------------------------------------------------

export interface FormHandling<T extends FormSchemas> {
  control: Control<T>;
  name: keyof T;
}

export interface ControllerProps<T extends FormSchemas>
  extends FormHandling<T> {
  defaultValue: string | number | boolean | null;
  render: ({
    field,
    fieldState: { error },
  }: {
    field: ControllerRenderProps<T, Path<T>>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<T>;
  }) => React.ReactElement;
}

export interface InputProps<T extends FormSchemas>
  extends FormHandling<T>,
    DataTestId,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'required'> {
  label: string;
  className?: string;
}

export interface SelectProps<T extends FormSchemas>
  extends FormHandling<T>,
    DataTestId,
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'required'> {
  label: string;
  options: BasicList[];
  className?: string;
  saveId?: boolean;
}
