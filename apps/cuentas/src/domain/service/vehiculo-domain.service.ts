// Librerias
import { Observable } from 'rxjs';

export interface IVehiculoDomainService<T> {
  crear(entidad: T): Observable<T>;
  actualizar(id: string, entidad: T): Observable<T>;
  //borrar(id: string): Observable<Entity>;
  obtenerPorId(id: string): Observable<T>;
  obtenerPorCapacidad(capacidad: number): Observable<T[]>;
  obtenerTodos(): Observable<T[]>;
}
