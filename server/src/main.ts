import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './shared/error/http-exception.filter';
import { ErrorsInterceptor } from './shared/error/errors.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new ErrorsInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true }),
  );

  await app.listen(
    configService.get<number>('app.port') ?? 3000,
    configService.get<string>('app.host') ?? 'localhost',
  );
}

bootstrap();