import InputController from './InputController';
import { SelectProps } from '@/components/ui/interface';

import { cn } from '@/helpers/cn';

import { FormSchemas } from '@/forms';

const SelectInput = <T extends FormSchemas>(props: SelectProps<T>) => {
  const {
    control,
    name,
    label,
    saveId = false,
    options = [],
    className = '',
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
          <select
            {...field}
            className={`input input-bordered w-full ${error && 'border-red'}`}
            id={name as string}
            name={name as string}
            data-testid={dti}
            placeholder="Seleccione una opción"
            disabled={options.length === 0}
            {...rest}
          >
            <option value="" disabled>
              Seleccione una opción
            </option>
            {options.map((option) => (
              <option
                value={saveId ? option.id : option.description}
                key={option.id}
              >
                {option.description}
              </option>
            ))}
          </select>
        )}
      />
    </fieldset>
  );
};
export default SelectInput;
