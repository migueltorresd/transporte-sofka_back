// Librerias
import { Observable } from 'rxjs';

export interface IBoletoDomainService<T> {
  crear(entidad: T): Observable<T>;
  actualizar(id: string, entidad: T): Observable<T>;
  //borrar(id: string): Observable<boolean>;
  obtenerTodos(): Observable<T[]>;
  obtenerPorId(id: string): Observable<T>;
}
