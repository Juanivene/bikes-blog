'use client';

import ComboBox from '../ComboBox/ComboBox';
import InputController from '../InputController/InputController';

import { useHydrate } from '@/hooks';

import { cn } from '@/utilities';

import type { FormSchemas } from '@/forms';

import type { ComboBoxInputProps } from './ComboBoxInput.types';

const ComboBoxInput = <T extends FormSchemas>(
  props: ComboBoxInputProps<T>
): React.ReactElement => {
  const {
    className = '',
    control,
    dti,
    helperText = '',
    hideLabel = false,
    inputClassName = '',
    name,
    label,
    options = [],
    placeholder,
    ...rest
  } = props;

  const hydrated = useHydrate();

  return (
    <fieldset className={cn('form-control w-72', className)}>
      {!hideLabel && (
        <label className="text-lg" htmlFor={name as string}>
          {label}
        </label>
      )}
      <InputController
        control={control}
        defaultValue={null}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <ComboBox<T>
            controller={field}
            disabled={!hydrated || rest.disabled}
            dti={dti}
            error={!!error}
            id={name as string}
            inputClassName={inputClassName}
            name={name.toString()}
            options={options}
            placeholder={placeholder ?? 'Ingrese un valor'}
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

export default ComboBoxInput;
