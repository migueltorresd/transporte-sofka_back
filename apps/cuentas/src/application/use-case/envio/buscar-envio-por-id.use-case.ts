// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IEnvioDomainService } from '../../../domain/service';

// Entidades
import { EnvioDomainEntity } from '../../../domain/entity';

/**
 * Este metodo permite realizar la busqueda de un envio mediante un ID unico
 * Recibe como parametro un dato tipo string con id de envio
 * en caso de no encontrar una entidad asociada se devuelve un error tipo "not found"
 * El metodo retorna la entidad que coincida con el ID dado
 *
 * @export
 * @class BuscarEnvioPorIdUseCase
 */
export class BuscarEnvioPorIdUseCase {
  constructor(
    private readonly envioDomainService: IEnvioDomainService<EnvioDomainEntity>,
  ) {}

  execute(id: string): Observable<EnvioDomainEntity> {
    //TODO: terminar de implementar caso de uso
    return this.envioDomainService.obtenerPorId(id);
  }
}
