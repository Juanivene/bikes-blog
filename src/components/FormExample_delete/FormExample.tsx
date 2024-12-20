'use client';

// import Button from '../ui/Button';
import { useZodForm } from '@/hooks';

// import DateInput from '../ui/forms/DateInput';
// import SelectInput from '../ui/forms/SelectInput';
// import TextInput from '../ui/forms/TextInput';
import {
  type ExampleSchema,
  exampleSchema,
} from '@/forms/schemas/exampleSchema';

// import { DTI, DTI_LIST } from '@/dti';
// import { ListOption } from '@/interface/globalTypes';

// const exampleList: ListOption[] = [
//   {
//     id: '1',
//     description: 'Acordada 1',
//   },
//   {
//     id: '2',
//     description: 'Acordada 2',
//   },
// ];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const FormExample = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onSubmitMiddleware, control } = useZodForm(exampleSchema);

  // eslint-disable-next-line no-console, @typescript-eslint/explicit-function-return-type
  const handleSubmit = (data: ExampleSchema) => console.log(data); // TODO: revisar tipos

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
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
