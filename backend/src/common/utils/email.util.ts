export const normalizeEmail = (email: string): string => email.trim().toLowerCase();

export const normalizeName = (name: string): string => name.trim().replace(/\s+/g, ' ');
