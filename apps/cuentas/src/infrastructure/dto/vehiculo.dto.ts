import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class VehiculoDto {
  @IsString()
  marca: string;

  @IsString()
  modelo: string;

  @IsString()
  tipo: string;

  @IsString()
  placa: string;

  @IsString()
  color: string;

  @IsNumber()
  capacidad: number;

  @IsBoolean()
  disponible: boolean;
}
