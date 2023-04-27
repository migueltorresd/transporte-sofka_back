import { BadRequestException, Injectable } from '@nestjs/common';
import { EnvioEntityMongo } from '../schema/envio.schema';
import { IBase } from './interface/base.interface';
import { Observable, concatMap, from, map, of, zip } from 'rxjs';
import { EnvioDomainEntity, IEnvioDomain } from '../../../../../domain/entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DeleteResult } from 'mongodb';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { IGoogleResponse } from './interface/googleapi.response.interface';

@Injectable()
export class EnvioRepositoryMongo implements IBase<EnvioEntityMongo> {
  constructor(
    @InjectModel(EnvioEntityMongo.name)
    private readonly EnvioRepositoryMongo: Model<EnvioEntityMongo>,
    private readonly http: HttpService,
  ) {}

  crear(modelo: EnvioDomainEntity): Observable<EnvioEntityMongo> {
    return from(this.EnvioRepositoryMongo.create(modelo)).pipe(
      concatMap((res: EnvioEntityMongo) => {
        return this.calcularPorId(res._id);
      }),
    );
  }

  actualizar(
    id: string,
    modelo: Partial<IEnvioDomain>,
  ): Observable<EnvioEntityMongo> {
    return from(
      this.EnvioRepositoryMongo.findOneAndUpdate({ _id: id }, modelo, {
        new: true,
      }).exec(),
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

  calcularPorId(id: string): Observable<EnvioEntityMongo> {
    return from(this.EnvioRepositoryMongo.findOne({ _id: id }).exec()).pipe(
      concatMap((res: EnvioEntityMongo) => {
        const request =
          'https://maps.googleapis.com/maps/api/distancematrix/json?destinations=' +
          res.destino +
          '&origins=' +
          res.origen +
          '&language=es-419&key=' +
          process.env.GOOGLE_API_KEY;
        return zip(this.http.get(request), of(res));
      }),
      concatMap(([res, envio]: [AxiosResponse, EnvioEntityMongo]) => {
        const data = res.data as IGoogleResponse;
        if (data.rows[0].elements[0].status === 'OK' && envio) {
          const costo =
            this.calcularRecargoTiempo(
              data.rows[0].elements[0].duration.value,
            ) + this.calcularRecargoPeso(envio.peso);
          return this.actualizar(envio._id, {
            estimado: data.rows[0].elements[0].duration.value,
            costo: costo,
          });
        } else {
          this.borrar(envio._id).subscribe();
          throw new BadRequestException('Error al calcular el envio');
        }
      }),
    );
  }

  private calcularRecargoTiempo(x: number): number {
    const minutos = Math.floor(x / 60);
    const recargos = Math.floor(minutos / 5);
    const costo = recargos * 0.5;
    return costo;
  }

  private calcularRecargoPeso(x: number): number {
    const peso = Math.floor(x);
    const recargos = Math.floor(peso / 25);
    const costo = recargos * 2;
    return costo;
  }

  confirmarPorId(id: string): Observable<EnvioEntityMongo> {
    return from(
      this.EnvioRepositoryMongo.findOneAndUpdate(
        { _id: id },
        { cancelado: false },
        { new: true },
      ).exec(),
    );
  }
}
