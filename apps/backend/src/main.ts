import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module';
import { ConfigService } from '@nestjs/config';
import { PrismaExceptionFilter } from './common/filters/prisma-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Autotrafo API')
    .setDescription('API de transformadores e desenhos técnicos')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);
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
