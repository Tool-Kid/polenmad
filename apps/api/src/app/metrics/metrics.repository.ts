export abstract class MetricsRepository {
  abstract getMetrics(): Promise<any[]>;
  abstract updateMetrics(metrics: any): Promise<any>;
}
