import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BeforeUpdate,
  BeforeInsert,
  OneToMany,
} from 'typeorm';
import { BaseEntity } from '../../database/entities/_base.entity';

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

  // @ManyToMany(() => Role, (role) => role.users, { cascade: true }) //without cascade in inverse tablse
  // @JoinTable({
  //   name: 'listing_tags',
  //   joinColumn: {
  //     name: 'user_id',
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'role_id',
  //     referencedColumnName: 'id',
  //   },
  // })
  // roles: Role[]
}
