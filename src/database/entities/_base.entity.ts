import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  createdAt!: Date;

  @Column('timestamp', {
    nullable: true,
    default: () => 'NULL',
    name: 'updated_at',
  })
  updatedAt!: Date;

  @Column('timestamp', {
    select: false,
    nullable: true,
    default: () => 'NULL',
    name: 'deleted_at',
  })
  deletedAt!: Date;

  @BeforeInsert()
  beforeInsert() {
    this.createdAt = new Date();
  }
  @BeforeUpdate()
  beforeUpdate() {
    this.updatedAt = new Date();
  }
}
