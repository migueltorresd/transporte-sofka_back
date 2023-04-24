import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './config';
import { SchemasMongo } from './schema';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    MongooseModule.forFeature([{ name: 'Boleto', schema: SchemasMongo[0] }]),
  ],
  controllers: [],
  providers: [],
})
export class MongoModule {}
