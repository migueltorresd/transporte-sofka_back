import { Injectable } from '@nestjs/common';
import { IVehiculoDomainService } from '../../../../../domain/service';
import { Observable } from 'rxjs';
import { VehiculoRepositoryMongo } from '../repository';
import { VehiculoEntityMongo } from '../schema';

@Injectable()
export class VehiculoServiceMongo
  implements IVehiculoDomainService<VehiculoEntityMongo>
{
  constructor(private readonly repository: VehiculoRepositoryMongo) {}

  crear(modelo: VehiculoEntityMongo): Observable<VehiculoEntityMongo> {
    return this.repository.crear(modelo);
  }

  actualizar(
    id: string,
    modelo: VehiculoEntityMongo,
  ): Observable<VehiculoEntityMongo> {
    return this.repository.actualizar(id, modelo);
  }

  obtenerTodos(): Observable<VehiculoEntityMongo[]> {
    return this.repository.obtenerTodos();
  }

  obtenerPorId(id: string): Observable<VehiculoEntityMongo> {
    return this.repository.obtenerPorId(id);
  }

  obtenerPorCapacidad(capacidad: number): Observable<VehiculoEntityMongo[]> {
    return this.repository.obtenerPorCapacidad(capacidad);
  }
}
