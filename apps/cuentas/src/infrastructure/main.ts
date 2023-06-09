import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { whitelistPipe } from './exception-filter';

async function bootstrap() {
  dotenv.config({ path: 'environments/.' + process.env.NODE_ENV + '.env' });
  const app = await NestFactory.create(AppModule);

  const swagger = new DocumentBuilder()
    .setTitle('API-REST Cuentas')
    .setDescription(
      'Servicio para la gestión de cuentas de usuario, envios y vehiculos',
    )
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

  app.useGlobalPipes(whitelistPipe);
  await app.listen(parseInt(process.env.CUENTAS_PORT) | 3000);
}
bootstrap();
