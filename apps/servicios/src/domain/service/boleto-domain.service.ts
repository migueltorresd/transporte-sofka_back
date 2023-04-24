// Librerias
import { Observable } from 'rxjs';

export interface IBoletoDomainService<T> {
  registrar(entity: T): Observable<T>;
  actualizar(entity: T): Observable<T>;
}
