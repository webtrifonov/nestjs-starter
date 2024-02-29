import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = await app.get(ConfigService);
  // app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors();
  const PORT = config.get<number>('BACKEND_API_PORT');
  await app.listen(PORT, () => console.info(`Server is started on port = ${PORT}`));
}
bootstrap();
