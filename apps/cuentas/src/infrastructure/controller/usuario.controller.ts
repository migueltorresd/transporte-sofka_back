import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UsuarioDelegate } from '../../application/delegate/usuario.delegate';
import { UsuarioService } from '../service';
import { Observable } from 'rxjs';
import { UsuarioDomainEntity } from '../../domain';
import { UsuarioDto } from '../dto/Usuario.dto';

@Controller('usuario')
export class UsuarioController {
  private readonly useCase: UsuarioDelegate;

  constructor(private readonly usuarioService: UsuarioService) {
    this.useCase = new UsuarioDelegate(usuarioService);
  }

  @Post('crear')
  registrarUsuario(@Body() usuario: UsuarioDto): Observable<Response> {
    this.useCase.toRegistrarUsuario();
    return this.useCase.execute(usuario);
  }

  @Put(':id')
  actualizar(
    @Param('id') id: string,
    @Body() usuarioActualizar: Partial<UsuarioDto>,
  ): Observable<Response> {
    this.useCase.toActualizarUsuario();
    return this.useCase.execute(id, usuarioActualizar);
  }

  @Get(':dni')
  obtenerPorDni(@Param('dni') dni: string): Observable<Response> {
    this.useCase.toBuscarUsuarioPorDni();
    return this.useCase.execute(dni);
  }

  @Get(':id')
  obtenerPorId(@Param('id') id: string): Observable<Response> {
    this.useCase.toBuscarUsuarioPorId();
    return this.useCase.execute(id);
  }
}
