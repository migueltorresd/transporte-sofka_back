import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { EnvioDomainEntity } from '../../../../../domain/entity';
import { SchemaTypes } from 'mongoose';

@Schema({ collection: 'Envios', versionKey: false, strict: false })
export class EnvioEntityMongo extends EnvioDomainEntity {
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  id: string;

  @Prop({ required: true })
  usuarioId: string;

  @Prop({ required: false })
  fecha: number;

  @Prop({ required: true })
  origen: string;

  @Prop({ required: true })
  destino: string;

  @Prop({ required: true })
  peso: number;

  @Prop({ required: true })
  costo: number;

  @Prop({ required: false })
  cancelado: boolean;
}

export const EnvioSchema = SchemaFactory.createForClass(EnvioEntityMongo);
