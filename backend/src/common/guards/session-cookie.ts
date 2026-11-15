export const SESSION_COOKIE_NAME = process.env.SESSION_COOKIE_NAME ?? 'qt_session';

export const SESSION_TTL_MS = Number(process.env.SESSION_TTL_MS ?? 1000 * 60 * 60 * 8);
