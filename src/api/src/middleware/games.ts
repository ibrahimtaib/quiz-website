import { NextFunction } from 'express';
import prisma from '../prisma';

export const verifyGameId = async (req: any, res: any, next: NextFunction) => {
  const { gameId } = req.params;
  const value = parseInt(gameId);
  if (isNaN(value) || value < 0) {
    return res.status(400).json({ error: 'Invalid game ID' });
  }

  const game = await prisma.game.findUnique({
    where: {
      id: value
    }
  });

  if (!game) {
    return res.status(404).json({ error: 'Game not found' });
  }
  next();
};
