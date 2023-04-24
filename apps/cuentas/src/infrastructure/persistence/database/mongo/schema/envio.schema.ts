import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { EnvioDomainEntity } from "apps/cuentas/src/domain";
import { SchemaTypes } from "mongoose";

@Schema({ collection: 'envios',versionKey: false, strict: false })
export class EnvioSchema extends EnvioDomainEntity{
    @Prop({type: SchemaTypes.ObjectId,
        auto: true, })
    id: string;

    @Prop({ required: false})
    fecha: Date;

    @Prop({ required: true})
    usuarioId: string;

    @Prop({ required: true})
    origen: string;

    @Prop({ required: true})
    destino: string;

    @Prop({ required: true})
    peso: number;

    @Prop({ required: true})
    costo: number;

    @Prop({ required: false})
    cancelado: boolean;
}
const schema = SchemaFactory.createForClass(EnvioSchema);