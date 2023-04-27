import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: process.env.MONGO_DB_HOST,
      dbName: process.env.MONGO_DB_CUENTAS_COLLECTION,
      w: 'majority',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
  }
}
