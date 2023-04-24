// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IVehiculoDomainService } from '../../../domain/service';

// Entidades
import { VehiculoDomainEntity } from '../../../domain/entity';

/**
 * Este metodo permite recuperar el listado general de Vehiculos almacenados en la DB
 * Retorna todos los vehiculos almacenados, en caso de no haber registros devuelve un error tipo "not found"
 * No recibe ningun paramentro de entrada
 *
 * @export
 * @class BuscarVehiculosUseCase
 */
export class BuscarVehiculosUseCase {
  constructor(
    private readonly vehiculosDomainService: IVehiculoDomainService<VehiculoDomainEntity>,
  ) {}

  execute(): Observable<VehiculoDomainEntity[]> {
    //TODO: terminar de implementar caso de uso
    return this.vehiculosDomainService.obtenerTodos();
  }
}
