'use client';

import { useState } from 'react';

import Icon from '../Icon/Icon';
import InputController from '../InputController/InputController';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

import { useHydrate } from '@/hooks';

import { cn } from '@/utilities';

import type { FormSchemas } from '@/forms';

import type { InputProps } from '../TextInput/TextInput.types';

const PasswordInput = <T extends FormSchemas>(
  props: InputProps<T>
): React.ReactElement => {
  const {
    className = '',
    control,
    helperText = '',
    hideLabel = false,
    name,
    label,
    dti,
    defaultValue = '',
    ...rest
  } = props;

  const [displayPass, setDisplayPass] = useState(false);

  const hydrated = useHydrate();

  const handleChange = (): void => {
    setDisplayPass((prev) => !prev);
  };

  return (
    <fieldset className={cn('form-control w-72', className)}>
      {!hideLabel && (
        <label className="text-lg" htmlFor={name as string}>
          {label}
        </label>
      )}
      <InputController
        control={control}
        defaultValue={defaultValue}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <div
            className={`input input-bordered relative ${
              !hideLabel ? 'mt-1' : ''
            } overflow-hidden bg-gray-100 px-0 dark:bg-slate-700 ${
              error ? 'border-error' : ''
            }`}
          >
            <input
              className="input h-full w-[calc(100%_-_40px)] border-0 bg-gray-100 px-0 ps-4 dark:bg-slate-700"
              data-testid={dti}
              disabled={!hydrated || rest.disabled}
              id={name as string}
              placeholder={rest.placeholder ?? 'Ingrese un valor'}
              ref={field.ref}
              type={displayPass ? 'text' : 'password'}
              value={field.value as string}
              onBlur={field.onBlur}
              onChange={field.onChange}
              {...rest}
            />
            <button
              className="btn btn-ghost absolute bottom-0 right-0 top-0 z-50 block h-full w-[40px] rounded-btn p-0"
              disabled={!hydrated || rest.disabled}
              tabIndex={-1}
              type="button"
              onClick={handleChange}
            >
              {displayPass ? (
                <Icon
                  className="flex w-full text-gray-600 dark:text-gray-400"
                  iconComponent={<IoMdEyeOff />}
                  title="Ocultar contraseña"
                />
              ) : (
                <Icon
                  className="flex w-full text-gray-600 dark:text-gray-400"
                  iconComponent={<IoMdEye />}
                  title="Mostrar contraseña"
                />
              )}
            </button>
          </div>
        )}
      />
      {helperText ? (
        <p className="mt-1 text-sm text-gray-400 dark:text-gray-400">
          {helperText}
        </p>
      ) : null}
    </fieldset>
  );
};

export default PasswordInput;
