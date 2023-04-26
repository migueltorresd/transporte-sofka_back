import { Injectable } from '@nestjs/common';
import { IUsuarioDomainService } from '../../../../../domain/service';
import { Observable, from, map } from 'rxjs';
import { UsuarioRepositoryMongo } from '../repository';
import { UsuarioEntityMongo } from '../schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsuarioServiceMongo
  implements IUsuarioDomainService<UsuarioEntityMongo>
{
  constructor(
    private readonly repository: UsuarioRepositoryMongo,
    private readonly jwtService: JwtService,
  ) {}

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

  loginUsuario(correo: string, contraseña: string): Observable<string> {
    return from(this.repository.loginUsuario(correo, contraseña)).pipe(
      map((usuario: UsuarioEntityMongo) => {
        return this.jwtService.sign({ data: usuario });
      }),
    );
  }

  generarNombredeUsuario(id: string): Observable<UsuarioEntityMongo> {
    return this.repository.generarNombredeUsuario(id);
  }
}
