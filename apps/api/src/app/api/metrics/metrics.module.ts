import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PollenCollectedEventHandler } from '@polenmad/metrics';

import { GetMetricsController } from './get/get-metrics.controller';
import { MetricsRepository } from './metrics.repository';

const EVENT_HANDLERS = [PollenCollectedEventHandler];

@Module({
  imports: [CqrsModule],
  controllers: [GetMetricsController],
  providers: [
    { provide: MetricsRepository, useClass: MetricsRepository as any },
    ...EVENT_HANDLERS,
  ],
})
export class MetricsModule {}
