import { Module } from '@nestjs/common';
import { GetMetricsController } from './get/get-metrics.controller';
import { MetricsRepository } from './metrics.repository';
import { OnPollenCollectorCompleted } from './on-pollen-collector-completed';

const EVENT_HANDLERS = [OnPollenCollectorCompleted];

@Module({
  imports: [],
  controllers: [GetMetricsController],
  providers: [
    { provide: MetricsRepository, useClass: MetricsRepository as any },
    ...EVENT_HANDLERS,
  ],
})
export class MetricsModule {}
