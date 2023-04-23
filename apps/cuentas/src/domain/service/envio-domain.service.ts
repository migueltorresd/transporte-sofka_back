import { Observable } from "rxjs";
import { EnvioDomainEntity } from "../entity/envio-domain.entity";

export interface IEnvioDomain<Entity extends EnvioDomainEntity = EnvioDomainEntity> {
    registrar(entity: Entity): Observable<Entity>;
    actualizar(id: string, entity: Entity): Observable<Entity>;
    borrar(id: string): Observable<Entity>;
    obtenerPorId(id: string): Observable<Entity>;
    obtenerTodos(): Observable<Entity[]>;
}