import { Button } from '../ui';

import { DTI, DTI_LIST } from '@/dti';

import { TitleProps } from '../interface/common';

const Title = (props: TitleProps): React.ReactElement => {
  const { title, subtitle, showBackButton } = props;

  return (
    <>
      <section className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
          {subtitle && <h2>{subtitle}</h2>}
        </div>
        {showBackButton && (
          <Button
            className="hidden sm:block"
            colorLight="btn-neutral"
            dti={DTI(DTI_LIST.ACTIONS.BACK)}
            textColorLight="text-white"
          >
            Volver a inicio
          </Button>
        )}
      </section>
      <div className="divider my-2" />
      {showBackButton && (
        <Button
          className="w-full sm:hidden"
          colorLight="btn-neutral"
          dti={DTI(DTI_LIST.ACTIONS.BACK)}
          textColorLight="text-white"
        >
          Volver a inicio
        </Button>
      )}
    </>
  );
};
export default Title;
