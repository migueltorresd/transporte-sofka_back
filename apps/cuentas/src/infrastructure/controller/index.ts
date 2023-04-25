import { EnvioController } from './envio.controller';
import { UsuarioController } from './usuario.controller';
import { VehiculoController } from './vehiculo.controller';

export const Controllers = [
  EnvioController,
  UsuarioController,
  VehiculoController,
];

export * from './envio.controller';
export * from './usuario.controller';
export * from './vehiculo.controller';
