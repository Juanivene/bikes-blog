'use client';

import useZodForm from '@/hooks/useZodForm';

import DateInput from '../ui/forms/DateInput';
import SelectInput from '../ui/forms/SelectInput';
import TextInput from '../ui/forms/TextInput';

import { ExampleSchema, exampleSchema } from '@/forms/schemas/exampleSchema';

import { DTI, DTI_LIST } from '@/dti/dti';

import { BasicList } from '@/interface/globalTypes';

const exampleList: BasicList[] = [
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

  // eslint-disable-next-line no-console
  const handleSubmit = (data: ExampleSchema) => console.log(data);

  return (
    <form onSubmit={onSubmitMiddleware(handleSubmit)}>
      <TextInput
        control={control}
        name="resolution"
        label="Nro Acordada"
        placeholder="Ingrese un número"
        required
        dti={DTI(DTI_LIST.FORM.RESOLUTION)}
      />
      <SelectInput
        control={control}
        name="type"
        label="Tipo Acordada"
        options={exampleList}
        required
        saveId
        dti={DTI(DTI_LIST.FORM.TYPE)}
      />
      <DateInput
        control={control}
        name="fromDate"
        label="Fecha desde"
        required
        dti={DTI(DTI_LIST.FORM.FROM_DATE)}
      />
      <button type="submit" className="btn btn-primary mt-2">
        Enviar
      </button>
    </form>
  );
};
export default FormExample;
