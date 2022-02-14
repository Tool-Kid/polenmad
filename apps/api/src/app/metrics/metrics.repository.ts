export abstract class MetricsRepository {
  abstract getMetrics(): Promise<any>;
}
