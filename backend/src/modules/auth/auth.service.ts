import { ConflictException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';

import { AuthenticatedUser } from '../../common/domain/authenticated-user';
import { User, UserView, toUserView } from '../../common/domain/user.entity';
import { PASSWORD_HASHER, PasswordHasher } from '../../common/ports/password.hasher.port';
import { PROJECT_REPOSITORY, ProjectRepository } from '../../common/ports/project.repository.port';
import { TOKEN_SERVICE, TokenService } from '../../common/ports/token.service.port';
import { USER_REPOSITORY, UserRepository } from '../../common/ports/user.repository.port';
import { LoginDto } from './dto/login.dto';
import { RegisterProjectDto } from './dto/register-project.dto';

export interface AuthSession {
  token: string;
  user: UserView;
}

@Injectable()
export class AuthService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly users: UserRepository,
    @Inject(PROJECT_REPOSITORY) private readonly projects: ProjectRepository,
    @Inject(PASSWORD_HASHER) private readonly hasher: PasswordHasher,
    @Inject(TOKEN_SERVICE) private readonly tokens: TokenService,
  ) {}

  async registerProject(dto: RegisterProjectDto): Promise<AuthSession> {
    const existing = await this.users.findByEmail(dto.adminEmail);
    if (existing) {
      throw new ConflictException('An account with that email already exists.');
    }

    const passwordHash = await this.hasher.hash(dto.adminPassword);
    const user = await this.users.create({
      projectId: '',
      name: dto.adminName,
      email: dto.adminEmail,
      role: 'admin',
      status: 'active',
      passwordHash,
      mustResetPassword: false,
      lastLoginAt: null,
    });

    const project = await this.projects.create({ name: dto.projectName, ownerUserId: user.id });
    const withProject = await this.users.update(user.id, { projectId: project.id });

    return this.issueSession(withProject ?? user);
  }

  async login(dto: LoginDto): Promise<AuthSession> {
    const user = await this.users.findByEmail(dto.email);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password.');
    }
    const valid = await this.hasher.verify(dto.password, user.passwordHash);
    if (!valid) {
      throw new UnauthorizedException('Invalid email or password.');
    }

    const updated = await this.users.update(user.id, { lastLoginAt: new Date().toISOString() });
    return this.issueSession(updated ?? user);
  }

  async me(userId: string): Promise<UserView> {
    const user = await this.users.findById(userId);
    if (!user) {
      throw new UnauthorizedException('Session user no longer exists.');
    }
    return toUserView(user);
  }

  private async issueSession(user: User): Promise<AuthSession> {
    const token = await this.tokens.sign({
      sub: user.id,
      email: user.email,
      role: user.role,
      projectId: user.projectId,
    });
    return { token, user: toUserView(user) };
  }
}
