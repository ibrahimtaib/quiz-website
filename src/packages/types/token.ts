import { JwtPayload } from 'jsonwebtoken';

export interface TokenJwtPayload extends JwtPayload {
  playerId: number;
}
export const TOKEN_COOKIE_NAME = 'token';
