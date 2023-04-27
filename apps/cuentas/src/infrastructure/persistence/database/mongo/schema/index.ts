import { EnvioEntityMongo, EnvioSchema } from './envio.schema';
import { UsuarioEntityMongo, UsuarioSchema } from './usuario.schema';
import { VehiculoEntityMongo, VehiculoSchema } from './vehiculo.schema';

export const SchemasMongo = [EnvioSchema, UsuarioSchema, VehiculoSchema];
export const SchemasNamesMongo = [
  EnvioEntityMongo,
  UsuarioEntityMongo,
  VehiculoEntityMongo,
];

export * from './envio.schema';
export * from './usuario.schema';
export * from './vehiculo.schema';
