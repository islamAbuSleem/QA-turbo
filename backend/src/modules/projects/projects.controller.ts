import { Controller, Get, Param } from '@nestjs/common';

import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { AuthenticatedUser } from '../../common/domain/authenticated-user';
import { Project } from '../../common/domain/project.entity';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projects: ProjectsService) {}

  @Get()
  list(@CurrentUser() actor: AuthenticatedUser): Promise<Project[]> {
    return this.projects.list(actor);
  }

  @Get(':id')
  get(@CurrentUser() actor: AuthenticatedUser, @Param('id') id: string): Promise<Project> {
    return this.projects.get(actor, id);
  }
}
