import { Observable } from "rxjs";

export interface IBase<Model>{
crear(model:Model): Observable<Model>
actualizar(model:Model): Observable<Model>
borrar(id:string): Observable<Model>
obtenerPorId(id:string): Observable<Model>
obtenerTodos(): Observable<Model[]>
}