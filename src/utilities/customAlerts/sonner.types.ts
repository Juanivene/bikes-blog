interface ToastButtonConfig {
  text?: string;
  onClick?: () => void;
}
export interface ToastOptions {
  action?: {
    label: string;
    onClick: () => void;
  };
  cancel?: {
    label: string;
    onClick: () => void;
  };
  closeButton?: boolean;
  description?: string;
  duration: number;
}

export interface CustomToastArgs {
  message: string;
  description?: string;
  type?: 'success' | 'error' | 'info' | 'warning' | 'loading';
  duration?: number;
  actionButton?: ToastButtonConfig;
  cancelButton?: ToastButtonConfig;
  closeButton?: boolean;
}

export interface PromiseToastArgs<T = unknown> {
  promise: Promise<T>;
  loadingMessage: string;
  successMessage: (data: T) => string;
  errorMessage: string;
  duration?: number;
  successDescription?: string;
  errorDescription?: string;
  closeButton?: boolean;
  cancelButton?: ToastButtonConfig;
}

export interface BaseToastProps extends CustomToastArgs {}
