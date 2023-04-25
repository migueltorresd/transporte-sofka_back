import { IsString, IsDate, IsBoolean } from 'class-validator';

export class BoletoDto {
  @IsString()
  envioId: string;

  @IsString()
  usuarioId: string;

  @IsString()
  conductorId: string;

  @IsString()
  vehiculoId: string;

  @IsDate()
  fecha: Date;

  @IsBoolean()
  completado: boolean;
}
