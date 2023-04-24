import { EnvioSchema } from './envio.schema';
import { UsuarioSchema } from './usuario.schema';
import { VehiculoSchema } from './vehiculo.schema';

export const SchemasMongo = [EnvioSchema, UsuarioSchema, VehiculoSchema];

export * from './envio.schema';
export * from './usuario.schema';
export * from './vehiculo.schema';
