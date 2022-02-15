import { Module } from '@nestjs/common';

import { GetMetricsController } from './get/get-metrics.controller';
import { MetricsRepository } from './metrics.repository';
import { FooMetricsRepository } from './foo-metrics.repository';
import { PollenCollectorModule } from '../pollen-collector/pollen-collector.module';

@Module({
  imports: [PollenCollectorModule],
  controllers: [GetMetricsController],
  providers: [{ provide: MetricsRepository, useClass: FooMetricsRepository }],
})
export class MetricsModule {}
