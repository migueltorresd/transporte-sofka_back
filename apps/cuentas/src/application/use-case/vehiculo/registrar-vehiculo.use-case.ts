// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IVehiculoDomainService } from '../../../domain/service';

// Entidades
import { IVehiculoDomain, VehiculoDomainEntity } from '../../../domain/entity';

// DTO's
import { VehiculoDto } from '../../../domain/dto';

// Validador
import { validarVehiculo } from '../../../domain/validator';

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

  execute(vehiculoData: VehiculoDto): Observable<VehiculoDomainEntity> {
    //TODO: terminar de implementar caso de uso
    return this.vehiculoDomainService.crear(this.generarEntidad(vehiculoData));
  }

  private generarEntidad(dto: IVehiculoDomain): VehiculoDomainEntity {
    return validarVehiculo(new VehiculoDomainEntity(dto));
  }
}
