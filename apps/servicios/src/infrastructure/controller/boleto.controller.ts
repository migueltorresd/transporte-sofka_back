import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BoletoDelegate } from '../../application';
import { BoletoService } from '../service';
import { Observable } from 'rxjs';

@ApiTags('boleto')
@Controller('api/boleto')
export class BoletoController {
  private readonly useCase: BoletoDelegate;

  constructor(private readonly boletoService: BoletoService) {
    this.useCase = new BoletoDelegate(boletoService);
  }

  @Get('obtener-por-id')
  obtenerPorId(@Query('id') id: string): Observable<Response> {
    this.useCase.toBuscarBoletoPorId();
    return this.useCase.execute(id);
  }

  @Get('obtener-todos')
  obtenerTodos(): Observable<Response> {
    this.useCase.toBuscarBoletos();
    return this.useCase.execute();
  }

  /*   @ApiBody({ type: BoletoDto })
  @Put('actualizar-boleto')
  actualizarBoleto(
    @Body() boletoActualizar: Partial<BoletoDto>,
  ): Observable<Response> {
    this.useCase.toActualizarBoleto();
    return this.useCase.execute(boletoActualizar);
  } */
}
