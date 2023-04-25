import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './config';
import { SchemasMongo, SchemasNamesMongo } from './schema';
import { RepositoriesMongo } from './repository';
import { ServicesMongo } from './service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    MongooseModule.forFeature([
      { name: SchemasNamesMongo[0].name, schema: SchemasMongo[0] },
    ]),
  ],
  controllers: [],
  providers: [...RepositoriesMongo, ...ServicesMongo],
  exports: [...RepositoriesMongo, ...ServicesMongo],
})
export class MongoModule {}
