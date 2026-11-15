import { Injectable } from '@nestjs/common';

import { User } from '../../common/domain/user.entity';
import { UserRepository } from '../../common/ports/user.repository.port';

@Injectable()
export class InMemoryUserRepository implements UserRepository {
  private readonly users = new Map<string, User>();
  private sequence = 0;

  async create(user: Omit<User, 'id' | 'createdAt'> & { id?: string; createdAt?: string }): Promise<User> {
    this.sequence += 1;
    const created: User = {
      ...user,
      id: user.id || `usr_${String(this.sequence).padStart(4, '0')}`,
      createdAt: user.createdAt ?? new Date().toISOString(),
    };
    this.users.set(created.id, created);
    return created;
  }

  async findById(id: string): Promise<User | null> {
    return this.users.get(id) ?? null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const normalized = email.trim().toLowerCase();
    for (const user of this.users.values()) {
      if (user.email.trim().toLowerCase() === normalized) {
        return user;
      }
    }
    return null;
  }

  async listByProject(projectId: string): Promise<User[]> {
    return [...this.users.values()].filter(user => user.projectId === projectId);
  }

  async update(id: string, patch: Partial<User>): Promise<User | null> {
    const existing = this.users.get(id);
    if (!existing) {
      return null;
    }
    const updated: User = { ...existing, ...patch, id: existing.id };
    this.users.set(id, updated);
    return updated;
  }
}
