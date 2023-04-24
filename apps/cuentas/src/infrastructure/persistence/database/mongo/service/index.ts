import { EnvioServiceMongo } from './envio-service.mongo';
import { UsuarioServiceMongo } from './usuario-service.mongo';
import { VehiculoServiceMongo } from './vehiculo-service.mongo';

export const ServicesMongo = [
  EnvioServiceMongo,
  UsuarioServiceMongo,
  VehiculoServiceMongo,
];

export * from './envio-service.mongo';
export * from './usuario-service.mongo';
export * from './vehiculo-service.mongo';
