export interface IBoletoDomain {
  id?: string;
  envioId: string;
  usuarioId: string;
  conductorId: string;
  vehiculoId: string;
  fecha?: Date;
  completado?: boolean;
}
