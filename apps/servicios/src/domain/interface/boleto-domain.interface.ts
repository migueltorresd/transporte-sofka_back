export interface IBoletoDomain {
  _id?: string;
  id?: string;
  envioId: string;
  usuarioId: string;
  conductorId?: string;
  vehiculoId?: string;
  fecha: number;
  completado: boolean;
}
