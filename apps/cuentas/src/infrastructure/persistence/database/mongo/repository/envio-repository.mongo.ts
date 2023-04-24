import { Injectable } from '@nestjs/common';
import { EnvioEntityMongo } from '../schema/envio.schema';
import { IBase } from './interface/base.interface';
import { Observable, from, map } from 'rxjs';
import { EnvioDomainEntity } from '../../../../../domain/entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DeleteResult } from 'mongodb';

@Injectable()
export class EnvioRepositoryMongo implements IBase<EnvioEntityMongo> {
  constructor(
    @InjectModel(EnvioEntityMongo.name)
    private readonly EnvioRepositoryMongo: Model<EnvioEntityMongo>,
  ) {}

  crear(modelo: EnvioDomainEntity): Observable<EnvioEntityMongo> {
    return from(this.EnvioRepositoryMongo.create(modelo));
  }

  actualizar(
    id: string,
    modelo: EnvioEntityMongo,
  ): Observable<EnvioEntityMongo> {
    return from(
      this.EnvioRepositoryMongo.findOneAndUpdate({ _id: id }, modelo).exec(),
    );
  }

  borrar(id: string): Observable<boolean> {
    return from(this.EnvioRepositoryMongo.deleteOne({ _id: id }).exec()).pipe(
      map((res: DeleteResult) => {
        if (res.deletedCount === 1) return true;
        else return false;
      }),
    );
  }

  obtenerPorId(id: string): Observable<EnvioEntityMongo> {
    return from(this.EnvioRepositoryMongo.findOne({ _id: id }).exec());
  }

  obtenerTodos(): Observable<EnvioEntityMongo[]> {
    return from(this.EnvioRepositoryMongo.find().exec());
  }
}
