import { NextRequest, NextResponse, URLPattern } from 'next/server';
const PATTERNS: [{ pattern: URLPattern; handler: (url: any) => any }] = [
  {
    pattern: new URLPattern({
      pathname: '/api/games/:gameId'
    }),
    handler: ({ pathname }) => pathname.groups
  }
];

const params = (url: string): any => {
  const input = url.split('?')[0];
  console.log('input ' + input);
  let result = {};

  for (const { pattern, handler } of PATTERNS) {
    const patternResult = pattern.exec(input);

    console.log(pattern);
    if (patternResult !== null && 'pathname' in patternResult) {
      result = handler(patternResult);
      break;
    }
  }
  return result;
};

export async function middleware(request: NextRequest) {
  const { gameId, sessionId } = params(request.url);
  const url = request.nextUrl.origin + `/api/games/${gameId}`;
  console.log(gameId, sessionId, url);
  console.log(gameId, sessionId, url);
  console.log(gameId, sessionId, url);
  const game = await fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(res => res.game)
    .catch(error => {
      console.error(error);
      return null;
    });
  // verify that player is in game todo
  if (!game) {
    return NextResponse.json({ message: 'Game not found' }, { status: 404 });
  }
  if (sessionId && game.currSession !== +sessionId) {
    return NextResponse.json(
      { message: 'Session already finished' },
      { status: 401 }
    );
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/games/:gameId/:sessionId?'
};
