'use client';

import { useEffect } from 'react';

const ErrorScreen = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}): JSX.Element => {
  useEffect(() => {
    // Log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <section className="flex justify-center text-center">
      <div className="content-card w-fit">
        <h2 className="text-3xl font-bold">¡Ocurrió un error!</h2>
        <div className="divider my-1" />
        <p className="mb-3">
          Lo sentimos, ocurrió un error cargando esta página. Por favor, utilice
          el botón debajo para reintentar.
        </p>
        <div className="flex justify-center">
          <button
            className="btn btn-primary w-[200px] text-white"
            type="button"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            REINTENTAR
          </button>
        </div>
      </div>
    </section>
  );
};

export default ErrorScreen;
