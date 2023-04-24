// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IVehiculoDomainService } from '../../../domain/service';

// Entidades
import { VehiculoDomainEntity } from '../../../domain/entity';

/**
 * Este metodo permite Registrar un nuevo vehiculo y almacenar sus datos en la DB
 * Recibe un conjunto de datos de Vehiculo como parametros de entrada
 * retorna una copia de la nueva entidad creada
 *
 * @export
 * @class RegistrarVehiculoUseCase
 */
export class RegistrarVehiculoUseCase {
  constructor(
    private readonly vehiculoDomainService: IVehiculoDomainService<VehiculoDomainEntity>,
  ) {}

  execute(
    vehiculoData: VehiculoDomainEntity,
  ): Observable<VehiculoDomainEntity> {
    //TODO: terminar de implementar caso de uso
    return;
  }
}
