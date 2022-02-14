import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { GetMetricsController } from './get/get-metrics.controller';
import { MetricsRepository } from './metrics.repository';
import { PollenCollector } from './tasks/pollen-collector-data';
import { FooMetricsRepository } from './foo-metrics.repository';

@Module({
  imports: [HttpModule],
  controllers: [GetMetricsController],
  providers: [
    { provide: MetricsRepository, useClass: FooMetricsRepository },
    PollenCollector,
  ],
})
export class MetricsModule {}
