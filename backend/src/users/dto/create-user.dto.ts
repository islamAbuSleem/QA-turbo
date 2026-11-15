import { Transform } from 'class-transformer';
import { IsEmail, IsIn, IsString, MaxLength, MinLength } from 'class-validator';

import { UserRole } from '../../common/domain/user.entity';

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  @MaxLength(80)
  @Transform(({ value }: { value: unknown }) => (typeof value === 'string' ? value.trim() : value))
  name!: string;

  @IsEmail()
  @Transform(({ value }: { value: unknown }) => (typeof value === 'string' ? value.trim().toLowerCase() : value))
  email!: string;

  @IsIn(['admin', 'analyst', 'tester', 'viewer'])
  role!: UserRole;

  @IsString()
  @MinLength(8)
  @MaxLength(128)
  temporaryPassword!: string;
}
