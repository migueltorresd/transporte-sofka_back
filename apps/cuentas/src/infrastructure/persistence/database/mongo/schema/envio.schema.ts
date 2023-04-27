import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { EnvioDomainEntity } from '../../../../../domain/entity';

@Schema({ collection: 'Envios', versionKey: false, strict: false })
export class EnvioEntityMongo extends EnvioDomainEntity {
  @Prop({ required: true })
  usuarioId: string;

  @Prop({ required: true })
  fecha: number;

  @Prop({ required: true })
  origen: string;

  @Prop({ required: true })
  destino: string;

  @Prop({ required: true })
  peso: number;

  @Prop({ required: false })
  estimado: number;

  @Prop({ required: false })
  costo: number;

  @Prop({ required: false })
  cancelado: boolean;
}

export const EnvioSchema = SchemaFactory.createForClass(EnvioEntityMongo);
