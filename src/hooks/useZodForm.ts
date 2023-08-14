import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm as useFormRHF } from 'react-hook-form';
import { toast } from 'sonner';
import { z, ZodSchema } from 'zod';

const useZodForm = <T extends ZodSchema>(validationSchema: T) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useFormRHF<z.infer<typeof validationSchema>>({
    resolver: zodResolver(validationSchema),
  });

  useEffect(() => {
    Object.values(errors).forEach((error) => {
      toast.error(error?.message?.toString() || 'Revise los campos');
    });
  }, [errors]);

  return {
    onSubmitMiddleware: handleSubmit,
    control,

    // Optional usage - Discouraged
    errors,
  };
};

export default useZodForm;
