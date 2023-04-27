// Librerias
import { Types } from 'mongoose';

// Interfaces
import { IEnvioDomain } from './interface/envio-domain.interface';

export class EnvioDomainEntity implements IEnvioDomain {
  id?: string;
  _id?: string;
  fecha?: number;
  usuarioId: string;
  origen: string;
  destino: string;
  peso: number;
  costo?: number;
  estimado?: number;
  cancelado?: boolean;

  constructor(data: IEnvioDomain) {
    if (data.id) this.id = data.id;
    else this.id = new Types.ObjectId().toString();

    if (data.fecha) this.fecha = data.fecha;
    else this.fecha = Date.now();

    if (data.usuarioId) this.usuarioId = data.usuarioId;

    if (data.origen) this.origen = data.origen;

    if (data.destino) this.destino = data.destino;

    if (data.peso) this.peso = data.peso;
    else this.peso = 0;

    if (data.estimado) this.estimado = data.estimado;
    else this.estimado = 0;

    if (data.costo) this.costo = data.costo;
    else this.costo = 0;

    this.cancelado = data.cancelado != undefined ? data.cancelado : true;
  }
}
