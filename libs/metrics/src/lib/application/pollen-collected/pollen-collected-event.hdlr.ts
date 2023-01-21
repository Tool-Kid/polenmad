import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PollenCollectedEvent } from './pollen-collected.event';

@EventsHandler(PollenCollectedEvent)
export class PollenCollectedEventHandler
  implements IEventHandler<PollenCollectedEvent>
{
  handle(event: PollenCollectedEvent) {
    console.log(event);
  }
}
