import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinColumn, ManyToOne, JoinTable } from 'typeorm';
import { BaseEntity } from '../../common/database/entities/_base.entity';
import { User } from '../../users/entities/users.entity';

@Entity({
  name: 'posts',
})
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'title',
    type: 'varchar',
    length: 255,
  })
  title: string;

  @Column({
    nullable: true,
    name: 'description',
    type: 'text',
  })
  description: string;

  @Column({
    nullable: true,
    name: 'image',
  })
  image: string;

  @ManyToOne(() => User, (user) => user.posts, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
  })
  user: User;
}
