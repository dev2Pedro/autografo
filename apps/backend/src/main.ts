import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  app.enableShutdownHooks();
  const configService = app.get(ConfigService);
  app.enableCors({ origin: 'http://localhost:3000' });
  await app.listen(configService.getOrThrow<number>('PORT'));
}
void bootstrap();
