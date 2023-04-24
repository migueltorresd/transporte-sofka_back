// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IVehiculoDomainService } from '../../../domain/service';

// Entidades
import { VehiculoDomainEntity } from '../../../domain/entity';

/**
 * Este metodo permite realizar la busqueda de un Vehiculo mediante un ID unico
 * Recibe como parametro un dato tipo string con el id de vehiculo buscado
 * en caso de no encontrar una entidad asociada se devuelve un error tipo "not found"
 * El metodo retorna la entidad que coincida con el ID dado
 *
 * @export
 * @class BuscarVehiculoPorIdUseCase
 */
export class BuscarVehiculoPorIdUseCase {
  constructor(
    private readonly vehiculosDomainService: IVehiculoDomainService<VehiculoDomainEntity>,
  ) {}

  execute(id: string): Observable<VehiculoDomainEntity> {
    //TODO: terminar de implementar caso de uso
    return this.vehiculosDomainService.obtenerPorId(id);
  }
}
