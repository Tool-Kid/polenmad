import { Module } from '@nestjs/common';
import { MetricsModule } from './metrics/metrics.module';

@Module({
  imports: [MetricsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}