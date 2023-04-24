import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './config';
import { SchemasMongo } from './schema';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    MongooseModule.forFeature([
      { name: 'Envio', schema: SchemasMongo[0] },
      { name: 'Usuario', schema: SchemasMongo[1] },
      { name: 'Vehiculo', schema: SchemasMongo[2] },
    ]),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class MongoModule {}
