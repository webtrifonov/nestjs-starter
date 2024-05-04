import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRoleDto } from './dto/roles.dto';
import { RolesService } from './roles.service';

@Controller('api/roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}
  @Post('/')
  async createRole(@Body() createRoleDto: CreateRoleDto) {
    const newRole = await this.rolesService.createRole(createRoleDto);
    return newRole;
  }

  @Get('/')
  async getRoles() {
    const newRole = await this.rolesService.getRoles();
    return newRole;
  }
}
