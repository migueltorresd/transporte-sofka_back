// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IUsuarioDomainService } from '../../../domain/service/';

// Entidades
import { UsuarioDomainEntity } from '../../../domain/entity/';

/**
 * Este metodo permite realizar la busqueda de un usuario mediante ID unico
 * Recibe como parametro un dato tipo string con id de usuario
 * en caso de no encontrar una entidad asociada se devuelve un error tipo "not found"
 * El metodo retorna la entidad que coincida con el ID dado
 *
 * @export
 * @class BuscarUsuarioPorIdUseCase
 */
export class BuscarUsuarioPorIdUseCase {
  constructor(
    private readonly usuarioDomainService: IUsuarioDomainService<UsuarioDomainEntity>,
  ) {}

  execute(id: string): Observable<UsuarioDomainEntity> {
    return this.usuarioDomainService.obtenerPorId(id);
  }
}
