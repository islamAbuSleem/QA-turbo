import { UserRole } from './user.entity';

export interface AuthenticatedUser {
  id: string;
  email: string;
  role: UserRole;
  projectId: string;
}
