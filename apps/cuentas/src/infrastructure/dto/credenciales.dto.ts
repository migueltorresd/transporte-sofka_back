import { IsEmail, IsNotEmpty } from 'class-validator';

export class CredencialesDto {
  @IsEmail()
  correo: string;

  @IsNotEmpty()
  password: string;
}
