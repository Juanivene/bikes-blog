import Link from 'next/link';

import PATHS from '@/constants/paths';

const ErrorPage = (): React.ReactElement => (
  <section className="flex justify-center text-center">
    <div className="content-card w-fit">
      <h2 className="text-3xl font-bold">¡Ocurrió un error!</h2>
      <div className="divider my-1" />
      <p className="mb-3">
        Lo sentimos, ocurrió un error cargando esta página. Por favor, utilice
        el botón debajo para reintentar.
      </p>
      <div className="flex justify-center">
        <Link
          className="btn btn-primary w-[200px] text-white"
          href={PATHS.HOME}
        >
          Volver a inicio
        </Link>
      </div>
    </div>
  </section>
);

export default ErrorPage;
