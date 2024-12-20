'use client';

import { useState } from 'react';

import { cn, removeLineBreaks } from '@/utilities';

import { DTI, DTI_LIST } from '@/dti';

import type { RadioButtonProps } from './RadioButton.types';

const RadioButton = (props: RadioButtonProps): React.ReactElement => {
  const {
    ariaLabel,
    className = '',
    colorDark = '',
    colorLight = '',
    defaultChecked = false,
    dti = '',
    disabled = false,
    label = '',
    textColorDark = '',
    textColorLight = '',
  } = props;

  const [checked, setChecked] = useState(defaultChecked);

  return (
    <div className="flex w-full gap-2">
      <input
        aria-label={ariaLabel}
        checked={checked}
        className={cn(
          removeLineBreaks`
          ${colorLight} 
          ${colorDark} 
          ${textColorLight} 
          ${textColorDark ? `dark:${textColorDark}` : ''}`,
          className
        )}
        data-testid={DTI(DTI_LIST.FORM.RADIO(dti))}
        disabled={disabled}
        id={`${dti}-switch`}
        type="radio"
        onClick={() => {
          setChecked(!checked);
        }}
      />

      <label
        className="inline-block pl-[0.15rem] hover:cursor-pointer"
        htmlFor={`${dti}-switch`}
      >
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
