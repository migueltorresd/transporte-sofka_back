// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IVehiculoDomainService } from '../../../domain/service';

// Entidades
import { VehiculoDomainEntity } from '../../../domain/entity';

// DTO's
import { VehiculoDto } from '../../../domain/dto';

/**
 * Este metodo permite Actualizar la informacion de un Vehiculo
 * Recibe un conjunto de datos de Vehiculo como parametros de entrada
 * retorna una copia de la nueva entidad creada
 *
 * @export
 * @class ActualizarVehiculoUseCase
 */
export class ActualizarVehiculoUseCase {
  constructor(
    private readonly vehiculoDomainService: IVehiculoDomainService<VehiculoDomainEntity>,
  ) {}

  execute(
    id: string,
    vehiculoData: VehiculoDto,
  ): Observable<VehiculoDomainEntity> {
    //TODO: terminar de implementar caso de uso
    return this.vehiculoDomainService.actualizar(id, vehiculoData);
  }
}
