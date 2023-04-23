// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IUsuarioDomainService } from '../../../domain/service/';

// Entidades
import { UsuarioDomainEntity } from '../../../domain/entity/';

export class BuscarUsuarioPorIdUseCase {
  constructor(
    private readonly usuarioDomainService: IUsuarioDomainService<UsuarioDomainEntity>,
  ) {}

  execute(): Observable<UsuarioDomainEntity[]> {
    //TODO: terminar de implementar caso de uso
    return;
  }
}
