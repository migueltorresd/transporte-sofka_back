import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { BoletoDomainEntity } from "apps/servicios/src/domain";
import { SchemaTypes } from "mongoose";

@Schema({ collection: 'boletos',versionKey: false, strict: false })
export class BoletoSchema extends BoletoDomainEntity{
    @Prop({type: SchemaTypes.ObjectId,
        auto: true, })
    id: string;

    @Prop({ required: true})
    envioId: string;

    @Prop({ required: true})
    usuarioId: string;

    @Prop({ required: true})
    conductorId: string;

    @Prop({ required: true})
    vehiculoId: string;

    @Prop({ required: false})
    fecha: Date;

    @Prop({ required: false})
    completado: boolean;
}
const schema = SchemaFactory.createForClass(BoletoSchema);