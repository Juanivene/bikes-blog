import Swal, {
  type SweetAlertOptions,
  type SweetAlertResult,
} from 'sweetalert2';

import { CustomSwalArgs } from './interface';

/**
 * Displays a custom SweetAlert2 modal with configurable options.
 *
 * @param {CustomSwalArgs} args - The configuration options for the SweetAlert2 modal.
 * @returns {Promise<SweetAlertResult>} The result of the SweetAlert2 modal.
 *
 * @example
 * const result = await customSwal({
 *   title: 'Custom Title',
 *   text: 'Custom Text',
 * });
 * if (result.isConfirmed) {
 *   console.log('Confirmed');
 * }
 */
const customSwal = async (args: CustomSwalArgs) => {
  const theme = localStorage.getItem('theme');

  const colorConfig =
    theme === 'dark'
      ? {
          background: '#686868',
          color: '#fafafa',
        }
      : {};

  return Swal.fire({
    confirmButtonColor: '#5c7aea',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    customClass: {
      confirmButton: 'swal2-button',
      cancelButton: 'swal2-button',
    },

    ...args,
    ...colorConfig,
  });
};

/**
 * Displays a custom SweetAlert2 toast notification.
 *
 * @param {SweetAlertOptions} args - The configuration options for the SweetAlert2 toast notification.
 * @returns {Promise<SweetAlertResult<unknown>>} The result of the SweetAlert2 toast notification.
 *
 * @example
 * const result = await customToast({
 *   icon: 'success',
 *   title: 'Operation Successful',
 * });
 */
const customToast = async (
  args: SweetAlertOptions
): Promise<SweetAlertResult<unknown>> => {
  let color;

  switch (args.icon) {
    case 'error':
      color = '#f3d7d7';
      break;
    case 'warning':
      color = '#ece2d1';
      break;
    case 'success':
      color = '#daeeda';
      break;
    default:
      color = '#fff';
      break;
  }

  const swal = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: args.timer || 3000,
    timerProgressBar: true,
    background: color,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  return swal.fire({ ...args });
};

/**
 * Displays an error toast notification.
 *
 * @param {string} text - The text to display in the error toast.
 * @param {number} [time=3000] - The duration in milliseconds the toast should be visible.
 * @returns {Promise<SweetAlertResult<unknown>>} The result of the SweetAlert2 toast notification.
 *
 * @example
 * const result = await ErrorToast('An error occurred');
 */
const ErrorToast = (text: string, time = 3000) => {
  return customToast({
    icon: 'error',
    title: text,
    timer: time,
  });
};

const SuccessToast = (text: string, time = 3000) => {
  return customToast({
    icon: 'success',
    title: text,
    timer: time,
  });
};

export { customSwal, customToast, ErrorToast, SuccessToast };
