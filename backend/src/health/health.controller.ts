import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  check(): { status: string; dbConfigured: boolean } {
    return { status: 'ok', dbConfigured: Boolean(process.env.DATABASE_URL) };
  }
}
