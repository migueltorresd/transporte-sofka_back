// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IUsuarioDomainService } from '../../../domain/service/';

// Entidades
import { UsuarioDomainEntity } from '../../../domain/entity/';

/**
 * Este metodo permite eliminar el usuario correspondiente al Id provisto
 * En caso de no existir el id provisto se devuelve un error tipo "not found"
 * Recibe como argumento el usuarioId de tipo string para buscar
 * Retorna una copia de la entidad eliminada
 *
 * @export
 * @class BorrarUsuarioUseCase
 */
export class BorrarUsuarioUseCase {
  constructor(
    private readonly usuarioDomainService: IUsuarioDomainService<UsuarioDomainEntity>,
  ) {}

  execute(usuarioId: string): Observable<UsuarioDomainEntity> {
    //TODO: VER SI ES REALMENTE NECESARIO IMPLEMENTARLO!!

    return;
  }
}
