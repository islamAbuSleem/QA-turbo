import { Controller, Get } from '@nestjs/common';

import { Public } from '../common/decorators/public.decorator';

@Controller('health')
export class HealthController {
  @Public()
  @Get()
  check(): { status: string; dbConfigured: boolean; storage: string } {
    return {
      status: 'ok',
      dbConfigured: Boolean(process.env.DATABASE_URL),
      storage: process.env.DATABASE_URL ? 'postgres' : 'in-memory',
    };
  }
}
