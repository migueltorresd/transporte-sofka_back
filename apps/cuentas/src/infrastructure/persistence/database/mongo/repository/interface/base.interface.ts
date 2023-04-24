import { Observable } from 'rxjs';

export interface IBase<Model> {
  crear(modelo: Model): Observable<Model>;
  actualizar(id: string, modelo: Model): Observable<Model>;
  borrar(id: string): Observable<boolean>;
  obtenerPorId(id: string): Observable<Model>;
  obtenerTodos(): Observable<Model[]>;
}
