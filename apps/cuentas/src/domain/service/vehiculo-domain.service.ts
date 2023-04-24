// Librerias
import { Observable } from 'rxjs';

export interface IVehiculoDomainService<T> {
  registrar(entity: T): Observable<T>;
  actualizar(id: string, entity: T): Observable<T>;
  obtenerPorId(id: string): Observable<T>;
  obtenerPorCapacidad(capacidad: number): Observable<T[]>;
  obtenerTodos(): Observable<T[]>;
  //borrar(id: string): Observable<Entity>;
}
