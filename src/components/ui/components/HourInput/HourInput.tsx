'use client';

import HourPicker from '../HourPicker/HourPicker';
import InputController from '../InputController/InputController';

import { cn } from '@/utilities';

import type { FormSchemas } from '@/forms';

import type { InputProps } from '../TextInput/TextInput.types';

const HourInput = <T extends FormSchemas>(
  props: InputProps<T>
): React.ReactElement => {
  const {
    control,
    helperText = '',
    hideLabel = false,
    name,
    label,
    className = '',
    ...rest
  } = props;

  return (
    <fieldset className={cn('form-control ', className)}>
      <label className="text-lg" htmlFor={name as string}>
        {label}
      </label>
      <InputController
        control={control}
        defaultValue=""
        name={name}
        render={({ field, fieldState: { error } }) => (
          <HourPicker
            className={!hideLabel ? 'mt-1' : ''}
            disabled={rest.disabled}
            error={Boolean(error)}
            name={field.name}
            ref={field.ref}
            value={field.value as string}
            onBlur={field.onBlur}
            onChange={field.onChange}
            {...rest}
          />
        )}
      />
      {!!helperText && (
        <p className="mt-1 text-sm text-gray-400 dark:text-gray-400">
          {helperText}
        </p>
      )}
    </fieldset>
  );
};

export default HourInput;
