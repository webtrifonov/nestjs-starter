import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../common/database/entities/_base.entity';
import { User } from '../../users/entities/users.entity';

export enum RoleTitle {
  ADMIN = 'ADMIN',
  USER = 'USER',
  GUEST = 'GUEST',
}

@Entity({
  name: 'roles',
})
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'title',
    type: 'enum',
    unique: true,
    enum: RoleTitle,
  })
  title: RoleTitle;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}
