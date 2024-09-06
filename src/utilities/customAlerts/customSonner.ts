import { toast } from 'sonner';

interface ToastButtonConfig {
  text?: string;
  onClick?: () => void;
}

interface ToastOptions {
  action?: {
    label: string;
    onClick: () => void;
  };
  description?: string;
  duration: number;
}

interface CustomToastArgs {
  message: string;
  description?: string;
  type?: 'success' | 'error' | 'info' | 'warning' | 'loading';
  duration?: number;
  actionButton?: ToastButtonConfig;
  closeButton?: boolean;
}

interface BaseToastProps extends CustomToastArgs {}

/**
 * **Displays a custom toast notification using Sonner.**
 *
 * @param {CustomToastArgs} args - The configuration options for the toast notification.
 * @param {string} args.message - The main message for the toast.
 * @param {string} [args.description] - Optional description for the toast.
 * @param {'success' | 'error' | 'info' | 'warning' | 'loading'} [args.type='info'] - Type of the toast (affects styling).
 * @param {number} [args.duration=4000] - How long the toast will be visible, in milliseconds.
 * @param {ToastButtonConfig} [args.actionButton] - Optional configuration for an action button (not applicable for 'loading' type).
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

  switch (type) {
    case 'success':
      toast.success(message, {
        ...baseOptions,
        action,
        closeButton,
      });
      break;
    case 'error':
      toast.error(message, {
        ...baseOptions,
        action,
        closeButton,
      });
      break;
    case 'info':
      toast.info(message, {
        ...baseOptions,
        action,
        closeButton,
      });
      break;
    case 'warning':
      toast.warning(message, {
        ...baseOptions,
        action,
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
        closeButton,
      });
      break;
  }
};

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
    closeButton,
  }: BaseToastProps) => {
    customToast({
      message,
      description,
      type,
      duration,
      actionButton,
      closeButton,
    });
    return null;
  };

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
 * });
 */
export const ErrorToast = createToastComponent('error');
