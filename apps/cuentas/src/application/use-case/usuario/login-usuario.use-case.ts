// Librerias
import { Observable } from 'rxjs';
import * as crypto from 'crypto';

// Servicios de dominio
import { IUsuarioDomainService } from '../../../domain/service';

// Entidades
import { UsuarioDomainEntity } from '../../../domain/entity';

/**
 * Este metodo permite al usuario que presente las credenciales correctas, acceder a su cuenta en la aplicacion
 * recibe como parametros de entrada un valor de tipo string con el correo electronico y otro valor tipo string con la contraseña
 * Retorna la entidad que coincida con los datos buscados
 * en caso de no existir o de no ser credenciales validas, devuelve mensajes de error tipo "not found" o "forbiden"
 *
 * @export
 * @class LoginUsuarioUseCase
 */
export class LoginUsuarioUseCase {
  constructor(
    private readonly usuarioDomainService: IUsuarioDomainService<UsuarioDomainEntity>,
  ) {}

  execute(correo: string, contraseña: string): Observable<string> {
    return this.usuarioDomainService.loginUsuario(
      correo,
      this.generarPassword(contraseña),
    );
  }

  private generarPassword(contraseña: string): string {
    const hash = crypto
      .createHmac('sha256', process.env.SECRET_KEY)
      .update(contraseña)
      .digest('hex');
    return hash;
  }
}
