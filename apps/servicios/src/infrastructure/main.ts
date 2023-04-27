import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { whitelistPipe } from './exception-filter';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

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

  app.useGlobalPipes(whitelistPipe);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://fyblbruz:CPe0H2C1De_7YhHN8dzCvkyTXo187Cda@jackal.rmq.cloudamqp.com/fyblbruz',
      ],
      queue: 'boletos_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.listen(parseInt(process.env.SERVICIOS_PORT) | 3001);
  await app.startAllMicroservices();
}
bootstrap();
