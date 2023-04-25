export interface IEnvioDomain {
  id?: string;
  fecha?: number;
  usuarioId: string;
  origen: string;
  destino: string;
  peso: number;
  costo: number;
  cancelado?: boolean;
}
