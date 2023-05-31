import { NextResponse } from 'next/server';
import { GameStatus, TriviaQuestion } from 'types/api';
import { COLORS, ColorScheme } from 'types/colors';
import prisma from 'utils/prisma';
import { createSessionQuestions } from '../../../api/src/utils/createSessionQuestions';

export async function POST(request: Request) {
  console.log('POST');
  console.log('POST');
  console.log('POST');
  console.log('POST');
  console.log('POST');
  console.log('POST');
  console.log('POST');
  console.log('POST');
  console.log('POST');
  console.log('POST');
  const { username, color, newSession } = await request.json();
  console.log(username + ' ' + color + ' ' + newSession);
  if (!username || !color || !newSession) {
    return NextResponse.json({ message: 'Bad arguments' }, { status: 400 });
  }
  const colorNames: String[] = Object.values<ColorScheme>(COLORS).map(
    (c: ColorScheme) => c.name.toLowerCase()
  );
  if (!colorNames.includes(color.toLowerCase())) {
    return NextResponse.json(
      {
        error: `Invalid color. Please choose from: ${colorNames.join(', ')}`
      },
      { status: 400 }
    );
  }
  console.log('POST');
  try {
    const questions: TriviaQuestion[] = await createSessionQuestions(
      newSession
    );
    console.log(questions);
    const myGame = await prisma.game.create({
      data: {
        status: GameStatus.LOBBY,
        players: {
          create: {
            username: username,
            color: color
          }
        },
        sessions: {
          create: {
            questions: {
              createMany: {
                data: questions
              }
            }
          }
        }
      },
      include: {
        players: true,
        sessions: true
      }
    });
    console.log('success');
    return NextResponse.json(
      { message: 'Game created successfully!', game: myGame },
      { status: 200 }
    );
  } catch (error) {
    NextResponse.json(
      {
        error:
          'Could not create a game. Please contact an administrator if the error persists'
      },
      { status: 500 }
    );
  }
}
