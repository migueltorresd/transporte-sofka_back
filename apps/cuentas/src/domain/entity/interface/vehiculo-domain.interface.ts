export interface IVehiculoDomain {
  id?: string;
  conductorId: string;
  marca: string;
  modelo: string;
  tipo: string;
  placa: string;
  color: string;
  capacidad: number;
  disponible: boolean;
}
