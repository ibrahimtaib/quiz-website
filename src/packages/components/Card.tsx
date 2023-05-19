import defaultStyle from 'styles/card.module.css';
import { CardProps } from 'types/card';

const Card = ({ style, children }: CardProps) => {
  return (
    <div className={defaultStyle.card} style={style}>
      {children}
    </div>
  );
};

export default Card;
