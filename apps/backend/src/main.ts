import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module';
import { ConfigService } from '@nestjs/config';
import { PrismaExceptionFilter } from './common/filters/prisma-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  app.useGlobalFilters(new PrismaExceptionFilter());
  app.enableShutdownHooks();
  const configService = app.get(ConfigService);
  app.enableCors({ origin: 'http://localhost:3000' });
  await app.listen(configService.getOrThrow<number>('PORT'));
}
void bootstrap();
