import { Injectable } from '@nestjs/common';
import { BoletoEntityMongo } from '../schema/boleto.schema';
import { IBase } from './interface/base.interface';
import { Observable, from, map } from 'rxjs';
import { BoletoDomainEntity } from '../../../../../domain/entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DeleteResult } from 'mongodb';

@Injectable()
export class BoletoRepositoryMongo implements IBase<BoletoEntityMongo> {
  constructor(
    @InjectModel(BoletoEntityMongo.name)
    private readonly BoletoRepositoryMongo: Model<BoletoEntityMongo>,
  ) {}

  crear(modelo: BoletoDomainEntity): Observable<BoletoEntityMongo> {
    return from(this.BoletoRepositoryMongo.create(modelo));
  }

  actualizar(
    id: string,
    modelo: BoletoEntityMongo,
  ): Observable<BoletoEntityMongo> {
    return from(
      this.BoletoRepositoryMongo.findOneAndUpdate({ _id: id }, modelo, {
        new: true,
      }).exec(),
    );
  }

  borrar(id: string): Observable<boolean> {
    return from(this.BoletoRepositoryMongo.deleteOne({ _id: id }).exec()).pipe(
      map((res: DeleteResult) => {
        if (res.deletedCount === 1) return true;
        else return false;
      }),
    );
  }

  obtenerPorId(id: string): Observable<BoletoEntityMongo> {
    return from(this.BoletoRepositoryMongo.findOne({ _id: id }).exec());
  }

  obtenerTodos(): Observable<BoletoEntityMongo[]> {
    return from(this.BoletoRepositoryMongo.find().exec());
  }
}
