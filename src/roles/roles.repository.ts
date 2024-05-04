import { Repository } from 'typeorm';
import { CustomRepository } from '@app/typeorm';
import { Role } from './entities/roles.entity';
import { CreateRoleDto } from './dto/roles.dto';

@CustomRepository(Role)
export class RolesRepository extends Repository<Role> {
  async getRoles() {
    return this.find();
  }

  async getRoleById(id: number) {
    return this.findOneBy({ id });
  }

  async createRole(data: CreateRoleDto) {
    const { title } = data;
    const newRole = new Role();
    newRole.title = title;
    await this.save(newRole);
    return newRole;
  }
}
