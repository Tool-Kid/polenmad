import { Module } from '@nestjs/common';
import { PollenCollectedEventHandler } from '@polenmad/metrics';

import { GetMetricsController } from './get/get-metrics.controller';
import { MetricsRepository } from './metrics.repository';

const EVENT_HANDLERS = [PollenCollectedEventHandler];

@Module({
  imports: [],
  controllers: [GetMetricsController],
  providers: [
    { provide: MetricsRepository, useClass: MetricsRepository as any },
    ...EVENT_HANDLERS,
  ],
})
export class MetricsModule {}
