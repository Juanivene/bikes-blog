'use client';

import { useState } from 'react';

import Grid from '../Grid/Grid';
import Icon from '../Icon/Icon';
import IconButton from '../IconButton/IconButton';
import {
  MdCheckCircleOutline,
  MdClose,
  MdInfoOutline,
  MdOutlineErrorOutline,
  MdOutlineHighlightOff,
} from 'react-icons/md';

import { usePortrait } from '@/hooks';

import { cn, removeLineBreaks } from '@/utilities';

import { DTI, DTI_LIST } from '@/dti';

import type { AlertPropsType } from './Alert.types';

/**
 * A custom Alert component.
 *
 * @param props - The props for the Alert component.
 * @param className - Additional class names to apply to the alert.
 * @param closable - Render the close icon
 * @param hideIcon - Hide the SVG icon
 * @param title - Alert's title
 * @param type - Alert type to switch the color and icon
 * @returns React.ReactElement A custom combo box element.
 */

const Alert = (props: AlertPropsType): React.ReactElement => {
  const {
    children,
    className,
    closable = false,
    hideIcon = false,
    type = 'info',
  } = props;

  const [open, setOpen] = useState(true);
  const isPortrait = usePortrait('sm');

  // Functions
  const handleClose = (): void => {
    setOpen(false);
  };

  const textWidth = (): 10 | 11 | 12 => {
    if ((closable && !hideIcon) || (isPortrait && !hideIcon)) return 10;
    if (closable || !hideIcon) return 11;

    return 12;
  };

  return (
    <Grid
      container
      className={cn(
        removeLineBreaks`
        ${type === 'error' ? 'bg-red-200 dark:bg-red-800' : ''}
        ${type === 'info' ? 'bg-sky-200 dark:bg-sky-800' : ''}
        ${type === 'success' ? 'bg-green-200 dark:bg-green-800' : ''}
        ${type === 'warning' ? 'bg-orange-200 dark:bg-yellow-800' : ''}
        ${type === 'loading' ? 'bg-gray-100 dark:bg-gray-800' : ''}
        ${!open ? 'hidden' : ''}
        rounded-xl px-2 
        py-3
        dark:text-white
        md:pr-3`,
        className
      )}
      data-testid={DTI(DTI_LIST.DIV('alert'))}
      gap={0}
    >
      {!hideIcon && (
        <Grid
          item
          className="flex md:mr-1"
          justifyContent="center"
          sm={1}
          xs={2}
        >
          {type === 'error' && (
            <Icon
              iconComponent={<MdOutlineHighlightOff />}
              size="1.5em"
              title="Error"
            />
          )}
          {type === 'info' && (
            <Icon iconComponent={<MdInfoOutline />} size="1.5em" title="Info" />
          )}
          {type === 'success' && (
            <Icon
              iconComponent={<MdCheckCircleOutline />}
              size="1.5em"
              title="Success"
            />
          )}
          {type === 'warning' && (
            <Icon
              iconComponent={<MdOutlineErrorOutline />}
              size="1.5em"
              title="Warning"
            />
          )}
          {type === 'loading' && <span className="loading loading-spinner" />}
        </Grid>
      )}
      <Grid item xs={textWidth()}>
        {children}
      </Grid>
      {!!closable && (
        <Grid
          item
          alignItems="start"
          className="m-0 hidden py-0 sm:flex"
          justifyContent="end"
          xs={1}
        >
          <IconButton
            unbordered
            className="tooltip-left p-0"
            dti={DTI(DTI_LIST.BUTTON('close'))}
            iconComponent={<MdClose />}
            label="Cerrar"
            onClick={handleClose}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default Alert;
