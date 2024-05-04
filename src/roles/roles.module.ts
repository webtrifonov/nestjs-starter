import { Module } from '@nestjs/common';
import { TypeOrmExModule } from '@app/typeorm';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { RolesRepository } from './roles.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([RolesRepository])],
  providers: [RolesService],
  controllers: [RolesController],
})
export class RolesModule {}
