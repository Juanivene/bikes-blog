import InputController from './InputController';
import { InputProps } from '@/components/ui/interface';

import { cn } from '@/helpers/cn';

import { FormSchemas } from '@/forms';

const DateInput = <T extends FormSchemas>(props: InputProps<T>) => {
  const { control, name, label, className = '', dti, ...rest } = props;

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
            {...field}
            className={`input input-bordered w-full ${error && 'border-red'}`}
            id={name as string}
            name={name as string}
            type="text"
            data-testid={dti}
            {...rest}
          />
        )}
      />
    </fieldset>
  );
};
export default DateInput;
