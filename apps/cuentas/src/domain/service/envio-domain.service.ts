import { Observable } from 'rxjs';

export interface IEnvioDomain<T> {
  registrar(entity: T): Observable<T>;
  actualizar(id: string, entity: T): Observable<T>;
  borrar(id: string): Observable<T>;
  obtenerPorId(id: string): Observable<T>;
  obtenerTodos(): Observable<T[]>;
}
