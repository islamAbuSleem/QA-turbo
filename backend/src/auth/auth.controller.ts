import { Body, Controller, Get, HttpCode, Post, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';

import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Public } from '../common/decorators/public.decorator';
import { getSessionCookieName, getSessionTtlMs, isProduction } from '../common/config/auth.config';
import { AuthenticatedUser } from '../common/domain/authenticated-user';
import { UserView } from '../common/domain/user.entity';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterProjectDto } from './dto/register-project.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly auth: AuthService,
    private readonly config: ConfigService,
  ) {}

  @Public()
  @Post('register-project')
  @HttpCode(201)
  async registerProject(
    @Body() dto: RegisterProjectDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<{ user: UserView }> {
    const session = await this.auth.registerProject(dto);
    this.setSessionCookie(response, session.token);
    return { user: session.user };
  }

  @Public()
  @Post('login')
  @HttpCode(200)
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<{ user: UserView }> {
    const session = await this.auth.login(dto);
    this.setSessionCookie(response, session.token);
    return { user: session.user };
  }

  @Post('logout')
  @HttpCode(204)
  logout(@Res({ passthrough: true }) response: Response): void {
    response.clearCookie(this.cookieName, this.cookieOptions);
  }

  @Get('me')
  me(@CurrentUser() user: AuthenticatedUser): Promise<UserView> {
    return this.auth.me(user.id);
  }

  private get cookieName(): string {
    return getSessionCookieName(this.config);
  }

  private get cookieOptions(): { httpOnly: boolean; sameSite: 'lax'; secure: boolean; maxAge: number; path: string } {
    return {
      httpOnly: true,
      sameSite: 'lax',
      secure: isProduction(this.config),
      maxAge: getSessionTtlMs(this.config),
      path: '/',
    };
  }

  private setSessionCookie(response: Response, token: string): void {
    response.cookie(this.cookieName, token, this.cookieOptions);
  }
}
