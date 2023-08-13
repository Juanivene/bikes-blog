import { Control } from 'react-hook-form';

import { FormSchemas } from '@/forms';

import { BasicList, DataTestId } from '@/interface/globalTypes';

// ----------------------------------------------------------------------
// FORMS
// ----------------------------------------------------------------------

export interface FormHandling<T extends FormSchemas> {
  control: Control<T>;
  name: keyof T;
}

export interface InputProps<T extends FormSchemas>
  extends FormHandling<T>,
    DataTestId,
    React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

export interface SelectProps<T extends FormSchemas>
  extends FormHandling<T>,
    DataTestId,
    React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: BasicList[];
  className?: string;
  saveId?: boolean;
}
