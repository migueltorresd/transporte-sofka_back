import { Body, Controller, Post, Put } from '@nestjs/common';
import { BoletoDelegate } from '../../application';
import { BoletoService } from '../service';
import { Observable } from 'rxjs';
import { BoletoDto } from '../dto/boleto.dto';

@Controller('boleto')
export class BoletoController {
  private readonly useCase: BoletoDelegate;

  constructor(private readonly boletoService: BoletoService) {
    this.useCase = new BoletoDelegate(boletoService);
  }

  @Post('registrar')
  registrarBoleto(@Body() boleto: BoletoDto): Observable<Response> {
    this.useCase.toRegistrarBoleto();
    return this.useCase.execute(boleto);
  }

  @Put()
  actualizarBoleto(
    @Body() boletoActualizar: Partial<BoletoDto>,
  ): Observable<Response> {
    this.useCase.toActualizarBoleto();
    return this.useCase.execute(boletoActualizar);
  }
}
