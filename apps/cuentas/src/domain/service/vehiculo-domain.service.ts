import { Observable } from "rxjs";
import { VehiculoDomainEntity } from "../entity/vehiculo-domain.entity";

export interface IVehiculoDomainService<Entity extends VehiculoDomainEntity = VehiculoDomainEntity>{
    registrar(entity: Entity): Observable<Entity>;
    actualizar(id: string, entity: Entity): Observable<Entity>;
    borrar(id: string): Observable<Entity>;
    obtenerPorId(id: string): Observable<Entity>;
    obtenerPorPlaca(placa: string): Observable<Entity>;
    obtenerTodos(): Observable<Entity[]>;
}