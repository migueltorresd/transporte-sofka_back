import { IsString, IsBoolean, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BoletoDto {
  @ApiProperty()
  @IsString()
  envioId: string;

  @ApiProperty()
  @IsString()
  usuarioId: string;

  @ApiProperty()
  @IsString()
  conductorId: string;

  @ApiProperty()
  @IsString()
  vehiculoId: string;

  @ApiProperty()
  @IsNumber()
  fecha: number;

  @ApiProperty()
  @IsBoolean()
  completado: boolean;
}
