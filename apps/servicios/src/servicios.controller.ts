import { Controller, Get } from '@nestjs/common';
import { ServiciosService } from './servicios.service';

@Controller()
export class ServiciosController {
  constructor(private readonly serviciosService: ServiciosService) {}

  @Get()
  getHello(): string {
    return this.serviciosService.getHello();
  }
}
