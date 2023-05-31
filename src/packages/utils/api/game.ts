import { Game, NewSession } from 'types/api';
import api from './api';

const gameApi = {
  getGame: async (id: string): Promise<Game> => {
    const { data } = await api.get(`/games/${id}`);
    return data.game;
  },
  createGame: async (
    username: string,
    color: string,
    newSession: NewSession
  ): Promise<Game> => {
    const { data } = await api.post(`/games`, { username, color, newSession });
    return data.game;
  }
};
export type CreateGameProps = {
  username: string;
  color: string;
  newSession: NewSession;
};
export default gameApi;
