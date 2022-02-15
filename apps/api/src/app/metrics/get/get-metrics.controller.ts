import { Controller, Get } from '@nestjs/common';
import { PollenDataProcessorService } from '../../pollen-collector/pollen-data-processor.service';
import { MetricsRepository } from '../metrics.repository';

@Controller('metrics')
export class GetMetricsController {
  constructor(
    private readonly repository: MetricsRepository,
    private collector: PollenDataProcessorService
  ) {}

  @Get()
  getMetrics() {
    return this.collector.collect();
  }
}
