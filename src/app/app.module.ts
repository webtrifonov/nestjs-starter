import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { TypeormModule } from '@app/typeorm';
import { publicPath } from '../common/utils/utils';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { entities } from '../common/database/entities/entities';
import { repositories } from '../common/database/entities/repositories';
import { UsersModule } from '../users/users.module';
import { RolesModule } from '../roles/roles.module';
import { PostsModule } from '../posts/posts.module';

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
    ServeStaticModule.forRoot({
      rootPath: publicPath(),
      serveRoot: '/public/',
    }),
    TypeormModule.forRoot({
      entities,
      repositories,
    }),
    UsersModule,
    RolesModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
