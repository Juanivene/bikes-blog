import { Controller, Path, PathValue } from 'react-hook-form';

import { ControllerProps } from '../interface';

import { FormSchemas } from '@/forms';

/**
 * React Hook Form's Controller that simplifies typing issues by
 * encapsulating the Controller component, types, and its props
 */

const InputController = <T extends FormSchemas>(props: ControllerProps<T>) => {
  const { name, control, defaultValue, render } = props;

  return (
    <Controller
      name={name as unknown as Path<T>}
      control={control}
      defaultValue={defaultValue as PathValue<T, Path<T>>}
      render={render}
    />
  );
};
export default InputController;
