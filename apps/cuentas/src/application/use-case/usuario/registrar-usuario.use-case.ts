// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IUsuarioDomainService } from '../../../domain/service/';

// Entidades
import { IUsuarioDomain, UsuarioDomainEntity } from '../../../domain/entity/';

// DTO's
import { UsuarioDto } from '../../../domain/dto';

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

  execute(usuarioData: UsuarioDto): Observable<UsuarioDomainEntity> {
    //TODO: terminar de implementar caso de uso
    const dto = {
      ...usuarioData,
      apellidos: usuarioData.nombres.split(' ')[1],
      correo: usuarioData.email,
    } as IUsuarioDomain;
    dto.nombres = usuarioData.nombres.split(' ')[0];
    return this.usuarioDomainService.crear(new UsuarioDomainEntity(dto));
  }
}
