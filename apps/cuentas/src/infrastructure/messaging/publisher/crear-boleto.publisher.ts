import { Observable } from 'rxjs';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { EnvioDomainEntity } from '../../../domain/entity';
import { IEventPublisher } from '../../../domain/messaging/interface/event-publisher.interface';
import { CrearBoletoPublisherPublisherBase } from '../../../domain/messaging/publisher/payment-created.publisher.base';

@Injectable()
export class CrearBoletoPublisher extends CrearBoletoPublisherPublisherBase {
  constructor(@Inject('BOLETOS_SERVICE') private readonly proxy: ClientProxy) {
    super(proxy as IEventPublisher);
  }

  emit(pattern: string, data: string): Observable<EnvioDomainEntity> {
    return this.proxy.emit(pattern, data);
  }
}
