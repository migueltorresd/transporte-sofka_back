import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './config';
import { SchemasMongo, SchemasNamesMongo } from './schema';
import { RepositoriesMongo } from './repository';
import { ServicesMongo } from './service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({ secret: process.env.SECRET_KEY }),
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    MongooseModule.forFeature([
      { name: SchemasNamesMongo[0].name, schema: SchemasMongo[0] },
      { name: SchemasNamesMongo[1].name, schema: SchemasMongo[1] },
      { name: SchemasNamesMongo[2].name, schema: SchemasMongo[2] },
    ]),
  ],
  controllers: [],
  providers: [...RepositoriesMongo, ...ServicesMongo],
  exports: [...RepositoriesMongo, ...ServicesMongo],
})
export class MongoModule {}
