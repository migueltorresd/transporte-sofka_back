// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IUsuarioDomainService } from '../../../domain/service/';

// Entidades
import { UsuarioDomainEntity } from '../../../domain/entity/';

/**
 * Este metodo permite realizar la busqueda de un usuario mediante su correo electronico
 * Recibe como parametro un dato tipo string con la direccion de correo
 * en caso de no encontrar una entidad asociada se devuelve un error tipo "not found"
 * El metodo retorna la entidad que coincida con el correo dado
 *
 * @export
 * @class BuscarUsuarioPorCorreoCase
 */
export class BuscarUsuarioPorCorreoCase {
  constructor(
    private readonly usuarioDomainService: IUsuarioDomainService<UsuarioDomainEntity>,
  ) {}

  execute(usuarioId: string): Observable<UsuarioDomainEntity> {
    //TODO: terminar de implementar caso de uso
    return this.usuarioDomainService.obtenerPorCorreo(usuarioId);
  }
}
