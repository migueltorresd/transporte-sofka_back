import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { BoletoService } from '../../service';
import { BoletoDomainEntity } from '../../../domain/entity';
import { IEnvioDomain } from '../../../domain/interface';

@Controller()
export class BoletoSuscriberController {
  constructor(private readonly boletoService: BoletoService) {}

  @EventPattern('boleto_service.envio_confirmado')
  createdDeposit(@Payload() data: string, @Ctx() context: RmqContext) {
    this.crearBoletoConEnvio(data, context);
  }

  private crearBoletoConEnvio(data: string, context: RmqContext): void {
    console.log('--------------------------------------');
    console.log('Data: ', data);
    console.log('--------------------------------------');
    console.log('Context: ', context);
    console.log('--------------------------------------');
    const envio: IEnvioDomain = JSON.parse(data);
    const boleto = new BoletoDomainEntity({
      envioId: envio._id,
      usuarioId: envio.usuarioId,
      fecha: envio.fecha,
      completado: false,
    });
    this.boletoService.crear(boleto).subscribe();
  }
}
