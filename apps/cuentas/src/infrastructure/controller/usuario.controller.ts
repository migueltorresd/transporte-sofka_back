import { Body, Controller, Get, Query, Post, Put } from '@nestjs/common';
import { UsuarioDelegate } from '../../application/delegate';
import { UsuarioService } from '../service';
import { Observable } from 'rxjs';
import { CrearUsuarioDto, CredencialesDto, UsuarioDto } from '../dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('usuario')
@Controller('api/usuario')
export class UsuarioController {
  private readonly useCase: UsuarioDelegate;

  constructor(private readonly usuarioService: UsuarioService) {
    this.useCase = new UsuarioDelegate(usuarioService);
  }

  @Post('registrar')
  registrarUsuario(@Body() usuario: CrearUsuarioDto): Observable<Response> {
    this.useCase.toRegistrarUsuario();
    return this.useCase.execute(usuario);
  }

  @ApiBody({ type: UsuarioDto })
  @Put('actualizar-usuario')
  actualizarUsuario(
    @Query('id') id: string,
    @Body() usuario: Partial<UsuarioDto>,
  ): Observable<Response> {
    this.useCase.toActualizarUsuario();
    return this.useCase.execute(id, usuario);
  }

  @Get('obtener-por-id')
  obtenerPorId(@Query('id') id: string): Observable<Response> {
    this.useCase.toBuscarUsuarioPorId();
    return this.useCase.execute(id);
  }

  @Get('obtener-por-correo')
  obtenerPorCorreo(@Query('correo') correo: string): Observable<Response> {
    this.useCase.toBuscarUsuarioPorCorreo();
    return this.useCase.execute(correo);
  }

  @Get('obtener-por-dni')
  obtenerPorDni(@Query('dni') dni: string): Observable<Response> {
    this.useCase.toBuscarUsuarioPorDni();
    return this.useCase.execute(dni);
  }

  @Get('obtener-todos')
  obtenerTodos(): Observable<Response> {
    this.useCase.toBuscarTodos();
    return this.useCase.execute();
  }

  /*   @Get('generar-usuario')
  GenerarNombreDeUsuarioUsuario(@Query('id') id: string): Observable<Response> {
    this.useCase.toGenerarNombreDeUsuarioUsuarioUseCase();
    return this.useCase.execute(id);
  }
 */

  @Post('login')
  loginUsuario(@Body() credenciales: CredencialesDto): Observable<Response> {
    this.useCase.toLoginUsuario();
    return this.useCase.execute(credenciales.correo, credenciales.contrasenna);
  }
}
