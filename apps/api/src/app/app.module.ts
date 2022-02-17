import { Module } from '@nestjs/common';
import { DYNAMO_DB_MODULE } from './dynamo-db';
import { MetricsModule } from './metrics/metrics.module';

@Module({
  imports: [MetricsModule, DYNAMO_DB_MODULE],
  controllers: [],
  providers: [],
})
export class AppModule {}
