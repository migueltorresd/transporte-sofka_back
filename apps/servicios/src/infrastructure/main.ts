import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  dotenv.config({ path: 'environments/.' + process.env.NODE_ENV + '.env' });
  const app = await NestFactory.create(AppModule);
  await app.listen(parseInt(process.env.SERVICIOS_PORT) | 3001);
}
bootstrap();
