'use client';

// import { useState } from 'react';
// import { Dayjs } from 'dayjs';
// import es from 'dayjs/locale/es-mx';
// import { DatePicker } from 'react-dayjs-picker';
import 'react-dayjs-picker/dist/index.css';

import InputController from './InputController';
import { InputProps } from '@/components/ui/interface';

import { cn } from '@/helpers/cn';

import { FormSchemas } from '@/forms';

/**
 * **IN PROGRESS**
 *
 * Please, don't use this component yet.
 * @param props
 * @deprecated (Temporal)
 */
const DateInput = <T extends FormSchemas>(props: InputProps<T>) => {
  const { control, name, label, className = '', dti, ...rest } = props;

  // const [open, setOpen] = useState<boolean>(false);

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
          // <DatePicker
          //   {...field}
          //   // date={field.value as Dayjs}
          //   isOpen={open}
          //   inputClassName="input input-bordered w-full"
          //   setIsOpen={setOpen}
          //   // locale={es}
          //   className={`input input-bordered w-full ${error && 'border-red'}`}
          //   id={name as string}
          //   type="text"
          //   data-testid={dti}
          //   {...rest}
          // />
          // ! ONLY FOR COMPILATION - CHANGE THIS ASAP
          <div {...field} className={`${error && 'border-red'}`} {...rest} />
        )}
      />
    </fieldset>
  );
};
export default DateInput;
