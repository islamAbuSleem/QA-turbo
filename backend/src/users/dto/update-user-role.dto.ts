import { IsIn } from 'class-validator';

import { UserRole } from '../../common/domain/user.entity';

export class UpdateUserRoleDto {
  @IsIn(['admin', 'analyst', 'tester', 'viewer'])
  role!: UserRole;
}
