import { Game } from '../../../packages/types/api';
import prisma from '../prisma';
const gameController: any = {
  createGame: async (req: any, res: any) => {
    const game: Game = req.body;

    const myGame = await prisma.game.create({
      data: {
        players: {},
        sessions: {
          create: {
            questions: {}
          },
          orderBy: {
            id: 'asc'
          }
        }
      },
      include: {
        players: true,
        sessions: true
      }
    });

    res.json(myGame);
  }
};

export default gameController;
