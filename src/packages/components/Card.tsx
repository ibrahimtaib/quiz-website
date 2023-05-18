import style from 'styles/card.module.css';
import { CardProps } from 'types/card';

const Card = ({ children }: CardProps) => {
  return <div className={style.card}>{children}</div>;
};

export default Card;
