import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { BaseEntity } from '../../common/database/entities/_base.entity';
import { Role } from '../../roles/entities/roles.entity';
import { Post } from '../../posts/entities/posts.entity';

@Entity({
  name: 'users',
})
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  password: string;

  @ManyToMany(() => Role, (role) => role.users, { cascade: true }) // without cascade in inverse tables
  @JoinTable({
    name: 'user_roles',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'role_id',
      referencedColumnName: 'id',
    },
  })
  roles: Role[];

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
