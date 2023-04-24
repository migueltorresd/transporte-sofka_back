// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IEnvioDomainService } from '../../../domain/service';

// Entidades
import { EnvioDomainEntity } from '../../../domain/entity';

/**
 * Este metodo permite recuperar el listado general de envios almacenados en la DB
 * Retorna todos los envios almacenados, en caso de no haber envios registrados devuelve un error tipo "not found"
 * No recibe ningun paramentro de entrada
 *
 * @export
 * @class BuscarEnviosUseCase
 */
export class BuscarEnviosUseCase {
  constructor(
    private readonly envioDomainService: IEnvioDomainService<EnvioDomainEntity>,
  ) {}

  execute(): Observable<EnvioDomainEntity[]> {
    //TODO: terminar de implementar caso de uso
    return;
  }
}
