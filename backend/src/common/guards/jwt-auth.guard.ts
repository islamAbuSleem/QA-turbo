import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';

import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { AuthenticatedUser } from '../domain/authenticated-user';
import { TOKEN_SERVICE, TokenService } from '../ports/token.service.port';
import { SESSION_COOKIE_NAME } from './session-cookie';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    @Inject(TOKEN_SERVICE) private readonly tokens: TokenService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request & { user?: AuthenticatedUser }>();
    const token = this.extractToken(request);
    if (!token) {
      throw new UnauthorizedException('Authentication required.');
    }

    try {
      const payload = await this.tokens.verify(token);
      request.user = {
        id: payload.sub,
        email: payload.email,
        role: payload.role as AuthenticatedUser['role'],
        projectId: payload.projectId,
      };
      return true;
    } catch {
      throw new UnauthorizedException('Session is invalid or expired.');
    }
  }

  private extractToken(request: Request): string | undefined {
    const cookies = request.cookies as Record<string, string> | undefined;
    const fromCookie = cookies?.[SESSION_COOKIE_NAME];
    if (fromCookie) {
      return fromCookie;
    }
    const header = request.headers.authorization;
    if (header?.startsWith('Bearer ')) {
      return header.slice('Bearer '.length);
    }
    return undefined;
  }
}
