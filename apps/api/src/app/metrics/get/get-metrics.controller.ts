import { Controller, Get } from '@nestjs/common';
import { MetricsRepository } from '../metrics.repository';
import { PollenCollector } from '../tasks/pollen-collector-data';

@Controller('metrics')
export class GetMetricsController {
  constructor(
    private readonly repository: MetricsRepository,
    private collector: PollenCollector
  ) {}

  @Get()
  getMetrics() {
    return this.collector.collect();
  }
}
