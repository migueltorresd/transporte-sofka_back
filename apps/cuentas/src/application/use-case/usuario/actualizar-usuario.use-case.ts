// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IUsuarioDomainService } from '../../../domain/service/';

// Entidades
import { UsuarioDomainEntity } from '../../../domain/entity/';

/**
 * Este metodo permite modificar la informacion del usuario con el ID dado, almacenada en la DB
 * En caso de no existir el Id provisto se retorna un mensaje de error tipo "not found"
 * Se debe dar como argumento el usuarioId para buscar, y el conjunto de datos nuevo para hacer la actualizacion
 * Retorna la entidad actualizada.
 *
 * @export
 * @class ActualizarUsuarioUseCase
 */
export class ActualizarUsuarioUseCase {
  constructor(
    private readonly usuarioDomainService: IUsuarioDomainService<UsuarioDomainEntity>,
  ) {}

  execute(
    usuarioId: string,
    usuarioData: UsuarioDomainEntity,
  ): Observable<UsuarioDomainEntity> {
    //TODO: terminar de implementar caso de uso
    return this.usuarioDomainService.actualizar(usuarioId, usuarioData);
  }
}
