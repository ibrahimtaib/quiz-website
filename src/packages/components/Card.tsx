import { useMemo } from 'react';
import defaultStyle from 'styles/card.module.css';
import { CardProps } from 'types/card';

const Card = ({ className, children, colorScheme, horizontal }: CardProps) => {
  const style = useMemo(() => {
    return {
      backgroundColor: colorScheme?.primaryColor,
      color: colorScheme?.quaternaryColor,
      aspectRatio: horizontal ? 'var(--aspect-ratio-horizontal)' : undefined,
      borderRadius: horizontal ? 'var(--border-radius-horizontal)' : undefined
    };
  }, [colorScheme, horizontal]);
  return (
    <div
      className={[defaultStyle.card, className ? className : '']
        .join(' ')
        .trim()}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
