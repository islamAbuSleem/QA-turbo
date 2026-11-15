import { Global, Module } from '@nestjs/common';

import { PROJECT_REPOSITORY } from '../../common/ports/project.repository.port';
import { InMemoryProjectRepository } from './adapters/in-memory-project.repository';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

@Global()
@Module({
  controllers: [ProjectsController],
  providers: [
    ProjectsService,
    { provide: PROJECT_REPOSITORY, useClass: InMemoryProjectRepository },
  ],
  exports: [ProjectsService, PROJECT_REPOSITORY],
})
export class ProjectsModule {}
