import { BadRequestException } from '@nestjs/common';
import { UsuarioDomainEntity } from '../entity';
import { RolTypes } from '../entity/interface/enums';

export function validarUsuario(
  entity: UsuarioDomainEntity,
): UsuarioDomainEntity {
  if (!entity.id || entity.id.trim() === '') {
    throw new BadRequestException('');
  }
  if (
    typeof entity.rol !== 'number' ||
    isNaN(entity.rol) ||
    entity.rol < 0 ||
    (entity.rol !== +RolTypes.USUARIO && entity.rol !== +RolTypes.CONDUCTOR)
  ) {
    throw new BadRequestException('El rol no es valido');
  }
  if (!entity.nombres || entity.nombres.trim() === '') {
    throw new BadRequestException('Los nombres no son validos');
  }
  if (!entity.apellidos || entity.apellidos.trim() === '') {
    throw new BadRequestException('Los apellidos no son validos');
  }
  if (!entity.correo || entity.correo.trim() === '') {
    throw new BadRequestException('El correo no es valido');
  }
  if (!entity.contrasenna || entity.contrasenna.trim() === '') {
    throw new BadRequestException('La contraseña no es valida');
  }
  if (!entity.dni || entity.dni.trim() === '') {
    throw new BadRequestException('El dni no es valido');
  }
  if (!entity.telefono || entity.telefono.trim() === '') {
    throw new BadRequestException('El telefono no es valido');
  }
  return entity;
}
