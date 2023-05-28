import { COLORS, ColorScheme } from '../../../packages/types/colors';
import prisma from '../prisma';
const gameController: any = {
  createGame: async (req: any, res: any) => {
    const { username, color }: { username: string; color: string } = req.body;
    const colorNames: String[] = Object.values<ColorScheme>(COLORS).map(
      (c: ColorScheme) => c.name.toLowerCase()
    );
    if (!colorNames.includes(color.toLowerCase())) {
      res.status(400).json({
        error: `Invalid color. Please choose from: ${colorNames.join(', ')}`
      });
      return;
    }
    try {
      const myGame = await prisma.game.create({
        data: {
          players: {
            create: {
              username: username,
              color: color
            }
          },
          sessions: {
            create: {
              questions: {}
            }
          }
        },
        include: {
          players: true,
          sessions: true
        }
      });

      res.status(200).json(myGame);
    } catch (error) {
      res.status(500).json({
        error:
          'Could not create a game. Please contact an administrator if the error persists'
      });
    }
  },

  getGame: async (req: any, res: any) => {
    const { gameId } = req.params;
    try {
      const game = await prisma.game.findUnique({
        where: {
          id: +gameId
        },
        include: {
          players: true,
          sessions: true
        }
      });
      if (!game) {
        res.status(404).json({
          error: 'Game not found'
        });
        return;
      }
      res.status(200).json(game);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error:
          'Could not get game. Please contact an administrator if the error persists'
      });
    }
  }
};

export default gameController;