import { Injectable } from '@nestjs/common';
import { UsuarioEntityMongo } from '../schema/usuario.schema';
import { IBase } from './interface/base.interface';
import { Observable, from, map } from 'rxjs';
import { UsuarioDomainEntity } from '../../../../../domain/entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DeleteResult } from 'mongodb';

@Injectable()
export class UsuarioRepositoryMongo implements IBase<UsuarioEntityMongo> {
  constructor(
    @InjectModel(UsuarioEntityMongo.name)
    private readonly UsuarioRepositoryMongo: Model<UsuarioEntityMongo>,
  ) {}

  crear(modelo: UsuarioDomainEntity): Observable<UsuarioEntityMongo> {
    return from(this.UsuarioRepositoryMongo.create(modelo));
  }

  actualizar(
    id: string,
    modelo: UsuarioEntityMongo,
  ): Observable<UsuarioEntityMongo> {
    return from(
      this.UsuarioRepositoryMongo.findOneAndUpdate({ _id: id }, modelo).exec(),
    );
  }

  borrar(id: string): Observable<boolean> {
    return from(this.UsuarioRepositoryMongo.deleteOne({ _id: id }).exec()).pipe(
      map((res: DeleteResult) => {
        if (res.deletedCount === 1) return true;
        else return false;
      }),
    );
  }

  obtenerPorId(id: string): Observable<UsuarioEntityMongo> {
    return from(this.UsuarioRepositoryMongo.findOne({ _id: id }).exec());
  }

  obtenerTodos(): Observable<UsuarioEntityMongo[]> {
    return from(this.UsuarioRepositoryMongo.find().exec());
  }

  obtenerPorCorreo(correo: string): Observable<UsuarioEntityMongo> {
    return from(this.UsuarioRepositoryMongo.findOne({ correo: correo }).exec());
  }

  obtenerPorDni(dni: string): Observable<UsuarioEntityMongo> {
    return from(this.UsuarioRepositoryMongo.findOne({ dni: dni }).exec());
  }

  loginUsuario(
    correo: string,
    contraseña: string,
  ): Observable<UsuarioEntityMongo> {
    return from(
      this.UsuarioRepositoryMongo.findOne({
        correo: correo,
        contraseña: contraseña,
      }).exec(),
    );
  }
}
