'use client';

import { Controller, type Path, type PathValue } from 'react-hook-form';

import type { FormSchemas } from '@/forms';

import type { ControllerProps } from './InputController.types';

/**
 * React Hook Form's Controller that simplifies typing issues by
 * encapsulating the Controller component, types, and its props
 */

const InputController = <T extends FormSchemas>(
  props: ControllerProps<T>
): React.ReactElement => {
  const { name, control, defaultValue, render } = props;

  return (
    <Controller
      control={control}
      defaultValue={defaultValue as PathValue<T, Path<T>>}
      name={name as unknown as Path<T>}
      render={render}
    />
  );
};
export default InputController;
