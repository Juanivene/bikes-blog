// export interface DaisyUIType {}

export type GenericButtonType =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * @deprecated Use either activeButton or outlineButton, not both.
     */
    activeButton?: boolean;
    color?:
      | 'btn-neutral'
      | 'btn-primary'
      | 'btn-secondary'
      | 'btn-accent'
      | 'btn-ghost'
      | 'btn-link'
      | 'btn-info'
      | 'btn-success'
      | 'btn-warning'
      | 'btn-error'
      | `bg-${string}-${number}`;
    endIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    endIconStyles?: React.CSSProperties;
    glass?: boolean;
    name?: string;
    /**
     * @deprecated Use either activeButton or outlineButton, not both.
     */
    outlineButton?: boolean;
    size?: 'btn-xs' | 'btn-sm' | 'btn-md' | 'btn-lg';
    sizeText?:
      | 'text-xs'
      | 'text-sm'
      | 'text-base'
      | 'text-lg'
      | 'text-xl'
      | 'text-2xl'
      | 'text-3xl'
      | 'text-4xl'
      | 'text-5xl'
      | 'text-6xl'
      | 'text-7xl'
      | 'text-8xl'
      | `text-[${number}px]`;
    startIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    startIconStyles?: React.CSSProperties;
    textColor?:
      | 'text-inherit'
      | 'text-current'
      | 'text-transparent'
      | 'text-black'
      | 'text-white'
      | `text-${string}-${number}`;
    type?: 'button' | 'reset' | 'submit';
    withoutAnimation?: boolean;
  } & (
      | {
          activeButton?: true;
          outlineButton?: never;
        }
      | {
          activeButton?: never;
          outlineButton?: true;
        }
    );
