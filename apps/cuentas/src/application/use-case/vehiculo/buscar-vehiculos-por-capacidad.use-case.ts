// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IVehiculoDomainService } from '../../../domain/service';

// Entidades
import { VehiculoDomainEntity } from '../../../domain/entity';

/**
 * Este metodo permite realizar la busqueda de un Vehiculo segun su capacidad de carga
 * Recibe como parametro un dato tipo number con el valor de carga requerido
 * en caso de no encontrar una entidad asociada se devuelve un error tipo "not found"
 * El metodo retorna la entidad que coincida con el criterio dado
 *
 * @export
 * @class BuscarVehiculosPorIdUseCase
 */
export class BuscarVehiculosPorCapacidadUseCase {
  constructor(
    private readonly vehiculosDomainService: IVehiculoDomainService<VehiculoDomainEntity>,
  ) {}

  execute(capacidad: number): Observable<VehiculoDomainEntity[]> {
    return this.vehiculosDomainService.obtenerPorCapacidad(capacidad);
  }
}
