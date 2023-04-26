import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

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
  @IsNumber()
  peso: number;
}
