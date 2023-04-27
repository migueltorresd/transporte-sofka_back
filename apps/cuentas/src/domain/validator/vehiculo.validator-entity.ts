import { BadRequestException } from '@nestjs/common';
import { VehiculoDomainEntity } from '../entity';

export function validarVehiculo(
  entity: VehiculoDomainEntity,
): VehiculoDomainEntity {
  const objectIdRegex = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;
  if (!entity.id || entity.id.trim() === '') {
    throw new BadRequestException('El id no es valido');
  }
  if (
    !entity.conductorId ||
    entity.conductorId.trim() === '' ||
    !objectIdRegex.test(entity.conductorId)
  ) {
    throw new BadRequestException('El conductorId no es valido');
  }
  if (!entity.marca || entity.marca.trim() === '') {
    throw new BadRequestException('La marca no es valida');
  }
  if (!entity.modelo || entity.modelo.trim() === '') {
    throw new BadRequestException('El modelo no es valido');
  }
  if (!entity.placa || entity.placa.trim() === '') {
    throw new BadRequestException('La placa no es valida');
  }
  if (!entity.color || entity.color.trim() === '') {
    throw new BadRequestException('El color no es valido');
  }
  if (!entity.tipo || entity.tipo.trim() === '') {
    throw new BadRequestException('El tipo no es valido');
  }
  if (
    typeof entity.capacidad !== 'number' ||
    isNaN(entity.capacidad) ||
    entity.capacidad < 0 ||
    entity.capacidad > 1000
  ) {
    throw new BadRequestException('La capacidad no es valida');
  }
  if (typeof entity.disponible !== 'boolean') {
    throw new BadRequestException('Disponible no es valido');
  }
  return entity;
}
