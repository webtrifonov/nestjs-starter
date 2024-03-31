import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormService } from './typeorm.service';
import { TypeOrmExModule } from './typeorm-ex/typeorm-ex.module';
import dataSource from './typeorm.config';

interface IRegisterData {
  entities: any[];
  repositories: any[];
}
@Module({
  providers: [TypeormService],
  exports: [TypeormService],
})
export class TypeormModule {
  static forRoot({ entities, repositories }: IRegisterData): DynamicModule {
    const TypeormExModule = TypeOrmExModule.forCustomRepository(repositories);
    return {
      module: TypeormModule,
      imports: [
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (config: ConfigService) => {
            return {
              ...dataSource.options,
              entities,
              synchronize: false,
              namingStrategy: new SnakeNamingStrategy(),
              logging: false,
            };
          },
        }),
        TypeormExModule,
      ],
      exports: [TypeormExModule],
    };
  }
}
