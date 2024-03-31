import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import * as path from 'path';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: Number(configService.get('POSTGRES_PORT')),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DB'),
  migrations: [
    path.resolve(path.join(__dirname, '..', '..', '..', 'src', 'common', 'database', 'migrations', '*{.ts,.js}')),
  ],
});
