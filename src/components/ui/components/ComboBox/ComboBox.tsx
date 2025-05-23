'use client';

import { Combobox, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import type { FieldValues } from 'react-hook-form';
import { MdCheck, MdClear, MdExpandMore } from 'react-icons/md';

import { cn } from '@/utilities';

import { DTI, DTI_LIST } from '@/dti';

import type { ComboBoxProps } from './ComboBox.types';
import type { ListOption } from '@/interface/globalTypes';

/**
 * A custom combo box component that provides autocompletion functionality.
 *
 * @param props - The props for the ComboBox component.
 * @param className - Additional CSS class to apply to the component.
 * @param disabled - Specifies whether the combobox is disabled.
 * @param dti - Data Test ID for testing purposes.
 * @param error - Specifies whether the combobox has an error.
 * @param inputClassName - Additional CSS class to apply to the input.
 * @param msgError - Error message to display if no options are available.
 * @param name - Name of the combo box.
 * @param options - Array of options for the combo box (id, description).
 * @param placeholder - Placeholder text for the combo box
 * @param positionedColorOption - Background and text color for positioned option.
 * @param selectedColorOption - Background color for selected option.
 * @param sizing - Dimensions for the combo box.
 * @param controller - React Hook Form controller (sends onChange fn).
 *
 * @returns React.ReactElement A custom combo box element.
 */

const ComboBox = <T extends FieldValues>(
  props: ComboBoxProps<T>
): React.ReactElement => {
  const {
    className,
    disabled = false,
    dti,
    error = false,
    inputClassName,
    msgError,
    name,
    options,
    placeholder,
    positionedColorOption,
    selectedColorOption,
    sizing,
    controller,
  } = props;

  const [isOptionSelected, setIsOptionSelected] = useState(false); // Track if an option is selected
  const [query, setQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState<ListOption | null>(null);

  const filteredOption =
    query === ''
      ? options
      : options.filter(({ description }) =>
          description.toLowerCase().includes(query.toLowerCase())
        );

  const positionedColor = positionedColorOption
    ? `${positionedColorOption.bgColor} ${positionedColorOption.textColor}`
    : 'bg-sky-600 text-white';

  const handleClearSelection = (): void => {
    setSelectedOption(null);
    setIsOptionSelected(false);
    controller.onChange(null);
  };

  const handleSelect = (selected: ListOption | null): void => {
    setSelectedOption(selected);
    setIsOptionSelected(selected !== null);
    controller.onChange(selected);
  };

  const checkQueryAndUpdate = (): void => {
    if (query !== '') {
      const selected = options.find(({ description }) =>
        description.toLowerCase().includes(query.toLowerCase())
      );
      if (selected) {
        handleSelect(selected);
      }
    }
  };

  useEffect(() => {
    if (JSON.stringify(controller.value) !== JSON.stringify(selectedOption)) {
      handleSelect(controller.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- causes an infinite loop
  }, [controller.value]);

  return (
    <div className={className}>
      <Combobox
        aria-describedby="error-message"
        aria-label="Seleccione una opción"
        disabled={disabled || options.length === 0}
        ref={controller.ref}
        value={selectedOption}
        onChange={handleSelect}
      >
        <div className={`relative mt-1 ${sizing?.width ?? ''}`}>
          <div
            aria-label="Combo Box"
            className="relative grid w-full cursor-default overflow-hidden rounded-lg bg-gray-100 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 dark:bg-slate-700 sm:text-sm"
          >
            <Combobox.Input
              aria-label="Ingrese su selección"
              className={cn(
                `input input-bordered w-full bg-transparent pr-[45px] focus:outline-none ${
                  sizing?.height ? sizing.height : ''
                } ${error ? 'border-error' : ''}`,
                inputClassName
              )}
              data-testid={dti}
              displayValue={(option: ListOption | null) =>
                option?.description || ''
              }
              id={name}
              placeholder={placeholder || 'Seleccione una opción...'}
              onBlur={checkQueryAndUpdate}
              onChange={(event) => {
                setQuery(event.target.value);
              }}
            />

            {isOptionSelected ? (
              <Button
                ariaHidden
                unstyled
                aria-label="Borrar selección"
                className="absolute inset-y-[1px] right-[1px] flex h-auto items-center bg-gray-100 px-3 hover:bg-gray-200 disabled:bg-transparent disabled:text-gray-400 disabled:hover:bg-transparent dark:bg-transparent hover:dark:bg-slate-800 disabled:dark:bg-transparent disabled:hover:dark:bg-transparent"
                disabled={disabled}
                dti={DTI(DTI_LIST.BUTTON('clear-cmb'))}
                type="button"
                onClick={handleClearSelection}
              >
                <Icon iconComponent={<MdClear />} title="clear icon" />
              </Button>
            ) : (
              <Combobox.Button
                aria-label="Expandir/comprimir opciones"
                className="absolute inset-y-[1px] right-[1px] flex items-center bg-gray-100 p-3 hover:bg-gray-200 disabled:bg-transparent dark:bg-slate-700 dark:bg-transparent hover:dark:bg-slate-800 disabled:hover:dark:bg-transparent"
              >
                <Icon
                  iconComponent={<MdExpandMore />}
                  title="expand more icon"
                />
              </Combobox.Button>
            )}
          </div>
          <Transition
            afterLeave={() => {
              setQuery('');
            }}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options className="absolute z-40 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-500 dark:*:text-white sm:text-sm">
              {filteredOption.length === 0 && !query ? (
                <div
                  aria-atomic="true"
                  aria-live="assertive"
                  className="relative cursor-default select-none px-4 py-2 text-gray-700"
                  id="error-message"
                >
                  {msgError || 'No hay opciones disponibles.'}
                </div>
              ) : (
                filteredOption.map((option) => (
                  <Combobox.Option
                    aria-label="Opciones disponibles"
                    className={({ active, selected }) =>
                      `relative cursor-pointer select-none py-3 pl-10 pr-4 ${
                        active ? `${positionedColor}` : 'text-gray-900'
                      } ${selected ? `${selectedColorOption}` : ''}`
                    }
                    key={option.id}
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {option.description}
                        </span>
                        {!!selected && (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-rose-500' : 'text-teal-600'
                            }`}
                          >
                            <Icon
                              className="h-5 w-5"
                              iconComponent={<MdCheck />}
                              title="icon-check"
                            />
                          </span>
                        )}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default ComboBox;
