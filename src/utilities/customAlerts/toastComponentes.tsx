import { customToast } from './toastUtils';

import { BaseToastProps } from './sonner.types';

/**
 * **Creates a toast of a specific type.**
 *
 * This higher-order function generates a toast notification for a specific type ('success', 'error', 'info', 'warning', or 'loading'),
 * using the `customToast` utility. It allows you to simplify the toast creation process by binding the type of toast.
 *
 * @param {'success' | 'error' | 'info' | 'warning' | 'loading'} type - The type of toast to be displayed.
 * @returns {Function} - A function that takes the toast arguments and displays a toast of the specified type.
 *
 *  */
const createToastComponent =
  (type: 'success' | 'error' | 'info' | 'warning' | 'loading') =>
  ({
    message,
    description,
    duration,
    actionButton,
    cancelButton,
    closeButton,
  }: BaseToastProps) => {
    customToast({
      message,
      description,
      type,
      duration,
      actionButton,
      cancelButton,
      closeButton,
    });
    return null;
  };

/**
 * **Displays an error toast notification.**
 *
 * An error toast is used to indicate that an operation failed, or something went wrong.
 *
 * @example
 * // Basic error toast
 * ErrorToast({
 *   message: 'Error occurred!',
 *   description: 'Something went wrong while processing your request.',
 * });
 *
 * @example
 * // Error toast with retry action
 * ErrorToast({
 *   message: 'Failed to save data!',
 *   description: 'There was an issue saving your changes.',
 *   actionButton: { text: 'Retry', onClick: () => retrySave() },
 *   cancelButton: { text: 'Cancel', onClick: () => cancelOperation() }
 * });
 */
export const ErrorToast = createToastComponent('error');

/**
 * **Displays an informational toast notification.**
 *
 * An info toast is used to provide neutral information or status updates to the user.
 *
 * @example
 * // Basic info toast
 * InfoToast({
 *   message: 'New update available!',
 *   description: 'Version 2.0.1 is now available for download.',
 * });
 *
 * @example
 * // Info toast with close button disabled
 * InfoToast({
 *   message: 'Informational notice',
 *   description: 'You have unread notifications.',
 *   closeButton: false,
 * });
 */
export const InfoToast = createToastComponent('info');

/**
 * **Displays a loading toast notification.**
 *
 * A loading toast is used to indicate that a process or operation is ongoing, typically without an action button.
 *
 * @example
 * // Basic loading toast
 * LoadingToast({
 *   message: 'Loading data...',
 * });
 *
 * @example
 * // Loading toast with description
 * LoadingToast({
 *   message: 'Processing...',
 *   description: 'Please wait while we process your request.',
 * });
 */
export const LoadingToast = createToastComponent('loading');

/**
 * **Displays a success toast notification.**
 *
 * A success toast indicates a positive outcome, typically used when an operation completes successfully.
 *
 * @example
 * // Basic success toast
 * SuccessToast({
 *   message: 'Operation successful!',
 *   description: 'The action completed without issues.',
 *   duration: 3000,
 * });
 *
 * @example
 * // Success toast with longer duration
 * SuccessToast({
 *   message: 'Data saved!',
 *   description: 'Your changes have been successfully saved.',
 *   duration: 5000,
 * });
 */
export const SuccessToast = createToastComponent('success');

/**
 * **Displays a warning toast notification.**
 *
 * A warning toast alerts the user to potential issues that may not be errors but need attention.
 *
 * @example
 * // Basic warning toast
 * WarningToast({
 *   message: 'Low disk space!',
 *   description: 'Your disk space is running low. Please free up some space.',
 * });
 *
 * @example
 * // Warning toast with retry action
 * WarningToast({
 *   message: 'You have unsaved changes!',
 *   description: 'Do you want to save before exiting?',
 *   actionButton: { text: 'Save', onClick: () => saveChanges() },
 *   cancelButton: { text: 'Discard', onClick: () => discardChanges() }
 * });
 */
export const WarningToast = createToastComponent('warning');
