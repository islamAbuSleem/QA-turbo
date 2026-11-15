import { ConflictException, Inject, Injectable, NotFoundException } from '@nestjs/common';

import { AuthenticatedUser } from '../common/domain/authenticated-user';
import { UserView, toUserView } from '../common/domain/user.entity';
import { PASSWORD_HASHER, PasswordHasher } from '../common/ports/password.hasher.port';
import { USER_REPOSITORY, UserRepository } from '../common/ports/user.repository.port';
import { normalizeEmail, normalizeName } from '../common/utils/email.util';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly users: UserRepository,
    @Inject(PASSWORD_HASHER) private readonly hasher: PasswordHasher,
  ) {}

  async list(actor: AuthenticatedUser): Promise<UserView[]> {
    const users = await this.users.listByProject(actor.projectId);
    return users.map(toUserView);
  }

  async create(actor: AuthenticatedUser, dto: CreateUserDto): Promise<UserView> {
    const email = normalizeEmail(dto.email);
    const existing = await this.users.findByEmail(email);
    if (existing) {
      throw new ConflictException('An account with that email already exists.');
    }
    const passwordHash = await this.hasher.hash(dto.temporaryPassword);
    const created = await this.users.create({
      projectId: actor.projectId,
      name: normalizeName(dto.name),
      email,
      role: dto.role,
      status: 'invited',
      passwordHash,
      mustResetPassword: true,
      lastLoginAt: null,
    });
    return toUserView(created);
  }

  async updateRole(actor: AuthenticatedUser, id: string, dto: UpdateUserRoleDto): Promise<UserView> {
    const target = await this.users.findById(id);
    if (!target || target.projectId !== actor.projectId) {
      throw new NotFoundException(`User ${id} not found in this workspace.`);
    }
    const updated = await this.users.update(id, { role: dto.role });
    if (!updated) {
      throw new NotFoundException(`User ${id} not found.`);
    }
    return toUserView(updated);
  }
}
