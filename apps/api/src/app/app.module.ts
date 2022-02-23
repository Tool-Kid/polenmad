import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AWS_MODULE } from './aws-config';

import { MetricsModule } from './metrics/metrics.module';
import { PollenCollectorModule } from './pollen-collector/pollen-collector.module';

@Module({
  imports: [
    MetricsModule,
    PollenCollectorModule,
    EventEmitterModule.forRoot(),
    AWS_MODULE,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
