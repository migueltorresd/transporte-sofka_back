import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BoletoDomainEntity } from 'apps/servicios/src/domain';

@Schema({ collection: 'Boletos', versionKey: false, strict: false })
export class BoletoEntityMongo extends BoletoDomainEntity {
  @Prop({ required: true })
  envioId: string;

  @Prop({ required: true })
  usuarioId: string;

  @Prop({ required: false })
  conductorId?: string;

  @Prop({ required: false })
  vehiculoId?: string;

  @Prop({ required: false })
  fecha: number;

  @Prop({ required: false })
  completado: boolean;
}
export const BoletoSchema = SchemaFactory.createForClass(BoletoEntityMongo);
