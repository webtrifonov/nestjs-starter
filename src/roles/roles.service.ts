import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/roles.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RolesRepository } from './roles.repository';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RolesRepository)
    private readonly rolesRepo: RolesRepository
  ) {}
  async createRole(createRoleDto: CreateRoleDto) {
    return this.rolesRepo.createRole(createRoleDto);
  }
  async getRoles() {
    return this.rolesRepo.getRoles();
  }
}
