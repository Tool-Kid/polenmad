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
            type: 'todos',
            polllenGrains: {
              count: 126,
              units: '',
            },
          },
        },
        {
          lastUpdated: 1644765390076,
          value: {
            type: 'alnu',
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
            type: 'betu',
            polllenGrains: {
              count: 126,
              units: '',
            },
          },
        },
        {
          lastUpdated: 1644765390076,
          value: {
            type: 'cory',
            polllenGrains: {
              count: 126,
              units: '',
            },
          },
        },
        {
          lastUpdated: 1644765390076,
          value: {
            type: 'cupr',
            polllenGrains: {
              count: 126,
              units: '',
            },
          },
        },
        {
          lastUpdated: 1644765390076,
          value: {
            type: 'frax',
            polllenGrains: {
              count: 126,
              units: '',
            },
          },
        },
        {
          lastUpdated: 1644765390076,
          value: {
            type: 'plat',
            polllenGrains: {
              count: 126,
              units: '',
            },
          },
        },
        {
          lastUpdated: 1644765390076,
          value: {
            type: 'poac',
            polllenGrains: {
              count: 126,
              units: '',
            },
          },
        },
        {
          lastUpdated: 1644765390076,
          value: {
            type: 'popu',
            polllenGrains: {
              count: 126,
              units: '',
            },
          },
        },
        {
          lastUpdated: 1644765390076,
          value: {
            type: 'sali',
            polllenGrains: {
              count: 126,
              units: '',
            },
          },
        },
        {
          lastUpdated: 1644765390076,
          value: {
            type: 'ulmu',
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
