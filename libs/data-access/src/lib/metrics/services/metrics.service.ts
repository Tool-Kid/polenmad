import { Observable } from 'rxjs';
import { PollenMetrics } from '../metric';

export abstract class MetricsService {
  abstract getMetrics(): Observable<PollenMetrics>;
}
