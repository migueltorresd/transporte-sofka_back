import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UsuarioDto {
  @ApiProperty()
  @IsString()
  rol: string;

  @ApiProperty()
  @IsString()
  nombres: string;

  @ApiProperty()
  @IsString()
  apellidos;

  @ApiProperty()
  @IsString()
  correo;

  @ApiProperty()
  @IsString()
  password;
}
