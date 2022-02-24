import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { MetricsModule } from './metrics/metrics.module';
import { PollenCollectorModule } from './pollen-collector/pollen-collector.module';

@Module({
  imports: [MetricsModule, PollenCollectorModule, EventEmitterModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
