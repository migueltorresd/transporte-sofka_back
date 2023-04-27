/**
 * Event entity interface
 *
 * @export
 * @interface IEventPublisher
 */
export interface IEventPublisher {
  emit(pattern: string, data: string): void;
}
