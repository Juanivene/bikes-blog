'use client';

import Button from '../Button/Button';

import { cn } from '@/utilities';

import { DTI, DTI_LIST } from '@/dti';

import type { ModalProps } from './Modal.types';

const Modal = (props: ModalProps): React.ReactElement | null => {
  const {
    modalId,
    title,
    children,
    className,
    submitButton = false,
    submitButtonText = 'Guardar',
    loading = false,
    footerChildren,
    opened,
    setOpened,
  } = props;

  const handleClose = (): void => {
    setOpened(false);
  };

  return (
    <dialog
      className={`modal modal-bottom md:modal-middle ${
        opened ? 'modal-open' : ''
      }`}
      id={modalId}
    >
      <div className="modal-box overflow-y-hidden border border-b-0 border-l-0 border-r-0 border-t bg-white dark:border-gray-500 dark:bg-gray-800 md:max-w-[48rem] md:border-b-[1px] md:border-l-[1px] md:border-r-[1px] lg:ml-[272px]">
        <h3 className="pb-3 text-lg font-bold">{title}</h3>
        <section
          className={cn('max-h-[400px] overflow-y-auto pt-4', className)}
        >
          {children}
        </section>
        <div className="modal-action">
          {footerChildren}
          <button
            className="btn"
            disabled={loading}
            type="button"
            onClick={handleClose}
          >
            Cerrar
          </button>
          {!!submitButton && (
            <Button
              lowerCase
              colorLight="btn-primary"
              dti={DTI(DTI_LIST.FORM.SUBMIT)}
              loading={loading}
              textColorLight="text-white"
              type="submit"
            >
              {submitButtonText}
            </Button>
          )}
        </div>
      </div>
    </dialog>
  );
};
export default Modal;
