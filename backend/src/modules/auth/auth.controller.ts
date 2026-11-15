import { Body, Controller, Get, HttpCode, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { Public } from '../../common/decorators/public.decorator';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { AuthenticatedUser } from '../../common/domain/authenticated-user';
import { UserView } from '../../common/domain/user.entity';
import { SESSION_COOKIE_NAME, SESSION_TTL_MS } from '../../common/guards/session-cookie';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterProjectDto } from './dto/register-project.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

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
    response.clearCookie(SESSION_COOKIE_NAME);
  }

  @Get('me')
  me(@CurrentUser() user: AuthenticatedUser): Promise<UserView> {
    return this.auth.me(user.id);
  }

  private setSessionCookie(response: Response, token: string): void {
    response.cookie(SESSION_COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: SESSION_TTL_MS,
      path: '/',
    });
  }
}
