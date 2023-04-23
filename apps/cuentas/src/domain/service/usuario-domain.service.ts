import { Observable } from "rxjs";
import { UsuarioDomainEntity } from "../entity/usuario-domain.entity";

export interface IUsuarioDomainService <Entity extends UsuarioDomainEntity = UsuarioDomainEntity>{
    registrar(entity: Entity): Observable<Entity>;
    actualizar(id: string, entity: Entity): Observable<Entity>;
    borrar(id: string): Observable<Entity>;
    obtenerPorCorreo(correo: string): Observable<Entity>;
    obtenerPorId(id: string): Observable<Entity>;
    obtenerPorDni(dni: string): Observable<Entity>;
    obtenerTodos(): Observable<Entity[]>;
    loginUsuario(correo: string, contraseña: string): Observable<Entity>; 
}
