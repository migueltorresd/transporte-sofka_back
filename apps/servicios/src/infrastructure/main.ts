import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  BadRequestException,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';

async function bootstrap() {
  dotenv.config({ path: 'environments/.' + process.env.NODE_ENV + '.env' });
  const app = await NestFactory.create(AppModule);

  const swagger = new DocumentBuilder()
    .setTitle('API-REST Servicios')
    .setDescription('Servicio para la gestion de los boletos')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, swagger);

  SwaggerModule.setup('api', app, document, {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const newErrors = errors.filter((error) =>
          Object.values(error.constraints).includes('should not exist'),
        );
        const messages = newErrors.map(
          (error) => `${error.property} no deberia existir ${error.value}`,
        );
        return new BadRequestException(messages);
      },
    }),
  );
  await app.listen(parseInt(process.env.SERVICIOS_PORT) | 3001);
}
bootstrap();
