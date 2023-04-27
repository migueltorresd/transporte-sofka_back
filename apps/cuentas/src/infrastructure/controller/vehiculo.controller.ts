import { Body, Controller, Get, Query, Post, Put } from '@nestjs/common';
import { VehiculoDelegate } from '../../application/delegate';
import { VehiculoService } from '../service';
import { Observable } from 'rxjs';
import { CrearVehiculoDto, VehiculoDto } from '../dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('vehiculo')
@Controller('api/vehiculo')
export class VehiculoController {
  private readonly useCase: VehiculoDelegate;

  constructor(private readonly vehiculoService: VehiculoService) {
    this.useCase = new VehiculoDelegate(vehiculoService);
  }

  @Post('registrar')
  registrarVehiculo(@Body() vehiculo: CrearVehiculoDto): Observable<Response> {
    this.useCase.toRegistrarVehiculo();
    return this.useCase.execute(vehiculo);
  }

  @ApiBody({ type: VehiculoDto })
  @Put('actualizar-vehiculo')
  actualizarVehiculo(
    @Query('id') id: string,
    @Body() vehiculo: Partial<VehiculoDto>,
  ): Observable<Response> {
    this.useCase.toActualizarVehiculo();
    return this.useCase.execute(id, vehiculo);
  }

  @Get('obtener-por-id')
  obtenerPorId(@Query('id') id: string): Observable<Response> {
    this.useCase.toBuscarVehiculoPorId();
    return this.useCase.execute(id);
  }

  @Get('obtener-todos')
  obtenerTodos(): Observable<Response> {
    this.useCase.toBuscarVehiculos();
    return this.useCase.execute();
  }

  @Get('obtener-por-capacidad')
  obtenerPorCapacidad(
    @Query('capacidad') capacidad: string,
  ): Observable<Response> {
    this.useCase.toBuscarVehiculosPorCapacidad();
    return this.useCase.execute(capacidad);
  }
}
