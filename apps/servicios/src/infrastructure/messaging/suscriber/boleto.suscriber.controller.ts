import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { BoletoService } from '../../service';
import { BoletoDomainEntity } from '../../../domain/entity';
import { IEnvioDomain } from '../../../domain/interface';

@Controller()
export class BoletoSuscriberController {
  constructor(private readonly boletoService: BoletoService) {}

  @EventPattern('boleto_service.envio_confirmado')
  createdDeposit(@Payload() data: string) {
    this.crearBoletoConEnvio(data);
  }

  private crearBoletoConEnvio(data: string): void {
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
