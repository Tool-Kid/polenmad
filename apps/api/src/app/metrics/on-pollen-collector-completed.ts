import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { POLLEN_PROCESSOR_COMPLETED__EVENT } from '../shared';
import { MetricsRepository } from './metrics.repository';
import { PollenMetricsSchema } from './metrics.schema';

@Injectable()
export class OnPollenCollectorCompleted {
  constructor(private readonly metricsRepository: MetricsRepository) {}

  @OnEvent(POLLEN_PROCESSOR_COMPLETED__EVENT)
  handle(data: PollenMetricsSchema) {
    this.metricsRepository.updateMetrics(data);
  }
}
