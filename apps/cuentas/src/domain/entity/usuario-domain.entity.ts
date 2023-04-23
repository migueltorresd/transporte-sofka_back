import { IUsuarioDomain } from "./interface/usuario-domain.interface";

export class UsuarioDomainEntity implements IUsuarioDomain{
    id: string;
    nombreUsuario: string;
    contraseña: string;
    nombres: string;
    apellidos: string;
    dni: string;
    correo: string;
    telefono: string;
    esConductor: boolean;

    constructor(data: IUsuarioDomain){
        this.id = data.id;
        this.nombreUsuario = data.nombreUsuario;
        this.contraseña = data.contraseña;
        this.nombres = data.nombres;
        this.apellidos = data.apellidos;
        this.dni = data.dni;
        this.correo = data.correo;
        this.telefono = data.telefono;
        this.esConductor = data.esConductor;
    }
}