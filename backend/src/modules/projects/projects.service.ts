import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { AuthenticatedUser } from '../../common/domain/authenticated-user';
import { Project } from '../../common/domain/project.entity';
import { PROJECT_REPOSITORY, ProjectRepository } from '../../common/ports/project.repository.port';

@Injectable()
export class ProjectsService {
  constructor(
    @Inject(PROJECT_REPOSITORY) private readonly projects: ProjectRepository,
  ) {}

  async list(actor: AuthenticatedUser): Promise<Project[]> {
    const all = await this.projects.listAll();
    return all.filter(project => project.id === actor.projectId);
  }

  async get(actor: AuthenticatedUser, id: string): Promise<Project> {
    const project = await this.projects.findById(id);
    if (!project || project.id !== actor.projectId) {
      throw new NotFoundException(`Project ${id} not found in this workspace.`);
    }
    return project;
  }
}
