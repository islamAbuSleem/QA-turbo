export type UserRole = 'admin' | 'analyst' | 'tester' | 'viewer';

export type UserStatus = 'active' | 'invited';

export interface User {
  id: string;
  projectId: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  passwordHash: string;
  mustResetPassword: boolean;
  createdAt: string;
  lastLoginAt: string | null;
}

export interface UserView {
  id: string;
  projectId: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  mustResetPassword: boolean;
  createdAt: string;
  lastLoginAt: string | null;
}

export const toUserView = (user: User): UserView => ({
  id: user.id,
  projectId: user.projectId,
  name: user.name,
  email: user.email,
  role: user.role,
  status: user.status,
  mustResetPassword: user.mustResetPassword,
  createdAt: user.createdAt,
  lastLoginAt: user.lastLoginAt,
});
