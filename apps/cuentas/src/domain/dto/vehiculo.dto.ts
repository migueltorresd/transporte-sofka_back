import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class VehiculoDto {
  @ApiProperty()
  @IsString()
  conductorId: string;

  @ApiProperty()
  @IsString()
  marca: string;

  @ApiProperty()
  @IsString()
  modelo: string;

  @ApiProperty()
  @IsString()
  tipo: string;

  @ApiProperty()
  @IsString()
  placa: string;

  @ApiProperty()
  @IsString()
  color: string;

  @ApiProperty()
  @IsNumber()
  capacidad: number;
}
