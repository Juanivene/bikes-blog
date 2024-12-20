'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import './MultipleFilePicker.styles.css';
import { IoDocumentAttach, IoRemoveOutline } from 'react-icons/io5';
import { toast } from 'sonner';

import { cn } from '@/utilities';

import { DTI, DTI_LIST } from '@/dti';

import type { MultipleFilePickerProps } from './MultipleFilePicker.types';

const hasFiles = ({
  dataTransfer: { types = [] },
}: React.DragEvent<HTMLDivElement>): boolean => types.includes('Files');

const MultipleFilePicker = (
  props: MultipleFilePickerProps
): React.ReactElement => {
  const {
    className = '',
    disabled = false,
    files,
    maxFiles,
    maxSize,
    setFiles,
  } = props;

  const overlayRef = useRef<HTMLDivElement>(null);
  const emptyRef = useRef<HTMLLIElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [disabledState, setDisabledState] = useState(disabled);

  useEffect(() => {
    setDisabledState(disabled);
  }, [disabled]);

  const addFile = (file: File): void => {
    if (emptyRef.current) emptyRef.current.classList.add('hidden');

    // Check filename & size
    if (files.some((f) => f.name === file.name && f.size === file.size)) {
      toast.error(`El archivo ${file.name} ya está en la lista`);
      return;
    }

    // Check amount of files
    if (files.length > maxFiles) {
      toast.error(`No puedes subir más de ${maxFiles} archivos`);
      return;
    }

    // Check file size
    if (file.size > maxSize) {
      toast.error(
        `El archivo ${file.name} excede el tamaño máximo permitido (${
          maxSize / 1000000
        } MB)`
      );
      return;
    }

    // Everything ok
    setFiles((prev) => [...prev, file]);
  };

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    if (disabledState) return;

    if (!hasFiles(event)) {
      return;
    }
    if (overlayRef.current) overlayRef.current.classList.add('draggedover');
  };

  //   const handleDragLeave = () => {
  //     if (overlayRef.current) overlayRef.current.classList.remove('draggedover');
  //   };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>): void => {
    if (disabledState) return;

    if (hasFiles(event)) {
      event.preventDefault();
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    if (disabledState) return;

    addFile(event.dataTransfer.files[0]);
    if (overlayRef.current) overlayRef.current.classList.remove('draggedover');
  };

  const handleButtonClick = (): void => {
    if (disabledState) return;
    if (inputRef.current) inputRef.current.click();
  };

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (disabledState) return;
    if (event.target.files && event.target.files.length > 0) {
      addFile(event.target.files[0]);
    }
  };

  const handleRemove = (name: string): void => {
    if (disabledState) return;
    if (files.length === 1 && emptyRef.current)
      emptyRef.current.classList.remove('hidden');
    setFiles((prev) => prev.filter((file) => file.name !== name));
  };

  return (
    <section className={cn('my-3', className)}>
      <article
        className="relative flex h-full flex-col"
        onDragEnter={handleDragEnter}
        // onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {/* <!-- overlay --> */}
        <div
          className="pointer-events-none absolute left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center rounded-md"
          id="overlay"
          ref={overlayRef}
        >
          <i>
            <svg
              className="mb-3 h-12 w-12 fill-current text-blue-700"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479-1.092l4 4h-3v4h-2v-4h-3l4-4z" />
            </svg>
          </i>
          <p className="text-lg text-blue-700">Arrastre archivos para subir</p>
        </div>

        {/* <!-- main content --> */}
        <section className="flex h-full w-full flex-col overflow-hidden">
          <header className="flex flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-400 py-12">
            <p className="mb-3 flex flex-wrap justify-center px-2 font-semibold text-gray-900 dark:text-gray-400">
              <span>
                {disabledState
                  ? 'Subida de archivos no disponible'
                  : 'Arrastre y suelte sus '}
              </span>
              {!disabledState && <span>&nbsp;archivos para subir ó</span>}
            </p>
            <input
              multiple
              className="hidden"
              disabled={disabledState}
              id="hidden-input"
              ref={inputRef}
              type="file"
              onChange={handleFileUpload}
            />
            <Button
              className="mt-2 dark:border-gray-400 dark:hover:border-gray-300"
              disabled={disabledState}
              dti={DTI(DTI_LIST.BUTTON('upload-file'))}
              onClick={handleButtonClick}
            >
              {disabledState ? 'No habilitado' : 'Subir un archivo'}
            </Button>
          </header>

          <h3 className="mt-5 pb-3 font-semibold sm:text-lg ">
            Archivos para subir
          </h3>

          <ul className="flex flex-col gap-3">
            <li
              className="flex h-full w-full flex-col items-center justify-center text-center"
              ref={emptyRef}
            >
              <Image
                alt="no data"
                height={50}
                src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                width={50}
              />

              <span className="text-small mt-2 text-gray-500">
                No hay archivos seleccionados
              </span>
            </li>
            {files.map((file) => (
              <li className="flex items-center gap-2" key={file.name}>
                <div className="flex-2 relative m-1 flex h-20 w-20 min-w-20 items-center justify-center overflow-hidden rounded-md border-2 border-gray-200 dark:border-gray-400">
                  <Icon
                    iconComponent={<IoDocumentAttach size="2em" />}
                    title="Archivo"
                  />
                  <Button
                    unstyled
                    className="tooltip tooltip-right absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full border-none bg-red-500"
                    data-tip="Borrar"
                    dti={DTI(DTI_LIST.BUTTON('delete-file'))}
                    onClick={() => {
                      handleRemove(file.name);
                    }}
                  >
                    <Icon
                      className="text-white"
                      iconComponent={<IoRemoveOutline />}
                      title="Borrar"
                    />
                  </Button>
                </div>
                <p className="text-sm">{file.name}</p>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </section>
  );
};
export default MultipleFilePicker;
