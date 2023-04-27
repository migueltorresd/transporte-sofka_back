// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IBoletoDomainService } from '../../../domain/service';

// Entidades
import { BoletoDomainEntity } from '../../../domain/entity';

/**
 * Este metodo permite recuperar el listado general de boletos almacenados en la DB
 * Retorna todos los boletos almacenados, en caso de no haber boletos registrados devuelve un error tipo "not found"
 * No recibe ningun paramentro de entrada
 *
 * @export
 * @class BuscarBoletosUseCase
 */
export class BuscarBoletosUseCase {
  constructor(
    private readonly boletoDomainService: IBoletoDomainService<BoletoDomainEntity>,
  ) {}

  execute(): Observable<BoletoDomainEntity[]> {
    return this.boletoDomainService.obtenerTodos();
  }
}
