import { NextRequest, NextResponse } from 'next/server';
import { GameStatus } from 'types/api';
import prisma from 'utils/prisma';

export async function POST(
  request: NextRequest,
  { params }: { params: { gameId: string } }
) {
  const gameId = params.gameId;
  console.log(gameId);
  console.log(parseInt(gameId));
  if (isNaN(parseInt(gameId)) || parseInt(gameId) < 0) {
    console.log('here');
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
        { status: 200 }
      );
    }
    // if player is inside players
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          'Could not get game. Please contact an administrator if the error persists'
      },
      { status: 500 }
    );
  }
}
