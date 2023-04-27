// Librerias
import { Observable } from 'rxjs';
import * as crypto from 'crypto';

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
    if (usuarioData.nombres) {
      let dto: IUsuarioDomain = {
        ...usuarioData,
        apellidos: this.capitalizePrimeraLetra(
          usuarioData.nombres.split(' ')[1],
        ),
        nombres: this.capitalizePrimeraLetra(usuarioData.nombres.split(' ')[0]),
      };
      if (dto.contrasenna) dto = this.generarContraseña(dto);
      return this.usuarioDomainService.actualizar(id, dto);
    } else {
      let dto = usuarioData;
      if (dto.contrasenna) dto = this.generarContraseña(dto as IUsuarioDomain);
      return this.usuarioDomainService.actualizar(id, dto as IUsuarioDomain);
    }
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
