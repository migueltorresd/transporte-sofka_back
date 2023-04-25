import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { EnvioDelegate } from '../../application/delegate/envio.delegate';
import { EnvioService } from '../service';
import { Observable } from 'rxjs';
import { EnvioDto } from '../dto/envio.dto';

@Controller('envio')
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

  @Put(':id')
  actualizarEnvio(
    @Param('id') id: string,
    @Body() envioActualizar: Partial<EnvioDto>,
  ): Observable<Response> {
    this.useCase.toActualizarEnvio();
    return this.useCase.execute(id, envioActualizar);
  }

  @Get(':id')
  obtenerPorId(@Param('id') id: string): Observable<Response> {
    this.useCase.toBuscarEnvioPorId();
    return this.useCase.execute(id);
  }

  @Get()
  obtenerTodos(): Observable<Response> {
    this.useCase.toBuscarEnvios();
    return this.useCase.execute();
  }
}
