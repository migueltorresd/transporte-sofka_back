import { Injectable } from "@nestjs/common";
import {
    MongooseModuleOptions,
    MongooseOptionsFactory,
  } from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: 'mongodb://mongo:QVdQVY26WbFtd79T6qky@containers-us-west-120.railway.app:7177',
      dbName: 'cuentas',
    };
  }
}