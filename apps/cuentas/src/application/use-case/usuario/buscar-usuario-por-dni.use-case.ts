// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IUsuarioDomainService } from '../../../domain/service/';

// Entidades
import { UsuarioDomainEntity } from '../../../domain/entity/';


/**
 * Este metodo permite realizar la busqueda de un usuario mediante su DNI
 * Recibe como parametro un dato tipo string con el valor de su documento de identidad
 * en caso de no encontrar una entidad asociada se devuelve un error tipo "not found"
 * El metodo retorna la entidad que coincida con el DNI dado
 *
 * @export
 * @class BuscarUsuarioPorDniUseCase
 */
export class BuscarUsuarioPorDniUseCase {
  constructor(
    private readonly usuarioDomainService: IUsuarioDomainService<UsuarioDomainEntity>,
  ) {}

  execute(usuarioId: string): Observable<UsuarioDomainEntity> {
    //TODO: terminar de implementar caso de uso
    return;
  }
}
