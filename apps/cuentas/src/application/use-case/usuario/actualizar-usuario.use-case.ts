// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IUsuarioDomainService } from '../../../domain/service/';

// Entidades
import { IUsuarioDomain, UsuarioDomainEntity } from '../../../domain/entity/';

// DTO's
import { UsuarioDto } from '../../../domain/dto';

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
    id: string,
    usuarioData: UsuarioDto,
  ): Observable<UsuarioDomainEntity> {
    //TODO: terminar de implementar caso de uso
  const dto = {
      ...usuarioData,
      apellidos: usuarioData.nombres.split(' ')[1],
      nombres: usuarioData.nombres.split(' ')[0]
    } as IUsuarioDomain;
    return this.usuarioDomainService.actualizar(id, dto);
  }
}
