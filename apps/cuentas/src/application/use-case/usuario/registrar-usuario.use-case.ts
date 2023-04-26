// Librerias
import { Observable, tap } from 'rxjs';
import * as crypto from 'crypto';

// Servicios de dominio
import { IUsuarioDomainService } from '../../../domain/service/';

// Entidades
import { IUsuarioDomain, UsuarioDomainEntity } from '../../../domain/entity/';

// DTO's
import { UsuarioDto } from '../../../domain/dto';

// Validador
import { validarUsuario } from '../../../domain/validator';

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
    let dto: IUsuarioDomain = {
      ...usuarioData,
      apellidos: usuarioData.nombres.split(' ')[1],
      nombres: usuarioData.nombres.split(' ')[0],
    };
    dto = this.generarPassword(dto);
    return this.usuarioDomainService.crear(this.generarEntidad(dto)).pipe(
      tap((usuario) => {
        validarUsuario(usuario);
      }),
    );
  }

  private generarEntidad(dto: IUsuarioDomain): UsuarioDomainEntity {
    return validarUsuario(new UsuarioDomainEntity(dto));
  }

  private generarPassword(dto: IUsuarioDomain): IUsuarioDomain {
    dto.contraseña = crypto
      .createHmac('sha256', process.env.SECRET_KEY)
      .update(dto.contraseña)
      .digest('hex');
    return dto;
  }
}
