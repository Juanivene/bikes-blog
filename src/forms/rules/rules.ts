import dayjs, { Dayjs } from 'dayjs';
import { z } from 'zod';

// ----------------------------------------------------
// HELPERS
// ----------------------------------------------------

const optionalWrapper = (
  required: boolean,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rule: z.ZodType<any, any>
) => {
  if (!required) {
    return z.optional(rule);
  }
  return rule;
};

// ----------------------------------------------------
// COMMON RULES
// ----------------------------------------------------

export const resolutionRules = (required = false) =>
  optionalWrapper(
    required,
    z
      .string()
      .max(25, {
        message: 'El número de acordada debe tener como máximo 25 caracteres',
      })
      .refine(
        // Min length is 3 when it does have content (cannot use .min() because it's initially empty)
        (data) => {
          return !data || data.length >= 3;
        },
        {
          message: 'El número de acordada debe tener al menos 3 caracteres',
        }
      )
      .default('')
  );

export const dateRules = (name = '', required = false) =>
  optionalWrapper(
    required,
    z
      .instanceof(dayjs as unknown as typeof Dayjs)
      .nullable()
      .default(null)
      .refine(
        // If it has a value, it must be a valid date
        (data) => {
          if (!data) return true;
          return data.isValid();
        },
        {
          message: `La fecha ${name} no es válida`,
        }
      )
  );

export const typeRules = (required = false) =>
  optionalWrapper(required, z.string().nullable().default(null));

// ----------------------------------------------------
// COMMON REFINES
// ----------------------------------------------------

// At least one field must have value
export const notEmptyForm = (data: object) => {
  return Object.values(data).some(Boolean);
};

notEmptyForm.msg = () => ({
  message: 'Por lo menos un campo debe tener valores',
});

// If fromDate and toDate have values, fromDate must be before or equal to toDate
export const fromDateBeforeToDate = (data: {
  fromDate: Dayjs | null;
  toDate: Dayjs | null;
}) => {
  if (!data.fromDate || !data.toDate) return true;
  if (data.fromDate.isSame(data.toDate)) return true;
  return data.fromDate.isBefore(data.toDate);
};

fromDateBeforeToDate.msg = () => ({
  message: 'La fecha desde debe ser menor a la fecha hasta',
});

// If fromDate has value, toDate must have value too
export const fromDateAndToDate = (
  data: {
    fromDate: Dayjs | null;
    toDate: Dayjs | null;
  },
  field: 'toDate' | 'fromDate'
) => {
  const otherField = field === 'toDate' ? 'fromDate' : 'toDate';

  if (!data[field]) return true;
  return data[field] && !!data[otherField];
};

fromDateAndToDate.msg = (field: 'toDate' | 'fromDate') => ({
  message: `Para buscar por fecha ${
    field === 'toDate' ? 'hasta' : 'desde'
  }, debe ingresar también una fecha ${field === 'toDate' ? 'desde' : 'hasta'}`,
  path: [field],
});
