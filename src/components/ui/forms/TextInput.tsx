import * as React from 'react';

import InputController from './InputController';
import { InputProps } from '@/components/ui/interface';

import { cn } from '@/helpers/cn';

import { FormSchemas } from '@/forms';

const TextInput = <T extends FormSchemas>(props: InputProps<T>) => {
  const {
    control,
    name,
    label,
    className = '',
    type = 'text',
    dti,
    ...rest
  } = props;

  return (
    <fieldset className={cn('form-control ', className)}>
      <label htmlFor={name as string} className="text-lg">
        {label}
      </label>
      <InputController
        name={name}
        control={control}
        defaultValue=""
        render={({ field, fieldState: { error } }) => (
          <input
            value={field.value as string}
            onChange={field.onChange}
            onBlur={field.onBlur}
            ref={field.ref}
            className={`input input-bordered w-full ${error && 'border-red'}`}
            id={name as string}
            type={type}
            data-testid={dti}
            placeholder={rest?.placeholder ?? 'Ingrese un valor'}
            {...rest}
          />
        )}
      />
    </fieldset>
  );
};
export default TextInput;
