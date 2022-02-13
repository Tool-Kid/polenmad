import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PollenMetrics } from '../metric';
import { MetricsService } from './metrics.service';

@Injectable({
  providedIn: 'root',
})
export class InMemoryMetricsService implements MetricsService {
  getMetrics(): Observable<PollenMetrics> {
    return of<PollenMetrics>({
      lastUpdated: 1644765390076,
      entries: [
        {
          lastUpdated: 1644765390076,
          value: {
            type: 'total',
            polllenGrains: {
              count: 126,
              units: '',
            },
          },
        },
        {
          lastUpdated: 1644765390076,
          value: {
            type: 'alnus',
            polllenGrains: {
              count: 126,
              units: '',
            },
          },
        },
        {
          lastUpdated: 1644765390076,
          value: {
            type: 'acer',
            polllenGrains: {
              count: 126,
              units: '',
            },
          },
        },
        {
          lastUpdated: 1644765390076,
          value: {
            type: 'betula',
            polllenGrains: {
              count: 126,
              units: '',
            },
          },
        },
        {
          lastUpdated: 1644765390076,
          value: {
            type: 'corylus',
            polllenGrains: {
              count: 126,
              units: '',
            },
          },
        },
        {
          lastUpdated: 1644765390076,
          value: {
            type: 'cupresaceae_taxaceae',
            polllenGrains: {
              count: 126,
              units: '',
            },
          },
        },
        {
          lastUpdated: 1644765390076,
          value: {
            type: 'fraxinus',
            polllenGrains: {
              count: 126,
              units: '',
            },
          },
        },
        {
          lastUpdated: 1644765390076,
          value: {
            type: 'platanus',
            polllenGrains: {
              count: 126,
              units: '',
            },
          },
        },
        {
          lastUpdated: 1644765390076,
          value: {
            type: 'poaceae',
            polllenGrains: {
              count: 126,
              units: '',
            },
          },
        },
        {
          lastUpdated: 1644765390076,
          value: {
            type: 'popolus',
            polllenGrains: {
              count: 126,
              units: '',
            },
          },
        },
        {
          lastUpdated: 1644765390076,
          value: {
            type: 'salix',
            polllenGrains: {
              count: 126,
              units: '',
            },
          },
        },
        {
          lastUpdated: 1644765390076,
          value: {
            type: 'ulmus',
            polllenGrains: {
              count: 126,
              units: '',
            },
          },
        },
      ],
    });
  }
}
