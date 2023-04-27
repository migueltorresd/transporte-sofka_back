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
    let dto: IUsuarioDomain = {
      ...usuarioData,
      apellidos: this.capitalizePrimeraLetra(usuarioData.nombres.split(' ')[1]),
      nombres: this.capitalizePrimeraLetra(usuarioData.nombres.split(' ')[0]),
    };
    dto = this.generarContraseña(dto);
    return this.usuarioDomainService.crear(this.generarEntidad(dto)).pipe(
      tap((usuario: UsuarioDomainEntity) => {
        if (usuario !== null) {
          validarUsuario(usuario);
        }
      }),
    );
  }

  private generarEntidad(dto: IUsuarioDomain): UsuarioDomainEntity {
    return validarUsuario(new UsuarioDomainEntity(dto));
  }

  private capitalizePrimeraLetra(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private generarContraseña(dto: IUsuarioDomain): IUsuarioDomain {
    dto.contrasenna = crypto
      .createHmac('sha256', process.env.SECRET_KEY)
      .update(dto.contrasenna)
      .digest('hex');
    return dto;
  }
}
