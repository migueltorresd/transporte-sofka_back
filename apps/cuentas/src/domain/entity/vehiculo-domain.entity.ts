// Librerias
import { Types } from 'mongoose';

// Interfaces
import { IVehiculoDomain } from './interface/vehiculo-domain.interface';

export class VehiculoDomainEntity implements IVehiculoDomain {
  id?: string;
  conductorId: string;
  marca: string;
  modelo: string;
  tipo: string;
  placa: string;
  color: string;
  capacidad: number;
  disponible?: boolean;

  constructor(data: IVehiculoDomain) {
    if (data.id) this.id = data.id;
    else this.id = new Types.ObjectId().toString();

    if (data.conductorId) this.conductorId = data.conductorId;

    if (data.marca) this.marca = data.marca;

    if (data.modelo) this.modelo = data.modelo;

    if (data.tipo) this.tipo = data.tipo;

    if (data.placa) this.placa = data.placa;

    if (data.color) this.color = data.color;

    if (data.capacidad) this.capacidad = data.capacidad;

    this.disponible = data.disponible != undefined ? data.disponible : true;
  }
}
