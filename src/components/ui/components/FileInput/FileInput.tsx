'use client';

import { useState } from 'react';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import InputController from '../InputController/InputController';
import { IoTrashBin } from 'react-icons/io5';

import { cn } from '@/utilities';

import type { FormSchemas } from '@/forms';

import { DTI, DTI_LIST } from '@/dti';

import type { FileInputProps } from './FileInput.types';

const FileInput = <T extends FormSchemas>(
  props: FileInputProps<T>
): React.ReactElement => {
  const {
    className = '',
    control,
    disabled = false,
    hideLabel = false,
    name,
    label,
    setValue,
    inputClassName,
    ...rest
  } = props;

  const [hasLoadedFile, setHasLoadedFile] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files ? e.target.files[0] : null;
    if (!file) {
      setHasLoadedFile(false);
    } else {
      setHasLoadedFile(true);
    }

    setValue(name as string, file);
  };

  const handleRemove = (): void => {
    setValue(name as string, null);
    setHasLoadedFile(false);
  };

  return (
    <fieldset className={cn('form-control w-full', className)}>
      {!hideLabel && (
        <label className="md:text-lg" htmlFor={name as string}>
          {label}
        </label>
      )}
      <div className="mt-1 flex flex-col gap-2 md:flex-row">
        <InputController
          control={control}
          defaultValue={null}
          name={name}
          render={({ field, fieldState: { error } }) => (
            <input
              className={cn(
                `file-input file-input-ghost file-input-sm w-full max-w-xs border border-gray-300 md:file-input-md focus:bg-gray-200 dark:border-gray-500 dark:focus:bg-gray-800 ${
                  error ? 'border-error' : ''
                }`,
                inputClassName
              )}
              data-testid={DTI(DTI_LIST.FORM.FILE)}
              disabled={disabled}
              id={name as string}
              ref={field.ref}
              type="file"
              onBlur={field.onBlur}
              onChange={handleChange}
              {...rest}
            />
          )}
        />
        <Button
          className="btn-sm inline-block border border-gray-300 md:btn-md md:tooltip md:tooltip-bottom"
          data-tip="Borrar archivo"
          disabled={!hasLoadedFile || disabled}
          dti={DTI(DTI_LIST.FORM.CLEAR_FORM)}
          onClick={handleRemove}
        >
          <Icon
            className="hidden md:block"
            iconComponent={<IoTrashBin />}
            title="Borrar"
          />
          <p className="md:hidden">BORRAR ARCHIVO</p>
        </Button>
      </div>
    </fieldset>
  );
};

export default FileInput;
