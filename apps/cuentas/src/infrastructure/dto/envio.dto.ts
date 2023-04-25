import { IsBoolean, IsNumber, IsString } from "class-validator";

export class EnvioDto {

    @IsString()
    usuarioId: string;

    @IsString()
    origen: string;

    @IsString()
    destino: string;

    @IsString()
    peso: string;

    @IsNumber()
    costo: number;

    @IsBoolean()
    cancelado: boolean;
}