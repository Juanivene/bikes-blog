'use client';

import type { ComboBoxInputProps } from '../ComboBoxInput/ComboBoxInput.types';
import InputController from '../InputController/InputController';
import MultipleComboBox from '../MultipleComboBox/MultipleComboBox';
import type { FormSchemas } from 'form-schemas';
import { cn } from 'utilities';

const MultipleComboBoxInput = <T extends FormSchemas>(
  props: ComboBoxInputProps<T>
): JSX.Element => {
  const {
    className = '',
    control,
    helperText = '',
    inputClassName = '',
    name,
    label,
    options = [],
    placeholder,
    ...rest
  } = props;

  return (
    <fieldset className={cn('form-control w-72', className)}>
      <label className="text-lg" htmlFor={name as string}>
        {label}
      </label>
      <InputController
        control={control}
        defaultValue={null}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <MultipleComboBox<T>
            controller={field}
            disabled={rest.disabled}
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

export default MultipleComboBoxInput;
