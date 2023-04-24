// Librerias
import { Types } from 'mongoose';

// Interfaces
import { IBoletoDomain } from '../interface/boleto-domain.interface';

export class BoletoDomainEntity implements IBoletoDomain {
  id?: string;
  envioId: string;
  usuarioId: string;
  conductorId: string;
  vehiculoId: string;
  fecha?: Date;
  completado?: boolean;

  constructor(data: IBoletoDomain) {
    if (data.id) this.id = data.id;
    else this.id = new Types.ObjectId().toString();

    if (data.envioId) this.envioId = data.envioId;

    if (data.usuarioId) this.usuarioId = data.usuarioId;

    if (data.conductorId) this.conductorId = data.conductorId;

    if (data.vehiculoId) this.vehiculoId = data.vehiculoId;

    if (data.fecha) this.fecha = data.fecha;
    else this.fecha = new Date();

    if (data.completado) this.completado = data.completado;
    else this.completado = false;
  }
}
