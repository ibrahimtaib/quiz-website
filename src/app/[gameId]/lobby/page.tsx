'use client';
import LobbyCards from 'components/LobbyCards';
import LobbyColorPicker from 'components/LobbyColorPicker';
import { useState } from 'react';
import style from 'styles/lobby.module.css';
import { COLORS, ColorScheme } from 'types/colors';
function Lobby() {
  const [userColor, setUserColor] = useState<ColorScheme>(COLORS.YELLOW);

  return (
    <div className={style.lobby}>
      <LobbyCards userColor={userColor} />
      <LobbyColorPicker
        userColor={userColor}
        setUserColor={setUserColor}
        takenColors={[COLORS.GREEN, COLORS.PURPLE, COLORS.RED, COLORS.BLUE]}
      />
    </div>
  );
}

export default Lobby;
