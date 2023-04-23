// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IUsuarioDomainService } from '../../../domain/service/';

// Entidades
import { UsuarioDomainEntity } from '../../../domain/entity/';

export class RegistrarUsuarioUseCase {
  constructor(
    private readonly usuarioDomainService: IUsuarioDomainService<UsuarioDomainEntity>,
  ) {}

  execute(usuarioData: UsuarioDomainEntity): Observable<UsuarioDomainEntity> {
    //TODO: terminar de implementar caso de uso
    return;
  }
}
