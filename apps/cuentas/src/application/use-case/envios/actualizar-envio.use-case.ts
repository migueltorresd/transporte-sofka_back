// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IEnvioDomain } from '../../../domain/service';

// Entidades
import { EnvioDomainEntity } from '../../../domain/entity';

/**
 * Este metodo permite Actualizar un envio
 * Recibe un conjunto de datos de envio como parametros de entrada
 * retorna una copia de la nueva entidad creada
 *
 * @export
 * @class RegistrarEnvioUseCase
 */
export class ActualizarEnvioUseCase {
  constructor(
    private readonly envioDomainService: IEnvioDomain<EnvioDomainEntity>,
  ) {}

  execute(envioData: EnvioDomainEntity): Observable<EnvioDomainEntity> {
    //TODO: terminar de implementar caso de uso
    return;
  }
}
