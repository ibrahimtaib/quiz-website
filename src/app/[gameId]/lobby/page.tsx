'use client';
import Card from 'components/Card';
import ColorChoice from 'components/ColorChoice';
import style from 'styles/lobby.module.css';
import { ColorScheme } from 'types/colors';
function Lobby() {
  const colorScheme: ColorScheme = {
    primaryColor: 'red',
    secondaryColor: '',
    tertiaryColor: '',
    quaternaryColor: ''
  };
  return (
    <div className={style.lobby}>
      <div className={style.cardContainer}>
        <Card className={[style.card, style.card1].join(' ')} />
        <Card className={[style.card, style.card2].join(' ')} />
        <Card className={[style.card, style.card3].join(' ')} />
        <Card className={[style.card, style.card4].join(' ')} />
        <Card className={[style.card, style.card5].join(' ')} />
      </div>
      <button className={style.colorButton} />
      <ColorChoice colorScheme={colorScheme} />
    </div>
  );
}

export default Lobby;
