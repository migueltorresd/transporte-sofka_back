import { Module } from '@nestjs/common';
import { MongoModule } from './persistence/database/mongo';
import { UsuarioController } from './controller/usuario.controller';
import { UsuarioService } from './service';

@Module({
  imports: [MongoModule],
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: [UsuarioService],
})
export class AppModule {}
