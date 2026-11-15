import { Injectable } from '@nestjs/common';

import { Project } from '../../../common/domain/project.entity';
import { ProjectRepository } from '../../../common/ports/project.repository.port';

@Injectable()
export class InMemoryProjectRepository implements ProjectRepository {
  private readonly projects = new Map<string, Project>();
  private sequence = 0;

  async create(project: Omit<Project, 'createdAt'> & { createdAt?: string }): Promise<Project> {
    this.sequence += 1;
    const created: Project = {
      ...project,
      id: project.id || `prj_${String(this.sequence).padStart(4, '0')}`,
      createdAt: project.createdAt ?? new Date().toISOString(),
    };
    this.projects.set(created.id, created);
    return created;
  }

  async findById(id: string): Promise<Project | null> {
    return this.projects.get(id) ?? null;
  }

  async listAll(): Promise<Project[]> {
    return [...this.projects.values()];
  }
}
