import { BadRequestException } from '@nestjs/common';
import { BoletoDomainEntity } from '../entity';

export function validarBoleto(entity: BoletoDomainEntity): BoletoDomainEntity {
  const uuidRegex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
  if (!entity.id || entity.id.trim() === '') {
    throw new BadRequestException('El id no es valido');
  }
  if (
    !entity.usuarioId ||
    entity.usuarioId.trim() === '' ||
    !uuidRegex.test(entity.usuarioId)
  ) {
    throw new BadRequestException('El usuarioId no es valido');
  }
  if (
    !entity.conductorId ||
    entity.conductorId.trim() === '' ||
    !uuidRegex.test(entity.conductorId)
  ) {
    throw new BadRequestException('El conductorId no es valido');
  }
  if (
    !entity.envioId ||
    entity.envioId.trim() === '' ||
    !uuidRegex.test(entity.envioId)
  ) {
    throw new BadRequestException('El envioId no es valido');
  }
  if (
    !entity.vehiculoId ||
    entity.vehiculoId.trim() === '' ||
    !uuidRegex.test(entity.vehiculoId)
  ) {
    throw new BadRequestException('El vehiculoId no es valido');
  }
  if (typeof entity.completado !== 'boolean') {
    throw new BadRequestException('Completado no es valido');
  }
  if (!entity.fecha || isNaN(new Date(entity.fecha).getTime())) {
    throw new BadRequestException('La fecha no es valida');
  }
  return entity;
}
