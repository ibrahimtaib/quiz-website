import { NextRequest, NextResponse, URLPattern } from 'next/server';
const PATTERNS: [{ pattern: URLPattern; handler: (url: any) => any }] = [
  {
    pattern: new URLPattern({
      pathname: '/api/games/:gameId/:sessionId?'
    }),
    handler: ({ pathname }) => pathname.groups
  },
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
  const url = request.nextUrl.origin + `/api/auth/${gameId}`;
  console.log(gameId, sessionId, url);
  console.log(gameId, sessionId, url);
  console.log(gameId, sessionId, url);
  try {
    const response = await fetch(url, {
      method: 'POST'
    });

    if (!response.ok) {
      return await response
        .json()
        .then(data => {
          return NextResponse.json({
            status: response.status,
            body: data.message
          });
        })
        .catch(() => {
          return NextResponse.json({
            status: 500,
            body: 'An error occurred'
          });
        });
    }
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    return NextResponse.json({
      status: 500,
      body: 'An error occurred'
    });
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/games/:gameId/:sessionId?'
};
