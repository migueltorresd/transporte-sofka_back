import { IEnvioDomain } from './interface/envio-domain.interface';

export class EnvioDomainEntity implements IEnvioDomain {
  id: string;
  fecha: Date;
  usuarioId: string;
  origen: string;
  destino: string;
  peso: number;
  costo: number;
  estado: string;

  constructor() {
    this.id = '';
    this.fecha = new Date();
    this.usuarioId = '';
    this.origen = '';
    this.destino = '';
    this.peso = 0;
    this.costo = 0;
    this.estado = '';
  }
}
