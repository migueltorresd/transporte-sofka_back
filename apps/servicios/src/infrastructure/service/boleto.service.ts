import { Injectable } from '@nestjs/common';
import { BoletoServiceMongo } from '../persistence/database/mongo/service';

@Injectable()
export class BoletoService extends BoletoServiceMongo {}
