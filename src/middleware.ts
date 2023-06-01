import { NextRequest, NextResponse, URLPattern } from 'next/server';
import { TOKEN_COOKIE_NAME } from 'types/token';
const PATTERNS: [{ pattern: URLPattern; handler: (url: any) => any }] = [
  {
    pattern: new URLPattern({
      pathname: '/api/games/:gameId/:sessionId'
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
  let result = {};

  for (const { pattern, handler } of PATTERNS) {
    const patternResult = pattern.exec(input);

    if (patternResult !== null && 'pathname' in patternResult) {
      result = handler(patternResult);
      break;
    }
  }
  return result;
};

export async function middleware(request: NextRequest) {
  const { gameId } = params(request.url);
  const url = request.nextUrl.origin + `/api/auth/${gameId}`;

  try {
    const token = request.cookies.get(TOKEN_COOKIE_NAME);
    const headers: any = {
      'Content-Type': 'application/json'
    };

    if (token) {
      headers.token = token;
    }
    const response = await fetch(url, {
      headers,
      method: 'POST'
    });
    if (!response.ok) {
      return await response
        .json()
        .then(data => {
          return NextResponse.json(data.message, { status: response.status });
        })
        .catch(error => {
          console.error(
            'An error occorred when trying to convert json to object: ',
            error
          );
          return NextResponse.json(
            { message: 'An error occurred' },
            {
              status: 500
            }
          );
        });
    }
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    return NextResponse.json(
      { message: 'An error occurred' },
      {
        status: 500
      }
    );
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/games/:gameId/:sessionId?'
};
