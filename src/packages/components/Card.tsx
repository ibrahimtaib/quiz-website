import { useMemo } from 'react';
import defaultStyle from 'styles/card.module.css';
import { CardProps } from 'types/card';

const Card = ({ className, children, colorScheme }: CardProps) => {
  const style = useMemo(() => {
    return {
      backgroundColor: colorScheme?.primaryColor,
      color: colorScheme?.quaternaryColor
    };
  }, [colorScheme]);
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
