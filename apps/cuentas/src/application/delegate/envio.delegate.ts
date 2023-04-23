// Librerias
import { Observable } from 'rxjs';

// Entidades
import { EnvioDomainEntity } from '../../domain';

// Servicios
import { IEnvioDomain } from '../../domain/service';

// Interfaces
import { IUseCase } from './interface';

// Casos de Uso
import {
  BuscarEnvioPorIdUseCase,
  BuscarEnviosUseCase,
  ActualizarEnvioUseCase,
  RegistrarEnvioUseCase,
} from '../use-case/envios/';

/**
 * EnvioDelegate hace una implementacion de la interface IUseCase
 * Esta implementacion delega la ejecucion de los metodos dados como argumento a la instancia de Delegate.
 * La función de este delegado es oficiar de mediador entre la capa de insfrastructura y la capa de aplicacion
 *
 * @export
 * @class EnvioDelegate
 * @implements {IUseCase}
 */
export class EnvioDelegate implements IUseCase {
  private delegate: IUseCase;

  /**
   * Creates an instance of EnvioDelegate.
   * @param {IEnvioDomain<EnvioDomainEntity>} envioDomainService
   * @memberof EnvioDelegate
   */
  constructor(
    private readonly envioDomainService: IEnvioDomain<EnvioDomainEntity>,
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
   * @memberof EnvioDelegate
   */
  toRegistrarEnvio(): void {
    this.delegate = new RegistrarEnvioUseCase(this.envioDomainService);
  }

  /**
   * Metodo que realiza la ejecucion del caso de uso ActualizarUsuario
   *
   * @memberof EnvioDelegate
   */
  toActualizarEnvio(): void {
    this.delegate = new ActualizarEnvioUseCase(this.envioDomainService);
  }

  /**
   * Metodo que realiza la ejecucion del caso de uso BuscarEnvioPorId
   *
   * @memberof EnvioDelegate
   */
  toBuscarEnvioPorId(): void {
    this.delegate = new BuscarEnvioPorIdUseCase(this.envioDomainService);
  }

  /**
   * Metodo que realiza la ejecucion del caso de uso BuscarEnvios
   *
   * @memberof EnvioDelegate
   */
  toBuscarEnvios(): void {
    this.delegate = new BuscarEnviosUseCase(this.envioDomainService);
  }
}
