import { Global, Module } from '@nestjs/common';
import { CqrsModule, EventBus } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule],
  providers: [
    {
      provide: EventBus,
      useExisting: EventBus,
    },
  ],
})
@Global()
export class BusModule {}
