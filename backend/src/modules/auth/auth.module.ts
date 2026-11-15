import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { PASSWORD_HASHER } from '../../common/ports/password.hasher.port';
import { TOKEN_SERVICE } from '../../common/ports/token.service.port';
import { BcryptPasswordHasher } from './adapters/bcrypt.password.hasher';
import { JwtTokenService } from './adapters/jwt.token.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET ?? 'dev-only-secret-change-me',
      signOptions: { expiresIn: Number(process.env.JWT_TTL_SECONDS ?? 60 * 60 * 8) },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    { provide: PASSWORD_HASHER, useClass: BcryptPasswordHasher },
    { provide: TOKEN_SERVICE, useClass: JwtTokenService },
  ],
  exports: [AuthService, PASSWORD_HASHER, TOKEN_SERVICE],
})
export class AuthModule {}
