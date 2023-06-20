'use client';
import LobbyCards from 'components/LobbyCards';
import LobbyColorPicker from 'components/LobbyColorPicker';
import { useState } from 'react';
import style from 'styles/lobby.module.css';
import { Player } from 'types/api';
import { COLORS, ColorScheme } from 'types/colors';
import gameApi from 'utils/api/game';
async function Lobby({ params }: { params: { gameId: string } }) {
  const { gameId } = params;
  // const { game, player } = await getProps(gameId);
  const [userColor, setUserColor] = useState<ColorScheme>(COLORS.RED);

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
export const getProps = async (gameId: string) => {
  const game = await gameApi.getGame(gameId);
  // const token = cookies().get(TOKEN_COOKIE_NAME)?.value;

  const player: Player = game.players[0];
  console.log('player', player);
  return {
    player,
    game
  };
};

export default Lobby;
