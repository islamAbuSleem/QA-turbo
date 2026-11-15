import { User } from '../domain/user.entity';

export const USER_REPOSITORY = 'USER_REPOSITORY';

export interface UserRepository {
  create(user: Omit<User, 'id' | 'createdAt'> & { id?: string; createdAt?: string }): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  listByProject(projectId: string): Promise<User[]>;
  update(id: string, patch: Partial<User>): Promise<User | null>;
}
