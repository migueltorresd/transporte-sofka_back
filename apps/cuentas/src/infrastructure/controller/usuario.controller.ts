import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioDelegate } from '../../application/delegate';
import { UsuarioService } from '../service';
import { Observable } from 'rxjs';
import { UsuarioDto } from '../dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('usuario')
@Controller('api/usuario')
export class UsuarioController {
  private readonly useCase: UsuarioDelegate;

  constructor(private readonly usuarioService: UsuarioService) {
    this.useCase = new UsuarioDelegate(usuarioService);
  }

  @Post('registrar')
  registrarUsuario(@Body() usuario: UsuarioDto): Observable<Response> {
    this.useCase.toRegistrarUsuario();
    return this.useCase.execute(usuario);
  }

  @Put('actualizar-usuario')
  actualizarUsuario(
    @Param('id') id: string,
    @Body() usuarioActualizar: Partial<UsuarioDto>,
  ): Observable<Response> {
    this.useCase.toActualizarUsuario();
    return this.useCase.execute(id, usuarioActualizar);
  }

  @Get('obtener-por-dni')
  obtenerPorDni(@Param('dni') dni: string): Observable<Response> {
    this.useCase.toBuscarUsuarioPorDni();
    return this.useCase.execute(dni);
  }

  @Get('obtener-por-id')
  obtenerPorId(@Param('id') id: string): Observable<Response> {
    this.useCase.toBuscarUsuarioPorId();
    return this.useCase.execute(id);
  }

  @Get('obtener-por-correo')
  obtenerPorCorreo(@Param('correo') correo: string): Observable<Response> {
    this.useCase.toBuscarUsuarioPorCorreo();
    return this.useCase.execute(correo);
  }

  @Get('obtener-todos')
  obtenerTodos(): Observable<Response> {
    this.useCase.toBuscarTodos();
    return this.useCase.execute();
  }

  @Post('login')
  loginUsuario(@Body() credenciales: UsuarioDto): Observable<Response> {
    this.useCase.toLoginUsuario();
    return this.useCase.execute(credenciales.email, credenciales.password);
  }
}
