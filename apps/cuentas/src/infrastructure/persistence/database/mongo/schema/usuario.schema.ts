import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { UsuarioDomainEntity } from "apps/cuentas/src/domain";
import { SchemaTypes } from "mongoose";
import { version } from "os";

@Schema({ collection: 'usuarios',versionKey: false, strict: false })
export class UsuarioSchema extends UsuarioDomainEntity{
    @Prop({type: SchemaTypes.ObjectId,
        auto: true, })
    id: string;

    @Prop({ required: false})
    nombreUsuario: string;

    @Prop({ required: true})
    password: string;

    @Prop({ required: true})
    nombres: string;

    @Prop({ required: true})
    apellidos: string;

    @Prop({ required: false})
    dni: string;

    @Prop({ required: true})
    correo: string;

    @Prop({ required: false})
    telefono: string;

    @Prop({ required: true})
    esConductor: boolean;
}

const schema = SchemaFactory.createForClass(UsuarioSchema);