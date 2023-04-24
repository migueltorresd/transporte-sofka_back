export interface IEnvioDomain {
  id?: string;
  fecha?: Date;
  usuarioId: string;
  origen: string;
  destino: string;
  peso: number;
  costo: number;
  cancelado?: boolean;
}
