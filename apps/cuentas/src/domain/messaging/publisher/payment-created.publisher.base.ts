import { EnvioDomainEntity } from '../../entity';
import { EventPublisherBase } from '../event-publisher.entity';

export abstract class CrearBoletoPublisherPublisherBase<
  Response = EnvioDomainEntity,
> extends EventPublisherBase<Response> {
  publish(): void {
    this.emit('boleto_service.envio_confirmado', JSON.stringify(this.response));
  }
}
