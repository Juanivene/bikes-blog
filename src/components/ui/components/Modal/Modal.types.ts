export type ModalProps = {
  modalId: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  footerChildren?: React.ReactNode;
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
} & (
  | {
      submitButton: true;
      submitButtonText?: string;
      loading?: boolean;
    }
  | {
      submitButton?: never;
      submitButtonText?: never;
      loading?: never;
    }
);
