import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { VehiculoDelegate } from '../../application/delegate/vehiculo.delegate';
import { VehiculoService } from '../service';
import { Observable } from 'rxjs';
import { VehiculoDto } from '../dto/vehiculo.dto';

@Controller('vehiculo')
export class VehiculoController {
  private readonly useCase: VehiculoDelegate;

  constructor(private readonly vehiculoService: VehiculoService) {
    this.useCase = new VehiculoDelegate(vehiculoService);
  }

  @Post('registrar')
  registrarVehiculo(@Body() vehiculo: VehiculoDto): Observable<Response> {
    this.useCase.toRegistrarVehiculo();
    return this.useCase.execute(vehiculo);
  }

  @Put(':id')
  actualizarVehiculo(
    @Param('id') id: string,
    @Body() vehiculoActualizar: Partial<VehiculoDto>,
  ): Observable<Response> {
    this.useCase.toActualizarVehiculo();
    return this.useCase.execute(id, vehiculoActualizar);
  }

  @Get(':id')
  obtenerPorId(@Param('id') id: string): Observable<Response> {
    this.useCase.toBuscarVehiculoPorId();
    return this.useCase.execute(id);
  }

  @Get()
  obtenerTodos(): Observable<Response> {
    this.useCase.toBuscarVehiculos();
    return this.useCase.execute();
  }

  @Get()
  obtenerPorCapacidad(
    @Param('capacidad') capacidad: string,
  ): Observable<Response> {
    this.useCase.toBuscarVehiculosPorCapacidad();
    return this.useCase.execute(capacidad);
  }
}
