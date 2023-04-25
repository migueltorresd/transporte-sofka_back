import { IsString, IsDate, IsBoolean } from 'class-validator';
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
  @IsDate()
  fecha: Date;

  @ApiProperty()
  @IsBoolean()
  completado: boolean;
}
