import { MetricEntry } from './entry';

export interface PollenMetrics {
  lastUpdated: number;
  entries: MetricEntry[];
}
