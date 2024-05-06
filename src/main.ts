import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app/app.module';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = await app.get(ConfigService);
  // app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.enableCors();
  const HOST = 'http://localhost';
  const PORT = config.get<number>('BACKEND_API_PORT');
  await app.listen(PORT, () => console.info(`Server is started on port = ${HOST}:${PORT}`));
}
bootstrap();
