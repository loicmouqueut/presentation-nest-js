import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ExecutionInterceptor } from './interceptor/executionInterceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new ExecutionInterceptor())
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove properties that do not have any decorators
      forbidNonWhitelisted: true, // Throw an error if non-whitelisted properties are present
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
