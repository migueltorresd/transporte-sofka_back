// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IUsuarioDomainService } from '../../../domain/service';

// Entidades
import { UsuarioDomainEntity } from '../../../domain/entity';

export class BuscarUsuariosUseCase {
  constructor(
    private readonly usuarioDomainService: IUsuarioDomainService<UsuarioDomainEntity[]>,
  ) {}

  execute(usuarioId: string): Observable<UsuarioDomainEntity> {
    //TODO: terminar de implementar caso de uso
    return;
  }
}
