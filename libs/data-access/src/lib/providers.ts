import { Provider } from '@angular/core';
import { DataAccessModuleConfig } from '..';
import { HttpMetricsService, InMemoryMetricsService } from './metrics';

const HTTP_PROVIDERS = [HttpMetricsService];

const IN_MEMORY_PROVIDERS = [InMemoryMetricsService];

export function getProviders(config: DataAccessModuleConfig): Provider[] {
  return config.strategy === 'http' ? HTTP_PROVIDERS : IN_MEMORY_PROVIDERS;
}
