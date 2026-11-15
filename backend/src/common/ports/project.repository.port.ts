import { Project } from '../domain/project.entity';

export const PROJECT_REPOSITORY = 'PROJECT_REPOSITORY';

export interface ProjectRepository {
  create(project: Omit<Project, 'id' | 'createdAt'> & { id?: string; createdAt?: string }): Promise<Project>;
  findById(id: string): Promise<Project | null>;
  listAll(): Promise<Project[]>;
}
