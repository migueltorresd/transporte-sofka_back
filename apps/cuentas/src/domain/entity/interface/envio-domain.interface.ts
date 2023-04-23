export interface IEnvioDomain {
  id: string;
  fecha: Date;
  usuarioId: string;
  origen: string;
  destino: string;
  peso: number;
  costo: number;
  estado: string;
}
