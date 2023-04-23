// Librerias
import { Observable } from 'rxjs';

// Interfaces
import { IUseCase } from './interface';

// Servicio - Entidad
import { IVehiculoDomainService, VehiculoDomainEntity } from '../../domain';

// Casos de Uso
import {
  BuscarVehiculosUseCase,
  BuscarVehiculoPorIdUseCase,
  ActualizarVehiculoUseCase,
  RegistrarVehiculoUseCase,
} from '../use-case/vehiculo/';

/**
 * VehiculoDelegate hace una implementacion de la interface IUseCase
 * Esta implementacion delega la ejecucion de los metodos dados como argumento a la instancia de Delegate.
 * La función de este delegado es oficiar de mediador entre la capa de insfrastructura y la capa de aplicacion
 *
 * @export
 * @class VehiculoDelegate
 * @implements {IUseCase}
 */
export class VehiculoDelegate implements IUseCase {
  private delegate: IUseCase;

  /**
   * Creates an instance of VehiculoDelegate.
   * @param {IVehiculoDomainService<VehiculoDomainEntity>} vehiculoDomainService
   * @memberof VehiculoDelegate
   */
  constructor(
    private readonly vehiculoDomainService: IVehiculoDomainService<VehiculoDomainEntity>,
  ){}

  /**
   * El metodo execute, acepta un numero arbitrario de argumentos los cuales ejecuta
   * devuelve un Observable<Response>
   *
   * @param {...any[]} args
   * @return {*}
   * @memberof VehiculoDelegate
   */
  execute(...args: any[]): Observable<Response> {
    return this.delegate.execute(...args);
  }

  /**
   * Metodo que realiza la ejecucion del caso de uso RegistrarVehiculo
   *
   * @memberof VehiculoDelegate
   */
  toRegistrarVehiculo(): void {
    this.delegate = new RegistrarVehiculoUseCase(this.vehiculoDomainService);
  }

  /**
   * Metodo que realiza la ejecucion del caso de uso ActualizarVehiculo
   *
   * @memberof VehiculoDelegate
   */
  toActualizarEnvio(): void {
    this.delegate = new ActualizarVehiculoUseCase(this.vehiculoDomainService);
  }

  /**
   * Metodo que realiza la ejecucion del caso de uso BuscarVehiculoPorId
   *
   * @memberof VehiculoDelegate
   */
  toBuscarVehiculoPorId(): void {
    this.delegate = new BuscarVehiculoPorIdUseCase(this.vehiculoDomainService);
  }

  /**
   * Metodo que realiza la ejecucion del caso de uso BuscarVehiculos
   *
   * @memberof VehiculoDelegate
   */
  toBuscarVehiculos(): void {
    this.delegate = new BuscarVehiculosUseCase(this.vehiculoDomainService);
  }
}
