import { cn, removeLineBreaks } from '@/utilities';

import type { CardPropsType } from './Card.types';

/**
 * Cards are surfaces that display content and actions on a single topic.
 * @param props - The component props.
 * @param className - Additional class names to apply to the Card component.
 * @param img - Card using an image to reinforce the content.
 * @param outlined - To render an outlined card.
 * @returns React.ReactElement The rendered Card component.
 *
 * ```
 * @example
 *
 * - Standalone usage:
 * <Card>Some content</Card>
 * ```
 */

const Card = (props: CardPropsType): React.ReactElement => {
  const { children, className = '', img = false, outlined = false } = props;

  return (
    <div
      className={cn(
        removeLineBreaks`
          ${!img ? 'p-4' : ''}
          ${outlined ? 'border-2 border-solid border-gray-400' : ''}
          w-full 
          overflow-hidden 
          rounded
          text-justify
          shadow-lg`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
