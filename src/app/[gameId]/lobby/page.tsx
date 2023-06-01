'use client';
import Loading from 'app/loading';
import LobbyCards from 'components/LobbyCards';
import LobbyColorPicker from 'components/LobbyColorPicker';
import { useEffect, useState } from 'react';
import style from 'styles/lobby.module.css';
import { Game } from 'types/api';
import { COLORS, ColorScheme } from 'types/colors';
import gameApi from 'utils/api/game';
async function Lobby({ params }: { params: { gameId: string } }) {
  const [userColor, setUserColor] = useState<ColorScheme>(COLORS.PURPLE);
  const { gameId } = params;
  const [game, setGame] = useState<Game | null>(null);
  useEffect(() => {
    let isCancelled = false;
    const fetchGame = async () => {
      const game: Game = await gameApi.getGame(gameId);
      if (!isCancelled) {
        setGame(game);
      }
    };
    fetchGame();
    return () => {
      isCancelled = true;
    };
  }, [gameId]);
  if (!game) {
    return <Loading />;
  }
  console.log('how many times do i pass here?');
  if (!game) {
    throw new Error('Game not found');
  }

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
