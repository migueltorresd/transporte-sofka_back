// Librerias
import { Observable } from 'rxjs';

// Servicios de dominio
import { IUsuarioDomainService } from '../../../domain/service';

// Entidades
import { UsuarioDomainEntity } from '../../../domain/entity';

export class LoginUsuarioUseCase {
  constructor(
    private readonly usuarioDomainService: IUsuarioDomainService<UsuarioDomainEntity>,
  ) {}

  execute(correo: string, password: string ): Observable<UsuarioDomainEntity> {
    //TODO: terminar de implementar caso de uso
    return;
  }
}
