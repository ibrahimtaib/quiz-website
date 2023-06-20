'use client';
import LobbyCards from 'components/LobbyCards';
import LobbyColorPicker from 'components/LobbyColorPicker';
import style from 'styles/lobby.module.css';
import { Player } from 'types/api';
import { COLORS } from 'types/colors';
import gameApi from 'utils/api/game';
import { getColor } from 'utils/misc';
async function Lobby({ params }: { params: { gameId: string } }) {
  const { gameId } = params;
  const { game, player } = await getProps(gameId);
  if (!player) {
    throw new Error('Unauthorized');
  }
  return (
    <div className={style.lobby}>
      <LobbyCards userColor={getColor(player.color)} />
      <LobbyColorPicker
        player={player}
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
