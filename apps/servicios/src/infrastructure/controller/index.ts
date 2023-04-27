import { BoletoSuscriberController } from '../messaging/suscriber/boleto.suscriber.controller';
import { BoletoController } from './boleto.controller';

export const Controllers = [BoletoController, BoletoSuscriberController];

export * from './boleto.controller';
