import { Injectable } from '@nestjs/common';
import { VehiculoServiceMongo } from '../persistence/database/mongo/service';

@Injectable()
export class VehiculoService extends VehiculoServiceMongo {}
