import { Module } from '@nestjs/common';
import { TypeOrmExModule } from '@app/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([UsersRepository])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
