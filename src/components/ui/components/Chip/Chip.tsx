'use client';

import { useState } from 'react';

import './Chip.styles.css';
import { MdClose } from 'react-icons/md';

import { cn, removeLineBreaks } from '@/utilities';

import { DTI, DTI_LIST } from '@/dti';

import type { ChipPropsType } from './Chip.types';

/**
 * Chips are compact elements that represent an input, attribute, or action.
 * @param props - The component props.
 * @param className - Additional class names to apply to the icon container.
 * @param colorDark - The color of the button in dark mode. You can provide a DaisyUI color class to be applied in dark mode. Example: 'btn-info'.
 * @param colorLight - The color of the button in light mode. You can provide a DaisyUI color class to be applied in light mode. Example: 'btn-ghost'.
 * @param deletable - Will display a delete icon which changes appearance on hover.
 * @param dti - Data Test ID for testing purposes.
 * @param onDelete - Event handler for the button's delete event.
 * @param size - Controlling the font size of the element.
 * @returns React.ReactElement The rendered Icon component.
 *
 * ```
 * @example
 *
 * - Standalone usage:
 * <Chip>Some text</Chip>
 *
 * @example
 *
 * - Colored Chip:
 * <Chip colorDark='dark:bg-slate-700' colorLight='bg-slate-600'>Some text</Chip>
 *
 * @example
 * - Deletable Chip:
 * <Chip deletable onDelete={handleDelete}>Some text</Chip>
 * ```
 */

const Chip = (props: ChipPropsType): React.ReactElement => {
  const {
    children,
    className,
    colorDark = '',
    colorLight = '',
    deletable = false,
    dti,
    onDelete,
    size,
  } = props;

  const [visible, setVisible] = useState(true);

  const handleDelete = (): void => {
    setVisible(false);
    if (onDelete) onDelete();
  };

  return (
    <div
      className={cn(
        removeLineBreaks`
      ${colorLight} 
      ${colorDark}
      ${size && size === 'small' ? 'text-xs' : ''}
      ${size && size === 'medium' ? 'text-sm' : ''}
      ${!visible ? 'hidden' : ''}
      chip-animated
      bordered
      tooltip
      rounded-full
      px-1`,
        className
      )}
      data-testid={dti}
    >
      {children}
      {deletable ? (
        <button
          className="chip-animated rounded-full bg-slate-600 hover:bg-slate-500 dark:bg-slate-700"
          data-testid={DTI(DTI_LIST.BUTTON('close'))}
          style={{ marginLeft: '5px', marginTop: '5px' }}
          type="button"
          onClick={handleDelete}
        >
          <MdClose />
        </button>
      ) : null}
    </div>
  );
};

export default Chip;
