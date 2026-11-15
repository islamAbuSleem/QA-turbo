import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export interface HealthStatus {
  status: string;
  dbConfigured: boolean;
  storage: string;
}

@Injectable()
export class HealthService {
  constructor(private readonly config: ConfigService) {}

  check(): HealthStatus {
    const databaseUrl = this.config.get<string>('DATABASE_URL');
    return {
      status: 'ok',
      dbConfigured: Boolean(databaseUrl),
      storage: databaseUrl ? 'postgres' : 'in-memory',
    };
  }
}
