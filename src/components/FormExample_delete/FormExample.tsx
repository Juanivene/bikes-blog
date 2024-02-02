'use client';

import { useEffect, useState } from 'react';

// import Button from '../ui/Button';
import { useZodForm } from '@/hooks';

// import DateInput from '../ui/forms/DateInput';
// import SelectInput from '../ui/forms/SelectInput';
// import TextInput from '../ui/forms/TextInput';
import { ExampleSchema, exampleSchema } from '@/forms/schemas/exampleSchema';

import { DTI, DTI_LIST } from '@/dti';

import { ListOption } from '@/interface/globalTypes';

const exampleList: ListOption[] = [
  {
    id: '1',
    description: 'Acordada 1',
  },
  {
    id: '2',
    description: 'Acordada 2',
  },
];

const FormExample = () => {
  const { onSubmitMiddleware, control } = useZodForm(exampleSchema);

  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  // eslint-disable-next-line no-console
  const handleSubmit = (data: ExampleSchema) => console.log(data);

  // ------------------------------------------------
  // USEEFFECT
  // ------------------------------------------------

  useEffect(() => {
    setButtonDisabled(false);
  }, []);

  return (
    <form onSubmit={onSubmitMiddleware(handleSubmit)}>
      {/* <TextInput
        control={control}
        dti={DTI(DTI_LIST.FORM.RESOLUTION)}
        label="Nro Acordada"
        name="resolution"
        placeholder="Ingrese un número"
      />
      <SelectInput
        control={control}
        dti={DTI(DTI_LIST.FORM.TYPE)}
        label="Tipo Acordada"
        name="type"
        options={exampleList}
        saveId
      />
      <DateInput
        control={control}
        dti={DTI(DTI_LIST.FORM.DATE)}
        label="Fecha"
        name="date"
        placeholder="DD/MM/AAAA"
      />
      <Button
        disabled={buttonDisabled}
        className="mt-2"
        colorDark="btn-ghost"
        colorLight="btn-primary"
        dti={DTI(DTI_LIST.BUTTON('enviar'))}
        type="submit"
      >
        Enviar
      </Button> */}
    </form>
  );
};
export default FormExample;
