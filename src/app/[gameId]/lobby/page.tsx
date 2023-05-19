'use client';
import Card from 'components/Card';
import LobbyColorPicker from 'components/LobbyColorPicker';
import style from 'styles/lobby.module.css';
function Lobby() {
  return (
    <div className={style.lobby}>
      <div className={style.cardContainer}>
        <Card className={[style.card, style.card1].join(' ')} />
        <Card className={[style.card, style.card2].join(' ')} />
        <Card className={[style.card, style.card3].join(' ')} />
        <Card className={[style.card, style.card4].join(' ')} />
        <Card className={[style.card, style.card5].join(' ')} />
      </div>
      <LobbyColorPicker />
    </div>
  );
}

export default Lobby;
