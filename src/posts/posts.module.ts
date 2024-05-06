import { Module } from '@nestjs/common';
import { TypeOrmExModule } from '@app/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PostsRepository } from './posts.repository';

@Module({
  imports: [ConfigModule, TypeOrmExModule.forCustomRepository([PostsRepository])],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
