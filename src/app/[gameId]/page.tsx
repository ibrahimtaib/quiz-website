'use client';
import LobbyCards from 'components/LobbyCards';
import LobbyColorPicker from 'components/LobbyColorPicker';
import { useState } from 'react';
import style from 'styles/lobby.module.css';
import { COLORS, ColorScheme } from 'types/colors';
export default function Page({ params }: { params: { gameId: string } }) {
  // const { game, player } = await getProps(gameId);
  const [userColor, setUserColor] = useState<ColorScheme>(COLORS.RED);
  console.log('LOBBY', userColor);
  return (
    <div className={style.lobby}>
      <LobbyCards userColor={userColor} />
      <LobbyColorPicker
        userColor={userColor}
        setUserColor={setUserColor}
        takenColors={[
          COLORS.GREEN,
          COLORS.PURPLE,
          COLORS.RED,
          COLORS.BLUE,
          userColor
        ]}
      />
    </div>
  );
}
// export const getProps = async (gameId: string) => {
//   // const game = await gameApi.getGame(gameId);
//   // const token = cookies().get(TOKEN_COOKIE_NAME)?.value;

//   const player: Player = game.players[0];
//   console.log('player', player);
//   return {
//     player,
//     game
//   };
// };
