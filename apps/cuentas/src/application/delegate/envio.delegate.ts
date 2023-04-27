// Librerias
import { Observable } from 'rxjs';

// Entidades - Entidad
import { EnvioDomainEntity, IEnvioDomainService } from '../../domain';

// Interfaces
import { IUseCase } from './interface';

// Casos de Uso
import {
  BuscarEnvioPorIdUseCase,
  BuscarEnviosUseCase,
  ActualizarEnvioUseCase,
  RegistrarEnvioUseCase,
  CalcularEnvioPorIdUseCase,
  ConfirmarEnvioPorIdUseCase,
} from '../use-case/envio';
import { CrearBoletoPublisherPublisherBase } from '../../domain/messaging/publisher/payment-created.publisher.base';

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
   * @param {IEnvioDomainService<EnvioDomainEntity>} envioDomainService
   * @memberof EnvioDelegate
   */
  constructor(
    private readonly envioDomainService: IEnvioDomainService<EnvioDomainEntity>,
    private readonly confirmarEnvioEvento: CrearBoletoPublisherPublisherBase<EnvioDomainEntity>,
  ) {}

  /**
   * El metodo execute, acepta un numero arbitrario de argumentos los cuales ejecuta
   * devuelve un Observable<Response>
   *
   * @param {...any[]} args
   * @return {*}
   * @memberof EnvioDelegate
   */
  execute(...args: any[]): Observable<Response> {
    return this.delegate.execute(...args);
  }

  /**
   * Metodo que realiza la ejecucion del caso de uso RegistraEnvio
   *
   * @memberof EnvioDelegate
   */
  toRegistrarEnvio(): void {
    this.delegate = new RegistrarEnvioUseCase(this.envioDomainService);
  }

  /**
   * Metodo que realiza la ejecucion del caso de uso ActualizarEnvio
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

  /**
   * Metodo que realiza la ejecucion del caso de uso BuscarEnvioPorId
   *
   * @memberof EnvioDelegate
   */
  toCalcularEnvioPorId(): void {
    this.delegate = new CalcularEnvioPorIdUseCase(this.envioDomainService);
  }

  /**
   * Metodo que realiza la ejecucion del caso de uso BuscarEnvioPorId
   *
   * @memberof EnvioDelegate
   */
  toConfirmarEnvioPorId(): void {
    this.delegate = new ConfirmarEnvioPorIdUseCase(
      this.envioDomainService,
      this.confirmarEnvioEvento,
    );
  }
}
