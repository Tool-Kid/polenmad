import { ClassProvider, Provider, Type } from '@angular/core';
import { ProviderStrategy } from '.';
import { DataAccessModuleConfig } from '..';
import {
  HttpMetricsService,
  InMemoryMetricsService,
  MetricsService,
} from './metrics';

const INMEMORY_PROVIDERS: ClassProvider[] = [
  {
    provide: MetricsService,
    useClass: InMemoryMetricsService,
  },
];

const HTTP_PROVIDERS: ClassProvider[] = [
  {
    provide: MetricsService,
    useClass: HttpMetricsService,
  },
];

function getProvidersForStrategy(strategy: ProviderStrategy): ClassProvider[] {
  return strategy === 'http' ? HTTP_PROVIDERS : INMEMORY_PROVIDERS;
}

export function getProviders(config: DataAccessModuleConfig): Provider[] {
  return getProvidersForStrategy(config.strategy);
}
