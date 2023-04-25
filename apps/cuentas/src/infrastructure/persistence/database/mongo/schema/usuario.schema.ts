import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UsuarioDomainEntity } from '../../../../../domain/entity';

@Schema({ collection: 'Usuarios', versionKey: false, strict: false })
export class UsuarioEntityMongo extends UsuarioDomainEntity {
  @Prop({ required: false })
  nombreUsuario: string;

  @Prop({ required: true })
  contraseña: string;

  @Prop({ required: true })
  nombres: string;

  @Prop({ required: true })
  apellidos: string;

  @Prop({ required: true })
  dni: string;

  @Prop({ required: true })
  correo: string;

  @Prop({ required: true })
  telefono: string;

  @Prop({ required: true })
  rol: number;
}

export const UsuarioSchema = SchemaFactory.createForClass(UsuarioEntityMongo);
