// Librerias
import { Observable } from 'rxjs';

// Servicios - Entidades
import {
  BoletoDomainEntity,
  IBoletoDomainService,
} from '../../../../../servicios/src/domain';
/**
 * Este metodo permite Registrar un nuevo Boleto y almacenar sus datos en la DB
 * Recibe un conjunto de datos de Boleto como parametros de entrada
 * retorna una copia de la nueva entidad creada
 *
 * @export
 * @class RegistrarBoletoUseCase
 */
export class RegistrarBoletoUseCase {
  constructor(
    private readonly boletoDomainService: IBoletoDomainService<BoletoDomainEntity>,
  ) {}

  execute(vehiculoData: BoletoDomainEntity): Observable<BoletoDomainEntity> {
    //TODO: terminar de implementar caso de uso
    return this.boletoDomainService.crear(vehiculoData);
  }
}
