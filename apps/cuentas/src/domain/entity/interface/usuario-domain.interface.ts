export interface IUsuarioDomain {
  id?: string;
  nombreUsuario?: string;
  password: string;
  nombres: string;
  apellidos: string;
  dni?: string;
  correo: string;
  telefono?: string;
  esConductor: boolean;
}
