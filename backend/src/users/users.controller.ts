import { Body, Controller, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';

import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Roles } from '../common/decorators/roles.decorator';
import { AuthenticatedUser } from '../common/domain/authenticated-user';
import { UserView } from '../common/domain/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly users: UsersService) {}

  @Get()
  list(@CurrentUser() actor: AuthenticatedUser): Promise<UserView[]> {
    return this.users.list(actor);
  }

  @Roles('admin')
  @Post()
  @HttpCode(201)
  create(@CurrentUser() actor: AuthenticatedUser, @Body() dto: CreateUserDto): Promise<UserView> {
    return this.users.create(actor, dto);
  }

  @Roles('admin')
  @Patch(':id/role')
  updateRole(
    @CurrentUser() actor: AuthenticatedUser,
    @Param('id') id: string,
    @Body() dto: UpdateUserRoleDto,
  ): Promise<UserView> {
    return this.users.updateRole(actor, id, dto);
  }
}
