import { RoleTitle } from '../entities/roles.entity';

export class CreateRoleDto {
  readonly title: RoleTitle;
}
export class RemoveRoleDto {
  readonly title: RoleTitle;
}
