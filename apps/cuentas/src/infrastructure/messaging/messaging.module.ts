import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BOLETOS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://fyblbruz:CPe0H2C1De_7YhHN8dzCvkyTXo187Cda@jackal.rmq.cloudamqp.com/fyblbruz',
          ],
          queue: 'boletos_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class MessagingModule {}
