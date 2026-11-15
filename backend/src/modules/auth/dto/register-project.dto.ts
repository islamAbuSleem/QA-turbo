import { IsEmail, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class RegisterProjectDto {
  @IsString()
  @MinLength(2)
  @MaxLength(80)
  projectName!: string;

  @IsString()
  @MinLength(2)
  @MaxLength(80)
  adminName!: string;

  @IsEmail()
  adminEmail!: string;

  @IsString()
  @MinLength(8)
  @MaxLength(128)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d).+$/, {
    message: 'adminPassword must contain at least one letter and one number.',
  })
  adminPassword!: string;
}
