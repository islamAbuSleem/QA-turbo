import { Global, Module } from '@nestjs/common';

import { PROJECT_REPOSITORY } from '../common/ports/project.repository.port';
import { USER_REPOSITORY } from '../common/ports/user.repository.port';
import { InMemoryProjectRepository } from './adapters/in-memory-project.repository';
import { InMemoryUserRepository } from './adapters/in-memory-user.repository';

@Global()
@Module({
  providers: [
    { provide: USER_REPOSITORY, useClass: InMemoryUserRepository },
    { provide: PROJECT_REPOSITORY, useClass: InMemoryProjectRepository },
  ],
  exports: [USER_REPOSITORY, PROJECT_REPOSITORY],
})
export class PersistenceModule {}
