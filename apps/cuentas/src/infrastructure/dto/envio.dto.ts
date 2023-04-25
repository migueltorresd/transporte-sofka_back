import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class EnvioDto {
  @ApiProperty()
  @IsString()
  usuarioId: string;

  @ApiProperty()
  @IsString()
  origen: string;

  @ApiProperty()
  @IsString()
  destino: string;

  @ApiProperty()
  @IsString()
  peso: string;

  @ApiProperty()
  @IsNumber()
  costo: number;

  @ApiProperty()
  @IsBoolean()
  cancelado: boolean;
}
