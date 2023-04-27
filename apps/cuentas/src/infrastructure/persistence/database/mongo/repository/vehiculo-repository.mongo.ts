import { Injectable } from '@nestjs/common';
import { VehiculoEntityMongo } from '../schema/vehiculo.schema';
import { IBase } from './interface/base.interface';
import { Observable, from, map } from 'rxjs';
import { VehiculoDomainEntity } from '../../../../../domain/entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DeleteResult } from 'mongodb';

@Injectable()
export class VehiculoRepositoryMongo implements IBase<VehiculoEntityMongo> {
  constructor(
    @InjectModel(VehiculoEntityMongo.name)
    private readonly VehiculoRepositoryMongo: Model<VehiculoEntityMongo>,
  ) {}

  crear(modelo: VehiculoDomainEntity): Observable<VehiculoEntityMongo> {
    return from(this.VehiculoRepositoryMongo.create(modelo));
  }

  actualizar(
    id: string,
    modelo: VehiculoEntityMongo,
  ): Observable<VehiculoEntityMongo> {
    return from(
      this.VehiculoRepositoryMongo.findOneAndUpdate({ _id: id }, modelo, {
        new: true,
      }).exec(),
    );
  }

  borrar(id: string): Observable<boolean> {
    return from(
      this.VehiculoRepositoryMongo.deleteOne({ _id: id }).exec(),
    ).pipe(
      map((res: DeleteResult) => {
        if (res.deletedCount === 1) return true;
        else return false;
      }),
    );
  }

  obtenerPorId(id: string): Observable<VehiculoEntityMongo> {
    return from(this.VehiculoRepositoryMongo.findOne({ _id: id }).exec());
  }

  obtenerTodos(): Observable<VehiculoEntityMongo[]> {
    return from(this.VehiculoRepositoryMongo.find().exec());
  }

  obtenerPorCapacidad(capacidad: number): Observable<VehiculoEntityMongo[]> {
    return from(
      this.VehiculoRepositoryMongo.find({ capacidad: capacidad }).exec(),
    );
  }
}
