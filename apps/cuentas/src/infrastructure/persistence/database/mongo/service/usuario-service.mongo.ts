import { Injectable } from '@nestjs/common';
import { IUsuarioDomainService } from 'apps/cuentas/src/domain';
import { Observable } from 'rxjs';
import { UsuarioRepositoryMongo } from '../repository';
import { UsuarioEntityMongo } from '../schema';

@Injectable()
export class UsuarioServiceMongo
  implements IUsuarioDomainService<UsuarioEntityMongo>
{
  constructor(private readonly repository: UsuarioRepositoryMongo) {}

  crear(modelo: UsuarioEntityMongo): Observable<UsuarioEntityMongo> {
    return this.repository.crear(modelo);
  }

  actualizar(
    id: string,
    modelo: UsuarioEntityMongo,
  ): Observable<UsuarioEntityMongo> {
    return this.repository.actualizar(id, modelo);
  }

  obtenerTodos(): Observable<UsuarioEntityMongo[]> {
    return this.repository.obtenerTodos();
  }

  obtenerPorId(id: string): Observable<UsuarioEntityMongo> {
    return this.repository.obtenerPorId(id);
  }

  obtenerPorCorreo(correo: string): Observable<UsuarioEntityMongo> {
    return this.repository.obtenerPorCorreo(correo);
  }

  obtenerPorDni(dni: string): Observable<UsuarioEntityMongo> {
    return this.repository.obtenerPorDni(dni);
  }

  loginUsuario(
    correo: string,
    contraseña: string,
  ): Observable<UsuarioEntityMongo> {
    return this.repository.loginUsuario(correo, contraseña);
  }
}
