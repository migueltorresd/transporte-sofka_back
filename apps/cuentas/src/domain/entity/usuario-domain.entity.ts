// Librerias
import { Types } from 'mongoose';

// Interfaces
import { IUsuarioDomain } from './interface/usuario-domain.interface';

export class UsuarioDomainEntity implements IUsuarioDomain {
  id?: string;
  nombreUsuario?: string;
  password: string;
  nombres: string;
  apellidos: string;
  dni?: string;
  correo: string;
  telefono?: string;
  esConductor: boolean;

  constructor(data: IUsuarioDomain) {
    if (data.id) this.id = data.id;
    else this.id = new Types.ObjectId().toString();

    if (data.nombreUsuario) this.nombreUsuario = data.nombreUsuario;

    if (data.password) this.password = data.password;

    if (data.nombres) this.nombres = data.nombres;

    if (data.apellidos) this.apellidos = data.apellidos;

    if (data.dni) this.dni = data.dni;

    if (data.correo) this.correo = data.correo;

    if (data.telefono) this.telefono = data.telefono;

    if (data.esConductor) this.esConductor = data.esConductor;
    else this.esConductor = false;
  }
}
