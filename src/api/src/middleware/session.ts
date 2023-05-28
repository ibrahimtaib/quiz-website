import { NextFunction } from 'express';
import prisma from '../prisma';

export const verifySessionId = async (
  req: any,
  res: any,
  next: NextFunction
) => {
  const { sessionId } = req.params;
  const value = parseInt(sessionId);
  if (isNaN(value) || value < 0) {
    return res.status(400).json({ error: 'Invalid session ID' });
  }

  const session = await prisma.session.findUnique({
    where: {
      id: value
    }
  });

  if (!session) {
    return res.status(404).json({ error: 'Session not found' });
  }
  next();
};
