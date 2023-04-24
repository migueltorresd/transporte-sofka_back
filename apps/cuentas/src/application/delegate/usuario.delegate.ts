// Librarias
import { Observable } from 'rxjs';

// Interfaces
import { IUseCase } from './interface/';

// Servicios
import { IUsuarioDomainService } from '../../../../cuentas/src/domain/service/';

// Entidades
import { UsuarioDomainEntity } from '../../../../cuentas/src/domain/entity/';

// Casos de uso
import {
  LoginUsuarioUseCase,
  BuscarUsuariosUseCase,
  BuscarUsuarioPorDniUseCase,
  BuscarUsuarioPorIdUseCase,
  ActualizarUsuarioUseCase,
  RegistrarUsuarioUseCase,
  //BorrarUsuarioUseCase,
} from '../use-case/usuario/';

/**
 * UsuarioDelegate hace una implementacion de la interface IUseCase
 * Esta implementacion delega la ejecucion de los metodos dados como argumento a la instancia de Delegate.
 * La función de este delegado es oficiar de mediador entre la capa de insfrastructura y la capa de aplicacion
 *
 * @export
 * @class UsuarioDelegate
 * @implements {IUseCase}
 */
export class UsuarioDelegate implements IUseCase {
  private delegate: IUseCase;

  /**
   * Crea una intancia de UsuarioDelegate
   * @param {IUsuarioDomainService<UsuarioDomainEntity>} usuarioDomainService
   * @memberof UsuarioDelegate
   */
  constructor(
    private readonly usuarioDomainService: IUsuarioDomainService<UsuarioDomainEntity>,
  ) {}

  /**
   * El metodo execute, acepta un numero arbitrario de argumentos los cuales ejecuta
   * devuelve un Observable<Response>
   *
   * @param {...any[]} args
   * @return {*}
   * @memberof UsuarioDelegate
   */
  execute(...args: any[]): Observable<Response> {
    return this.delegate.execute(...args);
  }

  /**
   * Metodo que realiza la ejecucion del caso de uso RegistrarUsuario
   *
   * @memberof UsuarioDelegate
   */
  toRegistrarUsuario(): void {
    this.delegate = new RegistrarUsuarioUseCase(this.usuarioDomainService);
  }

  /**
   * Metodo que realiza la ejecucion del caso de uso ActualizarUsuario
   *
   * @memberof UsuarioDelegate
   */
  toActualizarUsuario(): void {
    this.delegate = new ActualizarUsuarioUseCase(this.usuarioDomainService);
  }

  /**
   * Metodo que realiza la ejecucion del caso de uso BorrarUsuario
   *
   * @memberof UsuarioDelegate
   */
  /* toBorrarUsuario(): void {
    this.delegate = new BorrarUsuarioUseCase(this.usuarioDomainService);
  } */

  /**
   * Metodo que realiza la ejecucion del caso de uso BuscarUsuarioPorId
   *
   * @memberof UsuarioDelegate
   */
  toBuscarUsuarioPorId(): void {
    this.delegate = new BuscarUsuarioPorIdUseCase(this.usuarioDomainService);
  }

  /**
   * Metodo que realiza la ejecucion del caso de uso BuscarUsuarioPorDni
   *
   * @memberof UsuarioDelegate
   */
  toBuscarUsuarioPorDni(): void {
    this.delegate = new BuscarUsuarioPorDniUseCase(this.usuarioDomainService);
  }

  /**
   * Metodo que realiza la ejecucion del caso de uso BuscarUsuarioPorCorreo
   *
   * @memberof UsuarioDelegate
   */
  toBuscarUsuarioPorCorreo(): void {
    this.delegate = new BuscarUsuarioPorIdUseCase(this.usuarioDomainService);
  }

  /**
   * Metodo que realiza la ejecucion del caso de uso ObtenerTodos
   *
   * @memberof UsuarioDelegate
   */
  toBuscarTodos(): void {
    this.delegate = new BuscarUsuariosUseCase(this.usuarioDomainService);
  }

  /**
   * Metodo que realiza la ejecucion del caso de uso LoginUsuario
   *
   * @memberof UsuarioDelegate
   */
  toLoginUsuario(): void {
    this.delegate = new LoginUsuarioUseCase(this.usuarioDomainService);
  }
}
