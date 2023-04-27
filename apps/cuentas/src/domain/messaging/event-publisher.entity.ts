import { IEventPublisher } from './interface/event-publisher.interface';

/**
 * Event Publisher Base for managing of events responses and proxy
 *
 * @export
 * @abstract
 * @class EventPublisherBase
 * @implements {IEventPublisher}
 * @template Response
 */
export abstract class EventPublisherBase<Response> implements IEventPublisher {
  private _response: Response | Response[] | null;

  /**
   * The constructor function is used to inject the IEventPublisher interface into the class.
   * @param {IEventPublisher} eventPublisher - IEventPublisher
   */
  constructor(private readonly eventPublisher: IEventPublisher) {}

  /**
   * It returns the response.
   * @returns The response property is being returned.
   */
  get response(): Response | Response[] | null {
    return this._response;
  }

  /**
   * It sets the response property to the value passed in.
   * @param {Response | Response[] | null} value - The value to set the response to.
   */
  set response(value: Response | Response[] | null) {
    this._response = value;
  }

  /**
   * This function emits an event to the event publisher.
   * @param {string} pattern - The pattern to match against.
   * @param {string} data - The data to be sent to the client.
   */
  emit(pattern: string, data: string): void {
    this.eventPublisher.emit(pattern, data);
  }

  abstract publish(): void;
}
