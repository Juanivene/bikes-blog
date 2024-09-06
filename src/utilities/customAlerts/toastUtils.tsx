import { ReactNode } from 'react';

import { toast } from 'sonner';

import {
  CustomToastArgs,
  PromiseToastArgs,
  ToastOptions,
} from './sonner.types';

/**
 * **Displays a custom toast notification using Sonner.**
 *
 * @param {CustomToastArgs} args - The configuration options for the toast notification.
 * @param {string} args.message - The main message for the toast.
 * @param {string} [args.description] - Optional description for the toast.
 * @param {'success' | 'error' | 'info' | 'warning' | 'loading'} [args.type='info'] - Type of the toast (affects styling).
 * @param {number} [args.duration=4000] - How long the toast will be visible, in milliseconds.
 * @param {ToastButtonConfig} [args.actionButton] - Optional configuration for an action button (not applicable for 'loading' type).
 * @param {ToastButtonConfig} [args.cancelButton] - Optional configuration for a cancel button.
 * @param {boolean} [args.closeButton=true] - Whether to show a close button.
 * @returns {void} - The function does not return anything.
 *
 * @example
 * // Success toast example
 * customToast({
 *   message: 'Operation successful!',
 *   type: 'success',
 *   duration: 5000,
 * });
 *
 * @example
 * // Error toast example with action button
 * customToast({
 *   message: 'Something went wrong!',
 *   type: 'error',
 *   actionButton: { text: 'Retry', onClick: () => retryOperation() },
 * });
 *
 * @example
 * // Loading toast example (no action button)
 * customToast({
 *   message: 'Loading data...',
 *   type: 'loading',
 * });
 */
export const customToast = (args: CustomToastArgs): void => {
  const {
    actionButton,
    cancelButton,
    closeButton = true,
    duration,
    description = '',
    message,
    type = 'info',
  } = args;

  const baseOptions: ToastOptions = {
    description,
    duration: duration || 4000,
  };

  const action =
    type !== 'loading' && actionButton
      ? {
          label: actionButton.text || 'OK',
          onClick: actionButton.onClick || (() => {}),
        }
      : undefined;

  const cancel = cancelButton
    ? {
        label: cancelButton.text || 'Cancel',
        onClick: cancelButton.onClick || (() => {}),
      }
    : undefined;

  switch (type) {
    case 'success':
      toast.success(message, {
        ...baseOptions,
        action,
        cancel,
        closeButton,
      });
      break;
    case 'error':
      toast.error(message, {
        ...baseOptions,
        action,
        cancel,
        closeButton,
      });
      break;
    case 'info':
      toast.info(message, {
        ...baseOptions,
        action,
        cancel,
        closeButton,
      });
      break;
    case 'warning':
      toast.warning(message, {
        ...baseOptions,
        action,
        cancel,
        closeButton,
      });
      break;
    case 'loading':
      toast.loading(message, {
        ...baseOptions,
        closeButton,
      });
      break;
    default:
      toast(message, {
        ...baseOptions,
        action,
        cancel,
        closeButton,
      });
      break;
  }
};

/**
 * **Displays a toast notification based on the state of a promise.**
 *
 * This function allows you to display loading, success, and error notifications while a promise is pending, resolved, or rejected.
 *
 * @template T
 * @param {PromiseToastArgs<T>} args - The arguments to configure the promise-based toast.
 * @param {Promise<T>} args.promise - The promise to monitor.
 * @param {string} args.loadingMessage - The message shown while the promise is loading.
 * @param {Function} args.successMessage - The message shown if the promise resolves successfully.
 * @param {string} args.errorMessage - The message shown if the promise is rejected.
 * @param {number} [args.duration=4000] - How long the success/error toast will be visible in milliseconds.
 * @param {string} [args.successDescription] - Optional description to show in the success toast.
 * @param {string} [args.errorDescription] - Optional description to show in the error toast.
 * @param {boolean} [args.closeButton=true] - Whether to show a close button on the success/error toast.
 * @param {ToastButtonConfig} [args.cancelButton] - Optional configuration for a cancel button.
 * @returns {void} - The function does not return anything.
 *
 * @example
 * // Basic usage with a successful promise
 * const fetchData = () => {
 *   const mockPromise = new Promise((resolve) => {
 *     setTimeout(() => resolve('Fetched data successfully!'), 2000);
 *   });
 *
 *   promiseToast({
 *     promise: mockPromise,
 *     loadingMessage: 'Fetching data...',
 *     successMessage: (data) => `Success: ${data}`,
 *     errorMessage: 'Failed to fetch data',
 *   });
 * };
 *
 * @example
 * // Handling a rejected promise
 * const fetchDataWithError = () => {
 *   const mockPromise = new Promise((_, reject) => {
 *     setTimeout(() => reject('Error fetching data'), 2000);
 *   });
 *
 *   promiseToast({
 *     promise: mockPromise,
 *     loadingMessage: 'Fetching data...',
 *     successMessage: (data) => `Success: ${data}`,
 *     errorMessage: 'Failed to fetch data',
 *   });
 * };
 *
 * @example
 * // Adding custom descriptions for success and error
 * const fetchDataWithCustomDescriptions = () => {
 *   const mockPromise = new Promise((resolve, reject) => {
 *     const success = Math.random() > 0.5;
 *     setTimeout(() => {
 *       if (success) resolve('Data fetched successfully!');
 *       else reject('Failed to fetch data');
 *     }, 2000);
 *   });
 *
 *   promiseToast({
 *     promise: mockPromise,
 *     loadingMessage: 'Fetching data...',
 *     successMessage: (data) => `Success: ${data}`,
 *     errorMessage: 'Error occurred during data fetching',
 *     successDescription: 'The data was fetched without any issues.',
 *     errorDescription: 'An unexpected error happened during data fetching.',
 *   });
 * };
 *
 * @example
 * // Adjusting the toast duration and removing the close button
 * const longRunningTask = () => {
 *   const mockPromise = new Promise((resolve) => {
 *     setTimeout(() => resolve('Task completed!'), 5000);
 *   });
 *
 *   promiseToast({
 *     promise: mockPromise,
 *     loadingMessage: 'Performing a long task...',
 *     successMessage: (data) => `Success: ${data}`,
 *     errorMessage: 'Task failed',
 *     duration: 6000,  // The toast will stay for 6 seconds
 *     closeButton: false, // The close button will not appear
 *   });
 * };
 */
export function promiseToast<T>({
  promise,
  loadingMessage,
  successMessage,
  errorMessage,
  duration = 4000,
  successDescription = '',
  errorDescription = '',
  closeButton = true,
  cancelButton,
}: PromiseToastArgs<T>): void {
  toast.promise(promise, {
    loading: loadingMessage,
    success: (data: T): ReactNode => (
      <div>
        <div>{successMessage(data)}</div>
        {successDescription && <div>{successDescription}</div>}
      </div>
    ),
    error: (): ReactNode => (
      <div>
        <div>{errorMessage}</div>
        {errorDescription && <div>{errorDescription}</div>}
      </div>
    ),
    duration,
    closeButton,
    cancel: cancelButton
      ? {
          label: cancelButton.text || 'Cancelar',
          onClick: cancelButton.onClick || (() => {}),
        }
      : undefined,
  });
}
