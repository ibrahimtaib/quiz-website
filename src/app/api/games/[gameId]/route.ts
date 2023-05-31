import { NextResponse } from 'next/server';
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
