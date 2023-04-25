import { IsString } from "class-validator";

export class UsuarioDto{
    @IsString()
    rol: string;

    @IsString()
    nombres: string;
    
    @IsString()
    apellidos

    @IsString()
    correo

    @IsString()
    password
}