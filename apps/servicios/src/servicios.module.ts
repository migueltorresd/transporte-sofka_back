import { Module } from '@nestjs/common';
import { ServiciosController } from './servicios.controller';
import { ServiciosService } from './servicios.service';

@Module({
  imports: [],
  controllers: [ServiciosController],
  providers: [ServiciosService],
})
export class ServiciosModule {}
