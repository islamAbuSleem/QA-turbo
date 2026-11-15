import { UserRole } from '../domain/user.entity';

export const TOKEN_SERVICE = 'TOKEN_SERVICE';

export interface TokenPayload {
  sub: string;
  email: string;
  role: UserRole;
  projectId: string;
}

export interface TokenService {
  sign(payload: TokenPayload): Promise<string>;
  verify(token: string): Promise<TokenPayload>;
}
