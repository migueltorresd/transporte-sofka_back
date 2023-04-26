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
 * @class GenerarNombreDeUsuarioUsuarioUseCase
 */
export class GenerarNombreDeUsuarioUsuarioUseCase {
  constructor(
    private readonly usuarioDomainService: IUsuarioDomainService<UsuarioDomainEntity>,
  ) {}

  execute(id: string): Observable<UsuarioDomainEntity> {
    return this.usuarioDomainService.generarNombredeUsuario(id);
  }
}
