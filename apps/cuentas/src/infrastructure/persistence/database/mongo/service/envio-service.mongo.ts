import { Injectable } from '@nestjs/common';
import { IEnvioDomainService } from 'apps/cuentas/src/domain';
import { Observable } from 'rxjs';
import { EnvioRepositoryMongo } from '../repository';
import { EnvioEntityMongo } from '../schema';

@Injectable()
export class EnvioServiceMongo
  implements IEnvioDomainService<EnvioEntityMongo>
{
  constructor(private readonly repository: EnvioRepositoryMongo) {}

  crear(modelo: EnvioEntityMongo): Observable<EnvioEntityMongo> {
    return this.repository.crear(modelo);
  }

  actualizar(
    id: string,
    modelo: EnvioEntityMongo,
  ): Observable<EnvioEntityMongo> {
    return this.repository.actualizar(id, modelo);
  }

  obtenerTodos(): Observable<EnvioEntityMongo[]> {
    return this.repository.obtenerTodos();
  }

  obtenerPorId(id: string): Observable<EnvioEntityMongo> {
    return this.repository.obtenerPorId(id);
  }
}
