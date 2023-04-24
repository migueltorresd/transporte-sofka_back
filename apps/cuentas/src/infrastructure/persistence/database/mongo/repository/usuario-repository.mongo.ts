import { Injectable } from "@nestjs/common";
import { UsuarioSchema } from "../schema/usuario.schema";
import { IBase } from "./interface/base.interface";
import { Observable, from } from "rxjs";
import { UsuarioDomainEntity } from "apps/cuentas/src/domain";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class UsuarioRepositoryMongo 
  implements IBase<UsuarioSchema> {
    constructor(
        @InjectModel(UsuarioSchema.name)
        private readonly UsuarioRepositoryMongo: Model<UsuarioSchema>
    ) { }
    crear(model: UsuarioDomainEntity): Observable<UsuarioSchema> {
        return from(this.UsuarioRepositoryMongo.create(model));
    }
    actualizar(model: UsuarioSchema): Observable<UsuarioSchema> {
        return from(this.UsuarioRepositoryMongo.findOneAndUpdate)
    }
    borrar(id: string): Observable<UsuarioSchema> {
        throw new Error("Method not implemented.");
    }
    obtenerPorId(id: string): Observable<UsuarioSchema> {
        throw new Error("Method not implemented.");
    }
    obtenerTodos(): Observable<UsuarioSchema[]> {
        throw new Error("Method not implemented.");
    }
}