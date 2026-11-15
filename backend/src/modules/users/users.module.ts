import { Global, Module } from '@nestjs/common';

import { PASSWORD_HASHER } from '../../common/ports/password.hasher.port';
import { AuthModule } from '../auth/auth.module';
import { InMemoryUserRepository } from './adapters/in-memory-user.repository';
import { USER_REPOSITORY } from '../../common/ports/user.repository.port';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Global()
@Module({
  imports: [AuthModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    { provide: USER_REPOSITORY, useClass: InMemoryUserRepository },
  ],
  exports: [UsersService, USER_REPOSITORY],
})
export class UsersModule {}
