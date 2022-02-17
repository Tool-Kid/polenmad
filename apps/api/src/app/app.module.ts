import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { DYNAMO_DB_MODULE } from './dynamo-db';

import { MetricsModule } from './metrics/metrics.module';
import { PollenCollectorModule } from './pollen-collector/pollen-collector.module';

@Module({
  imports: [
    MetricsModule,
    PollenCollectorModule,
    DYNAMO_DB_MODULE,
    EventEmitterModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
