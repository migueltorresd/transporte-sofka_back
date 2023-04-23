import { IBoletoDomain } from '../interface/boleto-domain.interface';

export class BoletoDomainEntity implements IBoletoDomain {
  id: string;
  envioId: string;
  usuarioId: string;
  conductorId: string;
  vehiculoId: string;
  fecha: number;
  completado: boolean;

  constructor(data: IBoletoDomain) {
    this.id = data.id;
    this.envioId = data.envioId;
    this.usuarioId = data.usuarioId;
    this.conductorId = data.conductorId;
    this.vehiculoId = data.vehiculoId;
    this.fecha = data.fecha;
    this.completado = data.completado;
  }
}
