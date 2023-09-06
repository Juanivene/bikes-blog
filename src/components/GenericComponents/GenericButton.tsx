import { GenericButtonType } from './interface';

/**
 * A reusable generic button in the DaisyUI style.
 * @param {GenericButtonType} props - Properties for the generic button.
 * @param {boolean} [activeButton=false] (Optional) - Specifies whether the button should have active style.
 * @param {string} [color='btn-primary'] (Optional) - Sets the color of the button using predefined classes like 'bg-green-500' or 'btn-primary'.
 * @param {string} [className=''] (Optional) - Additional CSS classes to apply to the button.
 * @param {string} [children] - Content to display within the button.
 * @param {boolean} [disabled=false] (Optional) - Specifies whether the button is disabled.
 * @param {React.ComponentType<React.SVGProps<SVGSVGElement>>} [endIcon] - The icon component to display after the text.
 * @param {React.CSSProperties} [endIconStyles] - Styles for the end icon.
 * @param {boolean} [glass=false] (Optional) - Specifies whether the button should have a glass effect.
 * @param {string} [name] (Optional) - The name attribute of the button.
 * @param {React.MouseEventHandler<HTMLButtonElement>} [onClick] (Optional) - Event handler for the button's click event.
 * @param {boolean} [outlineButton=false] (Optional) - Specifies whether the button should have an outline style.
 * @param {string} [size='btn-md'] (Optional) - Specifies the text size of the button using predefined classes like 'text-xs' or 'text-lg', or a custom size using 'text-[18px]'.
 * @param {string} [sizeText=''] (Optional) - Additional classes for customizing the text size of the button.
 * @param {React.ComponentType<React.SVGProps<SVGSVGElement>>} [startIcon] - The icon component to display before the text.
 * @param {React.CSSProperties} [startIconStyles] - Styles for the icon.
 * @param {number} [tabIndex=0] - Specifies the tab index of the button for keyboard navigation.
 * @param {string} [textColor=''] (Optional) - Specifies the text color of the button 'text-rose-600' or 'text-black'.
 * @param {'button' | 'reset' | 'submit'} [type='button'] - Specifies the type of the button.
 * @param {string} [value] (Optional) - The value attribute of the button.
 * @param {boolean} [withoutAnimation=false] (Optional) - Specifies whether to disable click animation.
 * @returns {JSX.Element} A stylized button element.
 * @throws Will throw an error if both `activeButton` and `outlineButton` are enabled simultaneously.
 */

const GenericButton = (props: GenericButtonType) => {
  const {
    activeButton = false,
    className = '',
    children,
    color = 'btn-primary',
    disabled = false,
    endIcon: EndIcon,
    endIconStyles = {},
    glass = false,
    name,
    onClick,
    outlineButton = false,
    size = 'btn-md',
    sizeText = '',
    startIcon: StartIcon,
    startIconStyles = {},
    tabIndex = 0,
    textColor = '',
    type = 'button',
    value,
    withoutAnimation = false,
  } = props;

  if (activeButton && outlineButton) {
    // eslint-disable-next-line no-console
    console.warn(
      'Both activeButton and outlineButton are enabled. Use either one, not both.'
    );
  }

  return (
    <button
      aria-disabled={!!disabled}
      className={`btn 
        ${activeButton ? 'btn-active' : ''}
        ${className} 
        ${color ?? ''} 
        ${glass ? 'glass' : ''}
        ${outlineButton ? 'btn-outline' : ''} 
        ${size}
        ${sizeText ?? ''}
        ${textColor ?? ''} 
        ${withoutAnimation ? 'no-animation' : ''}`}
      disabled={disabled}
      name={name}
      onClick={onClick}
      tabIndex={tabIndex}
      // eslint-disable-next-line react/button-has-type
      type={type}
      value={value}
    >
      {StartIcon && (
        <span className="mr-2">
          <StartIcon className="h-6 w-6" style={startIconStyles} />
        </span>
      )}

      {children || 'GENERIC BUTTON'}

      {EndIcon && (
        <span className="ml-2">
          <EndIcon className="h-6 w-6" style={endIconStyles} />
        </span>
      )}
    </button>
  );
};

export default GenericButton;
