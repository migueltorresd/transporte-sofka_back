import { Injectable } from '@nestjs/common';
import { EnvioServiceMongo } from '../persistence/database/mongo/service';

@Injectable()
export class EnvioService extends EnvioServiceMongo {}
