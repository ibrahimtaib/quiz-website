import { MAX_PLAYERS } from 'constants/game';
import { NextResponse } from 'next/server';
import { GameStatus } from 'types/api';
import prisma from 'utils/prisma';
export async function GET(
  request: Request,
  {
    params
  }: {
    params: { gameId: string };
  }
) {
  const gameId = params.gameId;
  if (!gameId) {
    //turn this into NextResponse
    return NextResponse.json({ message: 'Bad arguments' }, { status: 400 });
  }
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
      return NextResponse.json({ message: 'Game not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Game found', game }, { status: 200 });
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

export async function POST(
  request: Request,
  {
    params
  }: {
    params: { gameId: string };
  }
) {
  const { username, color } = await request.json();
  const gameId = params.gameId;
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
  if (game.players.length == MAX_PLAYERS) {
    return NextResponse.json({ message: 'Game is full' }, { status: 400 });
  }
  if (game.status !== GameStatus.LOBBY) {
    return NextResponse.json(
      { message: 'Game has already started' },
      { status: 400 }
    );
  }
  return prisma.game
    .update({
      where: {
        id: +gameId
      },
      data: {
        players: {
          create: {
            username: username,
            color: color
          }
        }
      }
    })
    .then(() => {
      return NextResponse.json(
        { message: 'Game joined successfully!' },
        { status: 200 }
      );
    })
    .catch(() => {
      return NextResponse.json(
        {
          error:
            'Could not join game. Please contact an administrator if the error persists'
        },
        { status: 500 }
      );
    });
}
