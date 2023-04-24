import { Injectable } from "@nestjs/common";
import { MongooseOptionsFactory, MongooseModuleOptions } from "@nestjs/mongoose";

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
    createMongooseOptions(): MongooseModuleOptions {
        return {
        uri: 'mongodb://mongo:Jtk23l6i3HpSV1TrU0GT@containers-us-west-24.railway.app:7017',
        dbName: 'servicios',
        };
    }
}