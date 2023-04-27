import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { EnvioDelegate } from '../../application/delegate';
import { EnvioService } from '../service';
import { Observable } from 'rxjs';
import { CrearEnvioDto, EnvioDto } from '../dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CrearBoletoPublisher } from '../messaging/publisher/crear-boleto.publisher';

@ApiTags('envio')
@Controller('api/envio')
export class EnvioController {
  private readonly useCase: EnvioDelegate;

  constructor(
    private readonly envioService: EnvioService,
    private readonly crearBoletoPublisher: CrearBoletoPublisher,
  ) {
    this.useCase = new EnvioDelegate(envioService, crearBoletoPublisher);
  }

  @Post('registrar')
  registrarEnvio(@Body() envio: CrearEnvioDto): Observable<Response> {
    this.useCase.toRegistrarEnvio();
    return this.useCase.execute(envio);
  }

  @ApiBody({ type: EnvioDto })
  @Put('actualizar-envio')
  actualizarEnvio(
    @Query('id') id: string,
    @Body() envio: Partial<EnvioDto>,
  ): Observable<Response> {
    this.useCase.toActualizarEnvio();
    return this.useCase.execute(id, envio);
  }

  @Get('obtener-por-id')
  obtenerPorId(@Query('id') id: string): Observable<Response> {
    this.useCase.toBuscarEnvioPorId();
    return this.useCase.execute(id);
  }

  @Get('obtener-todos')
  obtenerTodos(): Observable<Response> {
    this.useCase.toBuscarEnvios();
    return this.useCase.execute();
  }

  @Get('confirmar-por-id')
  confirmarPorId(@Query('id') id: string): Observable<Response> {
    this.useCase.toConfirmarEnvioPorId();
    return this.useCase.execute(id);
  }
}
