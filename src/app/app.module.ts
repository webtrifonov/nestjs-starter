import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeormModule } from '@app/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { entities } from '../database/entities/entities';
import { repositories } from '../database/entities/repositories';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        FRONTEND_URL: Joi.string().required(),
        BACKEND_APP_NAME: Joi.string().required(),
        BACKEND_API_PORT: Joi.number(),
        UPLOADED_FILES_DESTINATION: Joi.string().required(),
        POSTGRES_HOST: Joi.string().required(),
        PGADMIN_DEFAULT_OLDPASSWORD: Joi.string(),

        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        PGDATA: Joi.string().required(),
      }),
    }),
    TypeormModule.forRoot({
      entities,
      repositories,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
