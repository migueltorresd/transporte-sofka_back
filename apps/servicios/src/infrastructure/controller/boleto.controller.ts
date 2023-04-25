import { Body, Controller, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BoletoDelegate } from '../../application';
import { BoletoService } from '../service';
import { Observable } from 'rxjs';
import { BoletoDto } from '../dto/boleto.dto';

@ApiTags('boleto')
@Controller('api/boleto')
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

  @Put('actualizar-boleto')
  actualizarBoleto(
    @Body() boletoActualizar: Partial<BoletoDto>,
  ): Observable<Response> {
    this.useCase.toActualizarBoleto();
    return this.useCase.execute(boletoActualizar);
  }
}
