// Librerias
import { Observable } from 'rxjs';

// Interface
import { IUseCase } from './interface';

// Servicio - Entidad
import { IBoletoDomainService, BoletoDomainEntity } from '../../domain/';

// Casos de Uso
import { ActualizarBoletoUseCase, RegistrarBoletoUseCase } from '../use-case';

/**
 * BoletoDelegate hace una implementacion de la interface IUseCase
 * Esta implementacion delega la ejecucion de los metodos dados como argumento a la instancia de Delegate.
 * La función de este delegado es oficiar de mediador entre la capa de insfrastructura y la capa de aplicacion
 *
 * @export
 * @class BoletoDelegate
 * @implements {IUseCase}
 */
export class BoletoDelegate implements IUseCase {
  private delegate: IUseCase;


  /**
   * Creates an instance of BoletoDelegate.
   * @param {IBoletoDomainService<BoletoDomainEntity>} boletoDomainService
   * @memberof BoletoDelegate
   */
  constructor(
    private readonly boletoDomainService: IBoletoDomainService<BoletoDomainEntity>,
  ) {}
  /**
   * El metodo execute, acepta un numero arbitrario de argumentos los cuales ejecuta
   * devuelve un Observable<Response>
   *
   * @param {...any[]} args
   * @return {*}
   * @memberof BoletoDelegate
   */
  execute(...args: any[]): Observable<Response> {
    return this.delegate.execute(...args);
  }

  /**
   * Metodo que realiza la ejecucion del caso de uso RegistrarBoleto
   *
   * @memberof BoletoDelegate
   */
  toRegistrarBoleto(): void {
    this.delegate = new RegistrarBoletoUseCase(this.boletoDomainService);
  }

  /**
   * Metodo que realiza la ejecucion del caso de uso ActualizarBoleto
   *
   * @memberof VehiculoDelegate
   */
  toActualizarEnvio(): void {
    this.delegate = new ActualizarBoletoUseCase(this.boletoDomainService);
  }
}
