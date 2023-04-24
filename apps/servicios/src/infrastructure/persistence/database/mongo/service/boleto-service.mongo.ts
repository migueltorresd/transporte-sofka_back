import { Injectable } from '@nestjs/common';
import { IBoletoDomainService } from '../../../../../domain/service';
import { Observable } from 'rxjs';
import { BoletoRepositoryMongo } from '../repository';
import { BoletoEntityMongo } from '../schema';

@Injectable()
export class BoletoServiceMongo
  implements IBoletoDomainService<BoletoEntityMongo>
{
  constructor(private readonly repository: BoletoRepositoryMongo) {}

  crear(modelo: BoletoEntityMongo): Observable<BoletoEntityMongo> {
    return this.repository.crear(modelo);
  }

  actualizar(
    id: string,
    modelo: BoletoEntityMongo,
  ): Observable<BoletoEntityMongo> {
    return this.repository.actualizar(id, modelo);
  }

  obtenerTodos(): Observable<BoletoEntityMongo[]> {
    return this.repository.obtenerTodos();
  }

  obtenerPorId(id: string): Observable<BoletoEntityMongo> {
    return this.repository.obtenerPorId(id);
  }
}
