import { Observable } from 'rxjs';

export interface IUsuarioDomainService<T> {
  registrar(entity: T): Observable<T>;
  actualizar(id: string, entity: T): Observable<T>;
  borrar(id: string): Observable<T>;
  obtenerPorCorreo(correo: string): Observable<T>;
  obtenerPorId(id: string): Observable<T>;
  obtenerPorDni(dni: string): Observable<T>;
  obtenerTodos(): Observable<T[]>;
  loginUsuario(correo: string, password: string): Observable<T>;
}
