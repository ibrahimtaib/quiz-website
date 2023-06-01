import dotenv from 'dotenv';
import jwt, { Secret } from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { GameStatus, TriviaQuestion } from 'types/api';
import { COLORS, ColorScheme } from 'types/colors';
import { TOKEN_COOKIE_NAME } from 'types/token';
import prisma from 'utils/prisma';
import { createSessionQuestions } from '../../../api/src/utils/createSessionQuestions';
dotenv.config();
export async function POST(request: Request) {
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
    const secret: Secret = process.env?.JWT_SECRET!;
    if (!secret) {
      throw new Error('JWT_SECRET not found in .env');
    }
    const codedToken = jwt.sign({ playerId: myGame.players[0].id }, secret, {
      expiresIn: '1h'
    });
    const response = NextResponse.json(
      { message: 'Game created successfully!', game: myGame },
      { status: 200 }
    );
    response.cookies.set(TOKEN_COOKIE_NAME, codedToken, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60
    });
    return response;
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
