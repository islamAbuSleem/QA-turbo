import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'qt:isPublic';

/** Marks a route as reachable without a session (e.g. /health, /auth/login). */
export const Public = (): MethodDecorator & ClassDecorator => SetMetadata(IS_PUBLIC_KEY, true);
