import { PollenMetricsSchema } from './metrics.schema';

export abstract class MetricsRepository {
  abstract getMetrics(): Promise<PollenMetricsSchema[]>;
  abstract updateMetrics(
    metrics: PollenMetricsSchema
  ): Promise<PollenMetricsSchema>;
}
