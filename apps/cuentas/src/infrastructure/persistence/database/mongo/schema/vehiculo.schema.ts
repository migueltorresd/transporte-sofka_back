import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { VehiculoDomainEntity } from "apps/cuentas/src/domain";
import { SchemaTypes } from "mongoose";

@Schema({ collection: 'vehiculos',versionKey: false, strict: false })
export class VehiculoSchema extends VehiculoDomainEntity{
    @Prop({type: SchemaTypes.ObjectId,
        auto: true, })
    id: string;

    @Prop({ required: true})
    conductorId: string;

    @Prop({ required: true})
    marca: string;

    @Prop({ required: true})
    modelo: string;

    @Prop({ required: true})
    tipo: string;

    @Prop({ required: true})
    placa: string;

    @Prop({ required: true})
    color: string;

    @Prop({ required: true})
    capacidad: number;

    @Prop({ required: true})
    disponible: boolean;
}
const schema = SchemaFactory.createForClass(VehiculoSchema);