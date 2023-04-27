import { Observable } from 'rxjs';

export interface IEnvioDomainService<T> {
  crear(entidad: T): Observable<T>;
  actualizar(id: string, entidad: T): Observable<T>;
  //borrar(id: string): Observable<boolean>;
  obtenerTodos(): Observable<T[]>;
  obtenerPorId(id: string): Observable<T>;
  calcularPorId(id: string): Observable<T>;
  confirmarPorId(id: string): Observable<T>;
}
