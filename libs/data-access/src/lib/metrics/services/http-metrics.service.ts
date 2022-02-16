import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PollenMetrics } from '../metric';
import { MetricsService } from './metrics.service';

@Injectable({
  providedIn: 'root',
})
export class HttpMetricsService implements MetricsService {
  constructor(private readonly http: HttpClient) {}

  getMetrics(): Observable<PollenMetrics> {
    return this.http.get<PollenMetrics>(`/api/metrics`);
  }
}
