// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IEnvioDomainService } from '../../../domain/service';

// Entidades
import { EnvioDomainEntity } from '../../../domain/entity';

// DTO's
import { EnvioDto } from '../../../domain/dto';

/**
 * Este metodo permite Actualizar un envio
 * Recibe un conjunto de datos de envio como parametros de entrada
 * retorna una copia de la nueva entidad creada
 *
 * @export
 * @class ActualizarEnvioUseCase
 */
export class ActualizarEnvioUseCase {
  constructor(
    private readonly envioDomainService: IEnvioDomainService<EnvioDomainEntity>,
  ) {}

  execute(id: string, envioData: EnvioDto): Observable<EnvioDomainEntity> {
    return this.envioDomainService.actualizar(id, envioData);
  }
}
