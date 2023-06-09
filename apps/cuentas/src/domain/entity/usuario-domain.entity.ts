// Librerias
import { Types } from 'mongoose';

// Interfaces
import { IUsuarioDomain } from './interface/usuario-domain.interface';
import { RolTypes } from './interface/enums';

export class UsuarioDomainEntity implements IUsuarioDomain {
  id?: string;
  _id?: string;
  nombreUsuario?: string;
  contrasenna: string;
  nombres: string;
  apellidos: string;
  dni: string;
  correo: string;
  telefono: string;
  rol: number;

  constructor(data: IUsuarioDomain) {
    if (data.id) this.id = data.id;
    else this.id = new Types.ObjectId().toString();

    if (data.nombreUsuario) this.nombreUsuario = data.nombreUsuario;

    if (data.contrasenna) this.contrasenna = data.contrasenna;

    if (data.nombres) this.nombres = data.nombres;

    if (data.apellidos) this.apellidos = data.apellidos;

    if (data.dni) this.dni = data.dni;

    if (data.correo) this.correo = data.correo;

    if (data.telefono) this.telefono = data.telefono;

    if (data.rol) this.rol = data.rol;
    if (!this.rol) this.rol = RolTypes.USUARIO;
  }
}
