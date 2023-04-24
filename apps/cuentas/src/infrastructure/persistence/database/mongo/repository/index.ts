import { EnvioRepositoryMongo } from './envio-repository.mongo';
import { UsuarioRepositoryMongo } from './usuario-repository.mongo';
import { VehiculoRepositoryMongo } from './vehiculo-repository.mongo';

export const RepositoriesMongo = [
  EnvioRepositoryMongo,
  UsuarioRepositoryMongo,
  VehiculoRepositoryMongo,
];

export * from './envio-repository.mongo';
export * from './usuario-repository.mongo';
export * from './vehiculo-repository.mongo';
