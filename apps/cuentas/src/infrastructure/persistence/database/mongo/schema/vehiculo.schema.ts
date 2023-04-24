import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { VehiculoDomainEntity } from '../../../../../domain/entity';
import { SchemaTypes } from 'mongoose';

@Schema({ collection: 'Vehiculos', versionKey: false, strict: false })
export class VehiculoEntityMongo extends VehiculoDomainEntity {
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  id: string;

  @Prop({ required: true })
  conductorId: string;

  @Prop({ required: true })
  marca: string;

  @Prop({ required: true })
  modelo: string;

  @Prop({ required: true })
  tipo: string;

  @Prop({ required: true })
  placa: string;

  @Prop({ required: true })
  color: string;

  @Prop({ required: true })
  capacidad: number;

  @Prop({ required: true })
  disponible: boolean;
}

export const VehiculoSchema = SchemaFactory.createForClass(VehiculoEntityMongo);
