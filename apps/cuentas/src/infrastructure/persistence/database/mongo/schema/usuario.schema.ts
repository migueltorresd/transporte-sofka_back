import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UsuarioDomainEntity } from '../../../../../domain/entity';
import { SchemaTypes } from 'mongoose';

@Schema({ collection: 'Usuarios', versionKey: false, strict: false })
export class UsuarioEntityMongo extends UsuarioDomainEntity {
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  id: string;

  @Prop({ required: false })
  nombreUsuario: string;

  @Prop({ required: true })
  contraseña: string;

  @Prop({ required: true })
  nombres: string;

  @Prop({ required: true })
  apellidos: string;

  @Prop({ required: false })
  dni: string;

  @Prop({ required: true })
  correo: string;

  @Prop({ required: false })
  telefono: string;

  @Prop({ required: true })
  rol: number;
}

export const UsuarioSchema = SchemaFactory.createForClass(UsuarioEntityMongo);
