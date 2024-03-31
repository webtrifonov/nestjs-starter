import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateInitialUsers1000000001001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO users (email, password) VALUES
          ('dtrifonov100@gmail.com', 'Qwerty1!'),
          ('dtrifonov101@gmail.com', 'Qwerty1!')
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DELETE FROM users
          WHERE email IN ('dtrifonov100@gmail.com', 'dtrifonov101@gmail.com', 'user3@example.com');
      `);
  }
}
