// import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
// import { User } from '../../auth/entities/user.entity';
// import { Field, ObjectType } from '@nestjs/graphql';

// export enum UserRoles {
//   admin = 'admin',
//   user = 'user',
// }
// @ObjectType()
// @Entity({ name: 'roles' })
// export class Role {
//   @Field()
//   @PrimaryGeneratedColumn()
//   id!: number;

//   @Field()
//   @Column({
//     type: 'varchar',
//     name: 'title',
//   })
//   title!: UserRoles | null;

//   @ManyToMany(() => User, (user) => user.roles)
//   @JoinTable({
//     name: 'user_roles',
//     joinColumn: {
//       name: 'role_id',
//       referencedColumnName: 'id',
//     },
//     inverseJoinColumn: {
//       name: 'user_id',
//       referencedColumnName: 'id',
//     },
//   })
//   users!: User[];
// }
