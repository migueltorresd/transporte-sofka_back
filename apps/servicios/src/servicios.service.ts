import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiciosService {
  getHello(): string {
    return 'Hello World!';
  }
}
