// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IUsuarioDomainService } from '../../../domain/service/';

// Entidades
import { UsuarioDomainEntity } from '../../../domain/entity/';

/**
 * Este metodo permite Registrar un nuevo usuario en la aplicacion y almacenar sus datos en la DB
 * Recibe un conjunto de datos de usuario como parametros de entrada
 * retorna una copia de la nueva entidad creada
 *
 * @export
 * @class RegistrarUsuarioUseCase
 */
export class RegistrarUsuarioUseCase {
  constructor(
    private readonly usuarioDomainService: IUsuarioDomainService<UsuarioDomainEntity>,
  ) {}

  execute(usuarioData: UsuarioDomainEntity): Observable<UsuarioDomainEntity> {
    //TODO: terminar de implementar caso de uso
    return this.usuarioDomainService.crear(usuarioData);
  }
}
