import { IVehiculoDomain } from './interface/vehiculo-domain.interface';

export class VehiculoDomainEntity implements IVehiculoDomain {
  id: string;
  conductor: string;
  marca: string;
  modelo: string;
  tipo: string;
  placa: string;
  color: string;
  capacidad: number;
  disponible: boolean;

  constructor(data) {
    this.id = data.id;
    this.conductor = data.conductor;
    this.marca = data.marca;
    this.modelo = data.modelo;
    this.tipo = data.tipo;
    this.placa = data.placa;
    this.color = data.color;
    this.capacidad = data.capacidad;
    this.disponible = data.disponible;
  }
}
