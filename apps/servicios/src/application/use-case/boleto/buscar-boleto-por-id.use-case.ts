// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IBoletoDomainService } from '../../../domain/service';

// Entidades
import { BoletoDomainEntity } from '../../../domain/entity';

/**
 * Este metodo permite realizar la busqueda de un boleto mediante un ID unico
 * Recibe como parametro un dato tipo string con id de boleto
 * en caso de no encontrar una entidad asociada se devuelve un error tipo "not found"
 * El metodo retorna la entidad que coincida con el ID dado
 *
 * @export
 * @class BuscarBoletoPorIdUseCase
 */
export class BuscarBoletoPorIdUseCase {
  constructor(
    private readonly boletoDomainService: IBoletoDomainService<BoletoDomainEntity>,
  ) {}

  execute(id: string): Observable<BoletoDomainEntity> {
    return this.boletoDomainService.obtenerPorId(id);
  }
}
