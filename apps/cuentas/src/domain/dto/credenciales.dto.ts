import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CredencialesDto {
  @ApiProperty()
  @IsEmail()
  correo: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
