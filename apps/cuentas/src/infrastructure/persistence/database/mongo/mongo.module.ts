import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './config';
import { SchemasMongo } from './schema';
import { UsuarioServiceMongo } from './service';
import { UsuarioRepositoryMongo } from './repository';

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
  providers: [
    MongooseConfigService,
    UsuarioServiceMongo,
    UsuarioRepositoryMongo,
  ],
  exports: [UsuarioServiceMongo, UsuarioRepositoryMongo],
})
export class MongoModule {}
