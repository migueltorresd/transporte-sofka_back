// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IUsuarioDomainService } from '../../../domain/service';

// Entidades
import { UsuarioDomainEntity } from '../../../domain/entity';


/**
 * Este metodo permite recuperar el listado general de usuarios almacenados en la DB
 * Retorna todos los usuarios almacenados, en caso de no haber usuarios registrados devuelve un error tipo "not found"
 * No recibe ningun paramentro de entrada
 *
 * @export
 * @class BuscarUsuariosUseCase
 */
export class BuscarUsuariosUseCase {
  constructor(
    private readonly usuarioDomainService: IUsuarioDomainService<UsuarioDomainEntity[]>,
  ) {}

  execute(usuarioId: string): Observable<UsuarioDomainEntity> {
    //TODO: terminar de implementar caso de uso
    return;
  }
}
