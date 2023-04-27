// Librerias
import { Observable } from 'rxjs';

// Servicios - Entidades
import {
  BoletoDomainEntity,
  IBoletoDomainService,
} from '../../../../../servicios/src/domain';

/**
 * Este metodo permite Actualizar la informacion de un Boleto
 * Recibe un conjunto de datos de Boleto como parametros de entrada
 * retorna una copia de la nueva entidad creada
 *
 * @export
 * @class ActualizarBoletoUseCase
 */
export class ActualizarBoletoUseCase {
  constructor(
    private readonly boletoDomainService: IBoletoDomainService<BoletoDomainEntity>,
  ) {}

  execute(
    boletoId: string,
    boletoData: BoletoDomainEntity,
  ): Observable<BoletoDomainEntity> {
    //TODO: terminar de implementar caso de uso
    return this.boletoDomainService.actualizar(boletoId, boletoData);
  }
}
