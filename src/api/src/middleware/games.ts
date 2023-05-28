import { NextFunction } from 'express';

export const verifyGameId = async (req: any, res: any, next: NextFunction) => {
  const { gameId } = req.params;
  const value = parseInt(gameId);
  if (isNaN(value) || value < 0) {
    return res.status(400).json({ error: 'Invalid game ID' });
  }
  next();
};
