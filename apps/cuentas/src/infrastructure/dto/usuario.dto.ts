import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class UsuarioDto {
  @ApiProperty()
  @IsNumber()
  rol: number;

  @ApiProperty()
  @IsString()
  nombres: string;

  @ApiProperty()
  @IsString()
  dni: string;

  @ApiProperty()
  @IsString()
  correo: string;

  @ApiProperty()
  @IsString()
  contrasenna: string;

  @ApiProperty()
  @IsString()
  telefono: string;
}
