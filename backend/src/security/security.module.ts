import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { getJwtSecret, getJwtTtlSeconds } from '../common/config/auth.config';
import { PASSWORD_HASHER } from '../common/ports/password.hasher.port';
import { TOKEN_SERVICE } from '../common/ports/token.service.port';
import { BcryptPasswordHasher } from './adapters/bcrypt.password.hasher';
import { JwtTokenService } from './adapters/jwt.token.service';

@Global()
@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: getJwtSecret(config),
        signOptions: { expiresIn: getJwtTtlSeconds(config) },
      }),
    }),
  ],
  providers: [
    { provide: PASSWORD_HASHER, useClass: BcryptPasswordHasher },
    { provide: TOKEN_SERVICE, useClass: JwtTokenService },
  ],
  exports: [PASSWORD_HASHER, TOKEN_SERVICE],
})
export class SecurityModule {}
