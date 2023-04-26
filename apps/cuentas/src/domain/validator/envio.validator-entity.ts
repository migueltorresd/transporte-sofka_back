import { BadRequestException } from '@nestjs/common';
import { EnvioDomainEntity } from '../entity';

export function validarEnvio(entity: EnvioDomainEntity): EnvioDomainEntity {
  const objectIdRegex = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;
  if (!entity.id || entity.id.trim() === '') {
    throw new BadRequestException('El id no es valido');
  }
  if (
    !entity.usuarioId ||
    entity.usuarioId.trim() === '' ||
    !objectIdRegex.test(entity.usuarioId)
  ) {
    throw new BadRequestException('El usuarioId no es valido');
  }
  if (!entity.origen || entity.origen.trim() === '') {
    throw new BadRequestException('Los nombres no son validos');
  }
  if (!entity.destino || entity.destino.trim() === '') {
    throw new BadRequestException('Los apellidos no son validos');
  }
  if (
    typeof entity.costo !== 'number' ||
    isNaN(entity.costo) ||
    entity.costo < 0
  ) {
    throw new BadRequestException('El costo no es valido');
  }
  if (
    typeof entity.peso !== 'number' ||
    isNaN(entity.peso) ||
    entity.peso < 0 ||
    entity.peso > 1000
  ) {
    throw new BadRequestException('El peso no es valido');
  }
  if (typeof entity.cancelado !== 'boolean') {
    throw new BadRequestException('Cancelado no es valido');
  }
  if (!entity.fecha || isNaN(new Date(entity.fecha).getTime())) {
    throw new BadRequestException('La fecha no es valida');
  }
  return entity;
}
