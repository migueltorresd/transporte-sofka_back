import { Injectable, BadRequestException } from '@nestjs/common';
import { UsuarioEntityMongo } from '../schema/usuario.schema';
import { IBase } from './interface/base.interface';
import { EMPTY, Observable, concatMap, expand, from, map } from 'rxjs';
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
    return from(
      this.UsuarioRepositoryMongo.findOne({ correo: modelo.correo }),
    ).pipe(
      concatMap((usuario: UsuarioEntityMongo) => {
        if (usuario === null) {
          return this.UsuarioRepositoryMongo.create(modelo);
        } else return 'error';
      }),
      concatMap((res: UsuarioEntityMongo | string) => {
        if (res !== 'error') {
          res = res as UsuarioEntityMongo;
          return this.generarNombredeUsuario(res._id);
        } else return 'error';
      }),
      map((res: UsuarioEntityMongo | string): UsuarioEntityMongo => {
        if (res === null) {
          throw new BadRequestException('Ya existe un usuario con este correo');
        } else return res as UsuarioEntityMongo;
      }),
    );
  }

  actualizar(
    id: string,
    modelo: UsuarioEntityMongo,
  ): Observable<UsuarioEntityMongo> {
    return from(
      this.UsuarioRepositoryMongo.findOneAndUpdate({ _id: id }, modelo, {
        new: true,
      }).exec(),
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
    contrasenna: string,
  ): Observable<UsuarioEntityMongo> {
    return from(
      this.UsuarioRepositoryMongo.findOne({
        correo: correo,
        contrasenna: contrasenna,
      }).exec(),
    );
  }

  generarNombredeUsuario(id: string): Observable<UsuarioEntityMongo> {
    let index = 1;
    let nombreUsuario = '';
    return from(this.UsuarioRepositoryMongo.findOne({ _id: id }).exec()).pipe(
      expand((usuario: UsuarioEntityMongo) => {
        if (usuario === null) {
          return EMPTY;
        }
        nombreUsuario =
          usuario.nombres.slice(0, index) + usuario.apellidos.split(' ')[0];
        index++;
        return this.UsuarioRepositoryMongo.findOne({
          nombreUsuario: nombreUsuario,
        }).exec();
      }),
      concatMap(() => {
        return from(
          this.UsuarioRepositoryMongo.findOneAndUpdate(
            { _id: id },
            { $set: { nombreUsuario: nombreUsuario } },
            { new: true },
          ).exec(),
        );
      }),
    );
  }
}
