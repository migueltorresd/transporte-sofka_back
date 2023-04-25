import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { EnvioDelegate } from '../../application/delegate';
import { EnvioService } from '../service';
import { Observable } from 'rxjs';
import { EnvioDto } from '../dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('envio')
@Controller('api/envio')
export class EnvioController {
  private readonly useCase: EnvioDelegate;

  constructor(private readonly envioService: EnvioService) {
    this.useCase = new EnvioDelegate(envioService);
  }

  @Post('registrar')
  registrarEnvio(@Body() envio: EnvioDto): Observable<Response> {
    this.useCase.toRegistrarEnvio();
    return this.useCase.execute(envio);
  }

  @Put('actualizar-envio')
  actualizarEnvio(
    @Param('id') id: string,
    @Body() envioActualizar: Partial<EnvioDto>,
  ): Observable<Response> {
    this.useCase.toActualizarEnvio();
    return this.useCase.execute(id, envioActualizar);
  }

  @Get('obtener-por-id')
  obtenerPorId(@Param('id') id: string): Observable<Response> {
    this.useCase.toBuscarEnvioPorId();
    return this.useCase.execute(id);
  }

  @Get('obtener-todos')
  obtenerTodos(): Observable<Response> {
    this.useCase.toBuscarEnvios();
    return this.useCase.execute();
  }
}
