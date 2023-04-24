import { Injectable } from '@nestjs/common';
import { UsuarioServiceMongo } from '../persistence/database/mongo/service';

@Injectable()
export class UsuarioService extends UsuarioServiceMongo {}
