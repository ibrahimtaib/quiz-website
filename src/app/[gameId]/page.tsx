'use client';
import Card from 'components/Card';
import style from 'styles/ingame.module.css';
import { ColorScheme, FALSE, TRUE } from 'types/colors';

/* questions page */
function Page() {
  const white: ColorScheme = {
    primaryColor: '#ffffff',
    name: '',
    secondaryColor: '',
    tertiaryColor: '',
    quaternaryColor: ''
  };
  return (
    <div className={style.container}>
      <Card
        className={style.question}
        colorScheme={white}
        horizontal={true}
      ></Card>
      <div className={style.answers}>
        <Card colorScheme={TRUE} className={style.answer}></Card>
        <Card colorScheme={FALSE} className={style.answer}></Card>
      </div>
    </div>
  );
}

export default Page;
