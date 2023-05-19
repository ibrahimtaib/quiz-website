import defaultStyle from 'styles/card.module.css';
import { CardProps } from 'types/card';

const Card = ({ className, children }: CardProps) => {
  return (
    <div className={[defaultStyle.card, className ? className : ''].join(' ')}>
      {children}
    </div>
  );
};

export default Card;
