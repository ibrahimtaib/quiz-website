'use client';
import Card from 'components/Card';
import LobbyColorPicker from 'components/LobbyColorPicker';
import { useState } from 'react';
import style from 'styles/lobby.module.css';
import { COLORS, ColorScheme } from 'types/colors';
function Lobby() {
  const [userColor, setUserColor] = useState<ColorScheme>(COLORS.YELLOW);
  return (
    <div className={style.lobby}>
      <div className={style.cardContainer}>
        <Card className={[style.card, style.card1].join(' ')} />
        <Card className={[style.card, style.card2].join(' ')} />
        <Card className={[style.card, style.card3].join(' ')} />
        <Card className={[style.card, style.card4].join(' ')} />
        <Card
          className={[style.card, style.card5].join(' ')}
          colorScheme={userColor}
        />
      </div>
      <LobbyColorPicker
        userColor={userColor}
        setUserColor={setUserColor}
        takenColors={[COLORS.GREEN, COLORS.PURPLE, COLORS.RED, COLORS.BLUE]}
      />
    </div>
  );
}

export default Lobby;
