'use client';

import { Combobox, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';

import Icon from '../Icon/Icon';
import type { FieldValues } from 'react-hook-form';
import { MdCheck, MdExpandMore } from 'react-icons/md';

import { cn } from '@/utilities';

import type { ComboBoxProps } from '../ComboBox/ComboBox.types';
import type { ListOption } from '@/interface/globalTypes';

/**
 * A custom combo box component that provides autocompletion functionality.
 *
 * @param props - The props for the ComboBox component.
 * @param className - Additional CSS class to apply to the component.
 * @param disabled - Specifies whether the combobox is disabled.
 * @param error - Specifies whether the combobox has an error.
 * @param msgError - Error message to display if no options are available.
 * @param options - Array of options for the combo box.
 * @param positionedColorOption - Background and text color for positioned option.
 * @param selectedColorOption - Background color for selected option.
 * @param sizing - Dimensions for the combo box.
 +
 * @returns React.ReactElement A custom combo box element.
 */

const MultipleComboBox = <T extends FieldValues>(
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

  const [query, setQuery] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<ListOption[]>([]);

  const filteredOptions =
    query === ''
      ? options
      : options.filter(({ description }) =>
          description.toLowerCase().includes(query.toLowerCase())
        );

  const positionedColor = positionedColorOption
    ? `${positionedColorOption.bgColor} ${positionedColorOption.textColor}`
    : 'bg-sky-600 text-white';

  const handleSelect = (selected: ListOption[] | null): void => {
    if (selected !== null && selected.length > 0) {
      setSelectedOptions(selected);
    } else {
      setSelectedOptions([]);
    }
    controller.onChange(selected);
  };

  useEffect(() => {
    if (JSON.stringify(controller.value) !== JSON.stringify(selectedOptions)) {
      const newValue =
        controller.value && controller.value.length > 0
          ? filteredOptions.filter(({ id: optionId }) =>
              // TODO: revisar y resolver
              // eslint-disable-next-line @typescript-eslint/no-unsafe-call
              controller.value.some(
                ({ id: valueId }: { id: string }) => valueId === optionId
              )
            )
          : [];
      handleSelect(newValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- causes an infinite loop
  }, [controller.value]);

  return (
    <div className={className}>
      <Combobox
        multiple
        aria-describedby="error-message"
        aria-label="Seleccione una opción"
        disabled={disabled || options.length === 0}
        ref={controller.ref}
        value={selectedOptions}
        onChange={handleSelect}
      >
        <div className={`relative mt-1 ${sizing?.width ? sizing.width : ''}`}>
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
              displayValue={(values: ListOption[]) =>
                values.map((value) => value.description).join(', ')
              }
              id={name}
              placeholder={placeholder || 'Seleccione una opción...'}
              onChange={(event) => {
                setQuery(event.target.value);
              }}
            />

            <Combobox.Button
              aria-label="Expandir/comprimir opciones"
              className={`absolute inset-y-0 right-0 flex items-center border border-l-0 bg-gray-100 p-3 hover:bg-gray-200 disabled:border-none dark:bg-slate-700 hover:dark:bg-slate-800 disabled:dark:bg-transparent disabled:hover:dark:bg-transparent ${error ? 'border-error' : 'border-gray-300 dark:border-gray-600'}`}
            >
              <Icon iconComponent={<MdExpandMore />} title="expand more icon" />
            </Combobox.Button>
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
              {filteredOptions.length === 0 && !query ? (
                <div
                  aria-atomic="true"
                  aria-live="assertive"
                  className="relative cursor-default select-none px-4 py-2 text-gray-700"
                  id="error-message"
                >
                  {msgError || 'No hay opciones disponibles.'}
                </div>
              ) : (
                filteredOptions.map((option) => (
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
                              active
                                ? 'text-rose-500'
                                : 'text-teal-600 dark:text-green-300'
                            }`}
                          >
                            <Icon
                              className="w-5` h-5"
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

export default MultipleComboBox;
