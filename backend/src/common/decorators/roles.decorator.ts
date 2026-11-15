import { SetMetadata } from '@nestjs/common';

import { UserRole } from '../domain/user.entity';

export const ROLES_KEY = 'qt:roles';

/** Restricts a route to the given roles. Applied by RolesGuard. */
export const Roles = (...roles: UserRole[]): MethodDecorator & ClassDecorator =>
  SetMetadata(ROLES_KEY, roles);
