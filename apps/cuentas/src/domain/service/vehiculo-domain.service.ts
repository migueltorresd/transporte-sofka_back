// Librerias
import { Observable } from 'rxjs';

export interface IVehiculoDomainService<T> {
  registrar(entity: T): Observable<T>;
  actualizar(id: string, entity: T): Observable<T>;
  //borrar(id: string): Observable<Entity>;
  obtenerPorId(id: string): Observable<T>;
  //obtenerPorPlaca(placa: string): Observable<T>;
  obtenerTodos(): Observable<T[]>;
}
