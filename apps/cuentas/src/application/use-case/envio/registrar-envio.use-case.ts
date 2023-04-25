// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IEnvioDomainService } from '../../../domain/service';

// Entidades
import { EnvioDomainEntity } from '../../../domain/entity';

// DTO's
import { EnvioDto } from '../../../domain/dto';

/**
 * Este metodo permite Registrar un nuevo envio y almacenar sus datos en la DB
 * Recibe un conjunto de datos de envio como parametros de entrada
 * retorna una copia de la nueva entidad creada
 *
 * @export
 * @class RegistrarEnvioUseCase
 */
export class RegistrarEnvioUseCase {
  constructor(
    private readonly envioDomainService: IEnvioDomainService<EnvioDomainEntity>,
  ) {}

  execute(envioData: EnvioDto): Observable<EnvioDomainEntity> {
    //TODO: terminar de implementar caso de uso
    return this.envioDomainService.crear(new EnvioDomainEntity(envioData));
  }
}
