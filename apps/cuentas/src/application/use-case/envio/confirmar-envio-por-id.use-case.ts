// Librerias
import { Observable, tap } from 'rxjs';

// Servicios de dominio
import { IEnvioDomainService } from '../../../domain/service';

// Entidades
import { EnvioDomainEntity } from '../../../domain/entity';
import { CrearBoletoPublisherPublisherBase } from '../../../domain/messaging/publisher/payment-created.publisher.base';

/**
 * Este metodo permite realizar la busqueda de un envio mediante un ID unico
 * Recibe como parametro un dato tipo string con id de envio
 * en caso de no encontrar una entidad asociada se devuelve un error tipo "not found"
 * El metodo retorna la entidad que coincida con el ID dado
 *
 * @export
 * @class ConfirmarEnvioPorIdUseCase
 */
export class ConfirmarEnvioPorIdUseCase {
  constructor(
    private readonly envioDomainService: IEnvioDomainService<EnvioDomainEntity>,
    private readonly confirmarEnvioEvento: CrearBoletoPublisherPublisherBase<EnvioDomainEntity>,
  ) {}

  execute(id: string): Observable<EnvioDomainEntity> {
    return this.envioDomainService.confirmarPorId(id).pipe(
      tap((envio) => {
        this.confirmarEnvioEvento.response = envio;
        this.confirmarEnvioEvento.publish();
      }),
    );
  }
}
