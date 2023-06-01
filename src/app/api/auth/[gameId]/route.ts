import dotenv from 'dotenv';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
import { GameStatus } from 'types/api';
import prisma from 'utils/prisma';
dotenv.config();
interface MyJwtPayload extends JwtPayload {
  playerId: number;
  // Add more custom fields as needed
}
export async function POST(
  request: NextRequest,
  { params }: { params: { gameId: string } }
) {
  const gameId = params.gameId;
  const token = request.headers.get('token');
  if (isNaN(parseInt(gameId)) || parseInt(gameId) < 0) {
    return NextResponse.json(
      { message: 'Game Id must be a positive integer' },
      { status: 400 }
    );
  }

  try {
    const game = await prisma.game.findUnique({
      where: {
        id: +gameId
      },
      include: {
        players: true
      }
    });

    if (!game) {
      return NextResponse.json({ message: 'Game not found' }, { status: 404 });
    }
    if (game.status === GameStatus.LOBBY) {
      return NextResponse.json(
        { message: 'Authentification not needed' },
        {
          status: 200
        }
      );
    }
    // if player is inside players
    if (token) {
      const secret: Secret = process.env?.JWT_SECRET!;
      if (!secret) {
        throw new Error('JWT_SECRET not found in .env');
      }
      try {
        const decodedToken = jwt.verify(token, secret) as MyJwtPayload;
        const player = await prisma.player.findUnique({
          where: {
            id: decodedToken.playerId
          }
        });
        if (!player || player.gameId !== game.id) {
          return NextResponse.json(
            { message: 'Unauthorized' },
            { status: 401 }
          );
        }
        return NextResponse.json(
          { message: 'Authentification succeeded' },
          { status: 200 }
        );
      } catch (error) {
        // token invalid
        return NextResponse.json(
          { message: 'Unauthorized, token is invalid' },
          {
            status: 401
          }
        );
      }
    }
    console.error('this the stuff');
    console.error('this the stuff');
    console.error('this the stuff');
    console.error('this the stuff');
    console.error('this the stuff');
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message:
          'Could not get game. Please contact an administrator if the error persists'
      },
      { status: 500 }
    );
  }
}
