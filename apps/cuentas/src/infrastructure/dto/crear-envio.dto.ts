import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CrearEnvioDto {
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
  @IsNumber()
  peso: number;
}
