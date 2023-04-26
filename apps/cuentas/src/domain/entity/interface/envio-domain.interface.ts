export interface IEnvioDomain {
  id?: string;
  _id?: string;
  fecha?: number;
  usuarioId: string;
  origen: string;
  destino: string;
  peso: number;
  estimado?: number;
  costo?: number;
  cancelado?: boolean;
}
