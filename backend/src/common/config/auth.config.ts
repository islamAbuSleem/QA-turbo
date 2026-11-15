import { ConfigService } from '@nestjs/config';

const DEV_JWT_SECRET = 'dev-only-secret-change-me';
const DEFAULT_JWT_TTL_SECONDS = 60 * 60 * 8;
const DEFAULT_SESSION_COOKIE_NAME = 'qt_session';

export const isProduction = (config?: ConfigService): boolean => {
  const nodeEnv = config?.get<string>('NODE_ENV') ?? process.env.NODE_ENV ?? 'development';
  return nodeEnv === 'production';
};

export const getJwtSecret = (config?: ConfigService): string => {
  const secret = config?.get<string>('JWT_SECRET') ?? process.env.JWT_SECRET ?? DEV_JWT_SECRET;
  if (isProduction(config) && secret === DEV_JWT_SECRET) {
    throw new Error('JWT_SECRET must be set in production.');
  }
  return secret;
};

export const getJwtTtlSeconds = (config?: ConfigService): number => {
  const raw = config?.get<string | number>('JWT_TTL_SECONDS') ?? process.env.JWT_TTL_SECONDS;
  if (raw === undefined) {
    return DEFAULT_JWT_TTL_SECONDS;
  }
  const parsed = typeof raw === 'number' ? raw : Number(raw);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new Error('JWT_TTL_SECONDS must be a positive integer.');
  }
  return parsed;
};

export const getSessionCookieName = (config?: ConfigService): string => {
  const name =
    config?.get<string>('SESSION_COOKIE_NAME') ?? process.env.SESSION_COOKIE_NAME ?? DEFAULT_SESSION_COOKIE_NAME;
  if (!name) {
    return DEFAULT_SESSION_COOKIE_NAME;
  }
  return name;
};

/** Single source of truth: cookie lifetime always matches the JWT lifetime. */
export const getSessionTtlMs = (config?: ConfigService): number => getJwtTtlSeconds(config) * 1000;
